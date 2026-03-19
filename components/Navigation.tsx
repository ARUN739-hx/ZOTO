'use client';

import { MessageSquare, BookOpen, Shield, Settings, Terminal } from 'lucide-react';

interface NavigationProps {
  currentView: 'chat' | 'learning';
  onViewChange: (view: 'chat' | 'learning') => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-800 border-r border-gray-700 z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <nav className="flex-1 flex flex-col p-2 gap-2">
        <button
          onClick={() => onViewChange('chat')}
          className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
            currentView === 'chat'
              ? 'bg-green-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
          title="AI Chat"
        >
          <MessageSquare className="w-5 h-5 mb-1" />
          <span className="text-xs">Chat</span>
        </button>
        
        <button
          onClick={() => onViewChange('learning')}
          className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
            currentView === 'learning'
              ? 'bg-green-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
          title="Learning Platform"
        >
          <BookOpen className="w-5 h-5 mb-1" />
          <span className="text-xs">Learn</span>
        </button>
      </nav>
      
      {/* Settings Button */}
      <div className="p-2 border-t border-gray-700">
        <button 
          className="flex flex-col items-center justify-center w-full p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5 mb-1" />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
}
