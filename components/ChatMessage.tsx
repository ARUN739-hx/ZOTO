'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
}

export default function ChatMessage({ message, isTyping = false }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 group`}>
      <div className={`max-w-3xl ${isUser ? 'order-2' : 'order-1'}`}>
        <div className="flex items-start gap-3">
          {!isUser && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
          )}
          
          <div className="relative">
            <div
              className={`p-4 rounded-lg border ${
                isUser 
                  ? 'bg-blue-600 border-blue-500' 
                  : 'bg-gray-800 border-gray-700'
              }`}
            >
              <div
                className={`text-sm leading-relaxed whitespace-pre-wrap ${
                  isUser 
                    ? 'text-white' 
                    : 'text-gray-100'
                } ${isTyping ? 'terminal-cursor' : ''}`}
              >
                {message.content}
              </div>
              
              {!isUser && (
                <button
                  onClick={handleCopy}
                  className="copy-button absolute top-2 right-2 p-1 rounded hover:bg-gray-700 transition-all duration-200"
                  title="Copy message"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              )}
            </div>
            
            <div className="mt-1 px-1">
              <span className="text-xs text-gray-500">
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
          </div>

          {isUser && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center order-1">
              <span className="text-white font-bold text-sm">U</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
