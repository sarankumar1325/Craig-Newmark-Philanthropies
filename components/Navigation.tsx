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
          
          {/* Left: Site Identity (cols 1-5) */}
          <div className="lg:col-span-5">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="inline-block hover:opacity-80 transition-opacity duration-150"
            >
              <img 
                src="/CNP-Logo.svg" 
                alt="Craig Newmark Philanthropies" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Right: Navigation Links (cols 6-12) */}
          <div className="lg:col-span-7">
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
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden h-full flex flex-col justify-center">
          
          {/* Site Identity */}
          <div className="mb-3">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="inline-block hover:opacity-80 transition-opacity duration-150"
            >
              <img 
                src="/CNP-Logo.svg" 
                alt="Craig Newmark Philanthropies" 
                className="h-6 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
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
        </div>
      </div>
    </nav>
  );
};