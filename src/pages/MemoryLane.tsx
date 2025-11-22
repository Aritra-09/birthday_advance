import { useState } from 'react';

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function MemoryLane() {
  const [memories] = useState<Memory[]>([
    {
      id: 1,
      date: 'First Meeting',
      title: 'The Day We Met',
      description: 'The moment that changed everything...',
      image: '📸',
    },
    {
      id: 2,
      date: 'Summer Adventure',
      title: 'Our First Trip',
      description: 'Creating unforgettable memories together...',
      image: '✈️',
    },
    {
      id: 3,
      date: 'Special Night',
      title: 'A Night to Remember',
      description: 'When you surprised me with that smile...',
      image: '🌙',
    },
    {
      id: 4,
      date: 'Random Tuesday',
      title: 'Just Us',
      description: 'The simple moments are the best ones...',
      image: '☕',
    },
    {
      id: 5,
      date: 'Holiday Season',
      title: 'Winter Wonderland',
      description: 'Everything is magical when you\'re around...',
      image: '❄️',
    },
    {
      id: 6,
      date: 'Present Day',
      title: 'Our Beautiful Story',
      description: 'And the adventure continues...',
      image: '💫',
    },
  ]);

  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Our Memory Lane
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16">
          A collection of moments that made us who we are today
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 to-pink-300"></div>

          <div className="space-y-8 md:space-y-12">
            {memories.map((memory, index) => (
              <div key={memory.id} className={`flex gap-4 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-3">
                    <span className="text-sm font-semibold text-rose-600">{memory.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{memory.title}</h3>
                  <p className="text-gray-600 font-light">{memory.description}</p>
                </div>

                {/* Image/Icon */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center shadow-lg text-4xl md:text-5xl hover:scale-110 transition-transform duration-300">
                    {memory.image}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-lg">
            Every moment with you is a cherished memory ✨
          </p>
        </div>
      </div>
    </div>
  );
}
