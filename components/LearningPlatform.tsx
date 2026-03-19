'use client';

import { useState, useMemo } from 'react';
import { Search, Book, Code, Terminal, Shield, Database, Wifi, Lock, Globe, Eye, Cpu, ChevronRight, Star, ExternalLink, Github, Copy, Check, Smartphone, Users, Key, Binary } from 'lucide-react';
import { cyberSecurityTools, toolCategories, getToolsByCategory, searchTools, CyberTool } from '../data/cybersecurity-tools';

interface LearningPlatformProps {
  onToolSelect?: (tool: CyberTool) => void;
}

export default function LearningPlatform({ onToolSelect }: LearningPlatformProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<CyberTool | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string>('');

  const filteredTools = useMemo(() => {
    let tools = selectedCategory === 'All' 
      ? cyberSecurityTools 
      : getToolsByCategory(selectedCategory);
    
    if (searchQuery) {
      tools = searchTools(searchQuery).filter(tool => 
        selectedCategory === 'All' || tool.category === selectedCategory
      );
    }
    
    return tools;
  }, [selectedCategory, searchQuery]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-900/20 border-green-800';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'Advanced': return 'text-red-400 bg-red-900/20 border-red-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Network Scanning': <Terminal className="w-4 h-4" />,
      'Web Application Testing': <Globe className="w-4 h-4" />,
      'Password Cracking': <Lock className="w-4 h-4" />,
      'Vulnerability Scanning': <Shield className="w-4 h-4" />,
      'Wireless Testing': <Wifi className="w-4 h-4" />,
      'Digital Forensics': <Database className="w-4 h-4" />,
      'Exploitation': <Code className="w-4 h-4" />,
      'OSINT': <Eye className="w-4 h-4" />,
      'Post-Exploitation': <Cpu className="w-4 h-4" />,
      'Network Analysis': <Terminal className="w-4 h-4" />,
      'Mobile Security': <Smartphone className="w-4 h-4" />,
      'Social Engineering': <Users className="w-4 h-4" />,
      'Cryptography': <Key className="w-4 h-4" />,
      'Reverse Engineering': <Binary className="w-4 h-4" />
    };
    return icons[category] || <Book className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-400" />
                Cybersecurity Learning Platform
              </h1>
              <p className="text-gray-500 mt-2">Master 1000+ cybersecurity tools with interactive guides</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                <span className="text-white font-semibold">{cyberSecurityTools.length}</span> Tools Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sticky top-6">
              <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category List */}
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    selectedCategory === 'All' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <Book className="w-4 h-4" />
                  All Tools
                  <span className="ml-auto text-xs bg-gray-800 px-2 py-1 rounded-full">
                    {cyberSecurityTools.length}
                  </span>
                </button>
                
                {toolCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      selectedCategory === category 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    {getCategoryIcon(category)}
                    {category}
                    <span className="ml-auto text-xs bg-gray-800 px-2 py-1 rounded-full">
                      {getToolsByCategory(category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedTool ? (
              /* Tool Detail View */
              <div className="bg-gray-900 rounded-lg border border-gray-800">
                <div className="p-6">
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="mb-4 text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    ← Back to tools
                  </button>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedTool.name}</h2>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={`px-2 py-1 rounded-full border ${getDifficultyColor(selectedTool.difficulty)}`}>
                          {selectedTool.difficulty}
                        </span>
                        <span className="text-gray-500">{selectedTool.category}</span>
                        <span className="text-gray-500">{selectedTool.subcategory}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {selectedTool.website && (
                        <a
                          href={selectedTool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {selectedTool.github && (
                        <a
                          href={selectedTool.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                      <p className="text-gray-300">{selectedTool.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Usage</h3>
                      <p className="text-gray-300">{selectedTool.usage}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Commands</h3>
                      <div className="space-y-2">
                        {selectedTool.commands.map((command, index) => (
                          <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                            <code className="text-green-400 font-mono text-sm">{command}</code>
                            <button
                              onClick={() => copyToClipboard(command)}
                              className="p-2 hover:bg-gray-700 rounded transition-colors"
                            >
                              {copiedCommand === command ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-500" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTool.platform.map(platform => (
                          <span key={platform} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTool.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full text-sm text-blue-300">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Tools Grid */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    {selectedCategory === 'All' ? 'All Tools' : selectedCategory}
                  </h2>
                  <span className="text-gray-500">
                    {filteredTools.length} tools found
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTools.map(tool => (
                    <div
                      key={tool.id}
                      onClick={() => setSelectedTool(tool)}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{tool.name}</h3>
                          <p className="text-sm text-gray-500">{tool.subcategory}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full border text-xs ${getDifficultyColor(tool.difficulty)}`}>
                          {tool.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {tool.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                              #{tag}
                            </span>
                          ))}
                          {tool.tags.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                              +{tool.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTools.length === 0 && (
                  <div className="text-center py-12">
                    <Book className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500">No tools found matching your criteria.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
