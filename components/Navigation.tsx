import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: 'https://craignewmarkphilanthropies.org/about-us' },
  { label: 'Craig Newmark', href: 'https://craignewmarkphilanthropies.org/about-us/craig-newmark-bio' },
  { label: 'Board Memberships', href: 'https://craignewmarkphilanthropies.org/about-us/board-memberships' },
  { label: 'Cybersecurity', href: 'https://craignewmarkphilanthropies.org/about-us/cybersecurity' },
  { label: 'Veterans & Military Families', href: 'https://craignewmarkphilanthropies.org/about-us/veterans-and-military-families' },
  { label: 'Promoting the Truth', href: 'https://craignewmarkphilanthropies.org/about-us/promoting-the-truth' },
  { label: 'Apply', href: 'https://craignewmarkphilanthropies.org/apply' },
  { label: 'Newsroom', href: 'https://craignewmarkphilanthropies.org/newsroom' },
  { label: 'Contact', href: 'https://craignewmarkphilanthropies.org/contact' },
  { label: 'Take9', href: 'https://pausetake9.org/' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-civic-ink/10 ${scrolled ? 'bg-civic-paper py-3' : 'bg-civic-paper py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Mobile / Tablet Header - Keeps simple identity */}
        <div className="lg:hidden font-serif font-bold text-lg tracking-tight">
          <a href="https://craignewmarkphilanthropies.org/" className="hover:text-civic-gray transition-colors">cn phil.</a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center text-sm font-sans tracking-wide leading-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="text-civic-ink hover:underline hover:decoration-1 underline-offset-4 decoration-civic-ink/50 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-auto lg:ml-6 pl-6 lg:border-l border-civic-ink/20">
             <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Search archive..." 
                  className="bg-transparent border-b border-civic-ink/30 text-civic-ink placeholder-civic-gray/70 focus:outline-none focus:border-civic-ink text-sm w-32 font-sans pb-1"
                />
             </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};