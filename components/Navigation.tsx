import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: 'https://craignewmarkphilanthropies.org/about-us' },
    { label: 'Craig', href: 'https://craignewmarkphilanthropies.org/about-us/craig-newmark-bio' },
    { label: 'Board', href: 'https://craignewmarkphilanthropies.org/about-us/board-memberships' },
    { label: 'Cybersecurity', href: 'https://craignewmarkphilanthropies.org/about-us/cybersecurity' },
    { label: 'Veterans', href: 'https://craignewmarkphilanthropies.org/about-us/veterans-and-military-families' },
    { label: 'Truth', href: 'https://craignewmarkphilanthropies.org/about-us/promoting-the-truth' },
    { label: 'Apply', href: 'https://craignewmarkphilanthropies.org/apply' },
    { label: 'Newsroom', href: 'https://craignewmarkphilanthropies.org/newsroom' },
    { label: 'Contact', href: 'https://craignewmarkphilanthropies.org/contact' },
    { label: 'Take9', href: 'https://pausetake9.org/' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b ${
      scrolled ? 'h-14' : 'h-16'
    } transition-all duration-150`}>
      <div className="max-w-7xl mx-auto h-full px-8 md:px-16">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:h-full lg:items-center">
          
          {/* Left: Site Identity (cols 1-4) */}
          <div className="lg:col-span-4">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="font-serif text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-150"
            >
              craig newmark philanthropies
            </a>
          </div>

          {/* Center: Navigation Links (cols 5-10) */}
          <div className="lg:col-span-6">
            <div className="flex justify-between items-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-normal text-gray-900 hover:underline underline-offset-4 transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Search (cols 11-12) */}
          <div className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="search archive"
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-600 focus:outline-none pb-0.5 border-b border-gray-400 focus:border-gray-700 transition-colors duration-150"
              />
            </form>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden h-full flex flex-col justify-center">
          
          {/* Site Identity */}
          <div className="mb-3">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="font-serif text-base font-medium text-gray-900"
            >
              craig newmark philanthropies
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-gray-900 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Search */}
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="search archive"
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-600 focus:outline-none pb-0.5 border-b border-gray-400"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};