'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Cpu, Square } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import Sidebar from '../components/Sidebar';
import { useTypewriter } from '../hooks/useTypewriter';
import Navigation from '../components/Navigation';
import LearningPlatform from '../components/LearningPlatform';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function CyberChat() {
  const [currentView, setCurrentView] = useState<'chat' | 'learning'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentAiResponse, setCurrentAiResponse] = useState('');
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { displayedText, isTyping } = useTypewriter(currentAiResponse, 20);

  const bootSequence = [
    'INITIALIZING ZOTORA AI v1.0...',
    'LOADING SECURITY MODULES...',
    'ESTABLISHING ENCRYPTED CONNECTION...',
    'CALIBRATING NEURAL INTERFACES...',
    'ACTIVATING HACKER PROTOCOLS...',
    'SYSTEM READY. AWAITING INPUT...'
  ];

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 3000);

    return () => clearTimeout(bootTimer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTopicSelect = (topic: string) => {
    setInput(`Tell me about ${topic}`);
  };

  const handleStopGeneration = () => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
      setIsLoading(false);
      setCurrentAiResponse('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Create new AbortController for this request
    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
        signal: controller.signal
      });

      if (controller.signal.aborted) {
        return; // Request was aborted
      }

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Start typewriter effect
      setCurrentAiResponse(data.content);
      
      // Add the message after typewriter completes
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.content,
          role: 'assistant',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setCurrentAiResponse('');
        setIsLoading(false);
        setAbortController(null);
      }, data.content.length * 20 + 500); // Wait for typewriter to complete

    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Request was aborted, don't show error message
        return;
      }
      
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '[ERROR] Connection to neural network failed. Please retry.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      setAbortController(null);
    }
  };

  if (isBooting) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-2xl w-full p-8">
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                [ ZOTORA AI v1.0 ]
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Terminal className="w-4 h-4" />
                <span>NEURAL INTERFACE INITIALIZING</span>
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            
            <div className="space-y-2">
              {bootSequence.map((line, index) => (
                <div key={index} className="boot-text">
                  <span className="text-green-400 font-mono text-sm">
                    &gt; {line}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2">
                <span className="text-blue-400 text-sm">LOADING</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'learning') {
    return (
      <div className="min-h-screen bg-black">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        <div className="ml-20">
          <LearningPlatform />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex h-[calc(100vh)] ml-20">
        <Sidebar 
          onTopicSelect={handleTopicSelect}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-gray-800 bg-gray-900 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  [ ZOTORA AI v1.0 ]
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Ethical Hacking & Cybersecurity AI Assistant
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs text-gray-500">STATUS</div>
                  <div className="text-sm text-green-400">ONLINE</div>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </header>

          {/* Messages Container */}
          <div className="flex-1 overflow-hidden p-4 bg-black">
            <div className="message-container h-full">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Terminal className="w-16 h-16 text-green-400 mx-auto mb-4 opacity-50" />
                    <h2 className="text-xl font-semibold text-white mb-2">
                      READY FOR INTERACTION
                    </h2>
                    <p className="text-gray-500">
                      Select a topic from the sidebar or type your query below
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {displayedText && (
                    <ChatMessage
                      message={{
                        id: 'typing',
                        content: displayedText,
                        role: 'assistant',
                        timestamp: new Date()
                      }}
                      isTyping={isTyping}
                    />
                  )}
                  {isLoading && !displayedText && (
                    <div className="flex justify-start mb-4">
                      <div className="max-w-3xl">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                            <span className="text-black font-bold text-sm">AI</span>
                          </div>
                          <div className="border border-green-400 p-4 rounded-lg bg-gray-900">
                            <div className="text-green-400 loading-dots">
                              Hacking...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Form */}
          <div className="border-t border-gray-800 bg-gray-900 p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your cybersecurity query..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
                disabled={isLoading}
              />
              {isLoading ? (
                <button
                  type="button"
                  onClick={handleStopGeneration}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Square className="w-4 h-4" />
                  [ STOP ]
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  [ EXECUTE ]
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
