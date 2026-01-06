import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { FocusAreas } from './components/FocusAreas';
import { News } from './components/News';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-civic-ink selection:text-civic-paper">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <FocusAreas />
        <News />
      </main>

      <Footer />
    </div>
  );
}

export default App;