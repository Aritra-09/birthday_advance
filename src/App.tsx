import { useState } from 'react';
import Navigation from './components/Navigation';
import WelcomePage from './pages/WelcomePage';
import MemoryLane from './pages/MemoryLane';
import MusicPlayer from './pages/MusicPlayer';
import BirthdayCard from './pages/BirthdayCard';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'memories' | 'music' | 'card'>('welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage />;
      case 'memories':
        return <MemoryLane />;
      case 'music':
        return <MusicPlayer />;
      case 'card':
        return <BirthdayCard />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
