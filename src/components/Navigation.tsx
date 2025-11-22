import React from 'react';

interface NavigationProps {
  currentPage: 'welcome' | 'memories' | 'music' | 'card';
  setCurrentPage: (page: 'welcome' | 'memories' | 'music' | 'card') => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: 'welcome', label: '💕 Welcome', icon: '✨' },
    { id: 'memories', label: '📸 Memories', icon: '🎀' },
    { id: 'music', label: '🎵 Playlist', icon: '🎧' },
    { id: 'card', label: '🎂 Birthday', icon: '🎉' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as any)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
