import { useState, useRef } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  reason: string;
  emoji: string;
}

export default function MusicPlayer() {
  const [songs] = useState<Song[]>([
    {
      id: 1,
      title: 'Song of Us',
      artist: 'Our Story',
      duration: '3:45',
      reason: 'Because your smile is my favorite song',
      emoji: '🎵',
    },
    {
      id: 2,
      title: 'Endless Summer',
      artist: 'Memories',
      duration: '4:12',
      reason: 'Every moment with you feels like paradise',
      emoji: '☀️',
    },
    {
      id: 3,
      title: 'Starlight',
      artist: 'You & Me',
      duration: '3:58',
      reason: 'You light up my darkest nights',
      emoji: '⭐',
    },
    {
      id: 4,
      title: 'Forever & Always',
      artist: 'Our Love',
      duration: '4:30',
      reason: 'This is a promise I make to you today',
      emoji: '💍',
    },
    {
      id: 5,
      title: 'Dancing in the Rain',
      artist: 'Happiness',
      duration: '3:22',
      reason: 'Because even rainy days are beautiful with you',
      emoji: '🌧️',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Dedication Playlist
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Songs that remind me of you and why I love you
        </p>

        {/* Current Song Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-8">
          <div className="mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center text-7xl md:text-8xl shadow-lg mb-8">
              {currentSong.emoji}
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
                {currentSong.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{currentSong.artist}</p>
              <p className="text-base md:text-lg text-gray-700 italic font-light mb-6">
                "{currentSong.reason}"
              </p>
              <p className="text-sm text-gray-500">{currentSong.duration}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-400 to-pink-400 w-1/3 rounded-full"></div>
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
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              ⏭
            </button>
          </div>

          <audio ref={audioRef} />
        </div>

        {/* Playlist */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Playlist ({songs.length})</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {songs.map((song, index) => (
              <button
                key={song.id}
                onClick={() => {
                  setCurrentSongIndex(index);
                  setIsPlaying(true);
                }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  index === currentSongIndex
                    ? 'bg-gradient-to-r from-rose-300 to-pink-300 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
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
      </div>
    </div>
  );
}
