'use client';

import { Shield, Terminal, Network, Database, Eye, Trophy, Search, ArrowUp } from 'lucide-react';

interface SidebarProps {
  onTopicSelect: (topic: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const cyberTopics = [
  {
    id: 'nmap',
    title: 'Nmap Scanning',
    icon: Network,
    description: 'Network discovery and security scanning'
  },
  {
    id: 'metasploit',
    title: 'Metasploit Basics',
    icon: Shield,
    description: 'Penetration testing framework'
  },
  {
    id: 'sqli',
    title: 'SQLi Techniques',
    icon: Database,
    description: 'SQL injection methods and prevention'
  },
  {
    id: 'wireshark',
    title: 'Wireshark Guide',
    icon: Eye,
    description: 'Network protocol analysis'
  },
  {
    id: 'burpsuite',
    title: 'Burp Suite Tutorial',
    icon: Terminal,
    description: 'Web application security testing'
  },
  {
    id: 'ctf',
    title: 'CTF Challenges',
    icon: Trophy,
    description: 'Capture The Flag competitions'
  },
  {
    id: 'osint',
    title: 'OSINT Tools',
    icon: Search,
    description: 'Open-source intelligence gathering'
  },
  {
    id: 'privilege',
    title: 'Linux Privilege Escalation',
    icon: ArrowUp,
    description: 'System privilege escalation techniques'
  }
];

export default function Sidebar({ onTopicSelect, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  return (
    <div className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-80'} relative z-10`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-white font-bold text-lg">
                [ MODULES ]
              </h2>
              <p className="text-gray-400 text-xs mt-1">
                Quick access to cybersecurity topics
              </p>
            </div>
          )}
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <Terminal className="w-4 h-4 text-gray-300" />
            </button>
          )}
        </div>
      </div>

      {/* Topics List */}
      <div className="p-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
        {cyberTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic.title)}
              className="p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-700 group"
              title={isCollapsed ? `${topic.title}: ${topic.description}` : ''}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm truncate">
                      {topic.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 truncate">
                      {topic.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800">
          <div className="text-xs">
            <div className="flex justify-between mb-1">
              <span className="text-gray-400">SYSTEM STATUS:</span>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">MODULES LOADED:</span>
              <span className="text-blue-400">{cyberTopics.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
