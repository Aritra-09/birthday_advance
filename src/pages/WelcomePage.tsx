import { useEffect, useState } from 'react';

export default function WelcomePage() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl md:text-6xl opacity-20 animate-bounce pointer-events-none"
          style={{
            left: heart.left,
            top: '-50px',
            animation: `float 6s ease-in infinite`,
            animationDelay: heart.delay,
          }}
        >
          💕
        </div>
      ))}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* Profile Image Placeholder */}
      <div className="mb-8 md:mb-12">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-gradient-to-r from-rose-300 to-pink-300 shadow-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
          <div className="text-6xl md:text-8xl"></div>
          <img src="your-photo.jpg" alt="special someone" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Love Message */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
          Happy Birthday, Love 💕
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed mb-6 font-sans">
          Today is your day to shine as bright as you make my world every single day.
        </p>

        <p className="text-base md:text-lg text-gray-600 italic font-light leading-relaxed">
          You are my greatest gift, my happiest thought, and my favorite person in the entire world. 
          Thank you for being you, for loving me, and for making every day an adventure.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="flex gap-4 md:gap-8 justify-center flex-wrap mt-8">
        <div className="text-5xl md:text-6xl animate-pulse">🌹</div>
        <div className="text-5xl md:text-6xl animate-pulse" style={{ animationDelay: '0.2s' }}>💝</div>
        <div className="text-5xl md:text-6xl animate-pulse" style={{ animationDelay: '0.4s' }}>✨</div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 text-center text-gray-500 animate-bounce">
        <p className="text-sm md:text-base mb-2">Explore more pages →</p>
        <div className="text-2xl">👇</div>
      </div>
    </div>
  );
}
