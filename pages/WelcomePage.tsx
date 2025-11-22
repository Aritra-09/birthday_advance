"use client"

import { useEffect, useState } from "react"

interface WelcomePageProps {
  onNext: () => void
}

export default function WelcomePage({ onNext }: WelcomePageProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string }>>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl md:text-6xl opacity-20 animate-bounce pointer-events-none"
          style={{
            left: heart.left,
            top: "-50px",
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
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>

      {/* Left side stickers */}
      <div
        className="absolute left-4 md:left-8 top-20 md:top-32 text-5xl md:text-7xl animate-bounce"
        style={{ animationDelay: "0s" }}
      >
        <img
          src="/gif/c7339a531d54a28dddec8183397601d2.gif"
          alt="Love"
          className="w-20 md:w-40 lg:w-64 h-auto object-contain"
          loading="lazy"
        />
      </div>
      <div
        className="absolute left-2 md:left-6 bottom-44 text-6xl md:text-8xl sm:block"
        style={{ animation: "sway 3s ease-in-out infinite" }}
      >
        <img
          src="/gif/1f88e11d27353200fb397f2becffde95.gif"
          alt="Love"
          className="w-24 md:w-56 lg:w-72 h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Right side stickers */}
      <div
        className="absolute right-4 md:right-8 top-32 md:top-32 text-6xl md:text-8xl"
        style={{ animation: "sway 3s ease-in-out infinite", animationDelay: "0.5s" }}
      >
        <img
          src="/gif/8928dd421932dc48877ed4accfe8718b.gif"
          alt="Love"
          className="w-24 md:w-56 lg:w-72 h-auto object-contain"
          loading="lazy"
        />
      </div>
      <div
        className="absolute right-2 md:right-6 bottom-40 text-5xl md:text-7xl animate-bounce sm:block"
        style={{ animationDelay: "0.3s" }}
      >
        <img
          src="/gif/2c94b8c4f300962a8cd6c2bc53384fc7.gif"
          alt="Love"
          className="w-20 md:w-44 lg:w-64 h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Profile Image Placeholder */}
      <div className="mb-8 md:mb-12">
        <div className="w-40 h-40 md:w-96 md:h-96 rounded-full border-8 border-rose-200 shadow-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
          <div className="text-6xl md:text-8xl"></div>
          <img src="/images/Us.png" alt="special someone" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Love Message */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
          Happy Birthday Cutuuu with an Advance Gift 🎁
        </h1>

        <p className="text-lg md:text-2xl text-rose-600 font-semibold mb-6">Only 10 Days Left!</p>

        <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed mb-6 font-sans">
          I couldn't wait to share this special moment with you. Here's a small gesture of how much you mean to me.
        </p>

        <p className="text-base md:text-lg text-gray-600 italic font-light leading-relaxed">
          You are my greatest gift, my happiest thought, and my favorite person in the entire world. Thank you for being
          you, for loving me, and for making every day an adventure.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="flex gap-4 md:gap-8 justify-center flex-wrap mt-6">
        <div className="text-5xl md:text-6xl animate-pulse">🌹</div>
        <div className="text-5xl md:text-6xl animate-pulse" style={{ animationDelay: "0.2s" }}>
          💝
        </div>
        <div className="text-5xl md:text-6xl animate-pulse" style={{ animationDelay: "0.4s" }}>
          ✨
        </div>
      </div>

      {/* Scroll Indicator - replaced with Next button */}
      <div className="mt-16 text-center">
        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 mb-4"
        >
          Next Page →
        </button>
        <p className="text-sm text-gray-500">Discover more</p>
      </div>
    </div>
  )
}
