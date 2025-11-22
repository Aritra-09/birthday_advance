"use client"

import { useState, useRef, useEffect } from "react"

interface MusicPlayerProps {
  onNext: () => void
  onPrev: () => void
}

interface Song {
  id: number
  title: string
  artist: string
  reason: string
  emoji: string
  audioUrl?: string // Added audioUrl field for real songs
}

export default function MusicPlayer({ onNext, onPrev }: MusicPlayerProps) {
  const [songs] = useState<Song[]>([
    {
      id: 1,
      title: "Song of Us",
      artist: "Our Story",

      reason: "Because your smile is my favorite song",
      emoji: "🎵",
      audioUrl: "/music/ReelAudio-48556.mp3", // Add your song URL here
    },
    {
      id: 2,
      title: "Endless Love",
      artist: "Home",

      reason: "Every moment with you feels like paradise",
      emoji: "☀️",// Add your song URL here
      audioUrl: "/music/ReelAudio-26059.mp3", // Add your song URL here
    },
    {
      id: 3,
      title: "Starlight",
      artist: "You & Me",

      reason: "You light up my darkest nights",
      emoji: "⭐",
      audioUrl: "/music/ReelAudio-77535.mp3", // Add your song URL here
    },
    {
      id: 4,
      title: "Forever & Always",
      artist: "Our Love",

      reason: "This is a promise I make to you today",
      emoji: "💍",
    
      audioUrl: "/music/ReelAudio-61296.mp3", // Add your song URL here
    },
    {
      id: 5,
      title: "Dancing in Love",
      artist: "Happiness",
      reason: "Because even heavy days are beautiful with you",
      emoji: "🌧️",
  audioUrl: "/music/ReelAudio-39334.mp3",  // Add your song URL here
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentSong = songs[currentSongIndex]

  useEffect(() => {
    if (audioRef.current && currentSong.audioUrl) {
      audioRef.current.src = currentSong.audioUrl
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentSongIndex, currentSong.audioUrl])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [])

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Dedication Playlist
        </h2>
        <p className="text-center text-gray-600 mb-12">
          10 days early - songs that remind me of you and why I love you
        </p>

        {/* Current Song Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-8">
          <div className="mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center text-7xl md:text-8xl shadow-lg mb-8">
              {currentSong.emoji}
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">{currentSong.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{currentSong.artist}</p>
              <p className="text-base md:text-lg text-gray-700 italic font-light mb-6">"{currentSong.reason}"</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              ⏮
            </button>
            <button
              onClick={togglePlay}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white text-3xl md:text-4xl hover:scale-110 transition-transform duration-200 shadow-xl"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              ⏭
            </button>
          </div>

          <audio ref={audioRef} crossOrigin="anonymous" />
        </div>

        {/* Playlist */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Playlist ({songs.length})</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {songs.map((song, index) => (
              <button
                key={song.id}
                onClick={() => {
                  setCurrentSongIndex(index)
                  setIsPlaying(true)
                }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  index === currentSongIndex
                    ? "bg-gradient-to-r from-rose-300 to-pink-300 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{song.title}</p>
                    <p className="text-sm opacity-80">{song.artist}</p>
                  </div>
                  <span className="text-2xl">{song.emoji}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 mt-12">
          <button
            onClick={onPrev}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Next Page →
          </button>
        </div>
      </div>
    </div>
  )
}
