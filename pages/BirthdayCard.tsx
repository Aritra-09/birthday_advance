"use client"

import { useEffect, useState } from "react"

interface BirthdayCardProps {
  onPrev: () => void
}

export default function BirthdayCard({ onPrev }: BirthdayCardProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; emoji: string }>>([])
  const [cardFlipped, setCardFlipped] = useState(false)

  useEffect(() => {
    const confettiPieces = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.5}s`,
      emoji: ["🎉", "🎊", "🎈", "⭐", "💝", "🌹"][Math.floor(Math.random() * 6)],
    }))
    setConfetti(confettiPieces)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed text-3xl md:text-4xl pointer-events-none animate-bounce"
          style={{
            left: piece.left,
            top: "-40px",
            animation: `fall 4s ease-in infinite`,
            animationDelay: piece.delay,
          }}
        >
          {piece.emoji}
        </div>
      ))}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0px) rotateZ(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotateZ(360deg); opacity: 0; }
        }
      `}</style>

      {/* Main Card */}
      <div className="w-full max-w-2xl">
        {/* Card Container */}
        <div
          className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
          onClick={() => setCardFlipped(!cardFlipped)}
        >
          <div className={`transition-all duration-500 ${cardFlipped ? "opacity-0 hidden" : "opacity-100"}`}>
            {/* Front of Card */}
            <div className="text-center">
              <div className="text-6xl md:text-7xl mb-6">🎂</div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Birthday in 10 Days
              </h1>
              <p className="text-2xl text-gray-700 font-light mb-8">But I couldn't wait to celebrate you</p>
              <p className="text-gray-600 text-lg">Click to open 💌</p>
            </div>
          </div>

          <div className={`transition-all duration-500 ${cardFlipped ? "opacity-100" : "opacity-0 hidden"}`}>
            {/* Inside of Card */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">To My Dearest Love,</h2>

              <div className="space-y-4 text-gray-700 font-light text-lg leading-relaxed">
                <p>
                  I know your birthday is in 10 days, but I couldn't wait to shower you with love. This is my advance
                  celebration of you—of your beautiful heart, your infectious laughter, and the countless ways you make
                  my life extraordinary.
                </p>

                <p>
                  From the moment you came into my life, everything changed for the better. You've taught me what it
                  means to love unconditionally, to dream bigger, and to appreciate the precious moments we share
                  together.
                </p>

                <p>
                  On your special day and every day after, I want you to know that you are my greatest blessing, my
                  favorite adventure, and my forever love. Every day with you is a gift I never want to take for
                  granted.
                </p>

                <p className="text-2xl font-serif pt-4">
                  All my love,
                  <br />💕
                </p>
              </div>

              <button
                onClick={() => setCardFlipped(false)}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
              >
                Back to Front
              </button>
            </div>
          </div>
        </div>

        {/* Birthday Facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">🌟</div>
            <p className="text-sm md:text-base font-light text-gray-600">One Year Older</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">👑</div>
            <p className="text-sm md:text-base font-light text-gray-600">Queen for the Day</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">💎</div>
            <p className="text-sm md:text-base font-light text-gray-600">Priceless to Me</p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic text-lg">
            Thank you for making my life complete.
            <br />I love you more than words could ever say. 💕
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          ← Back to Playlist
        </button>
      </div>
    </div>
  )
}
