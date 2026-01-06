import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md ${
        scrolled ? 'h-14 bg-white/95 border-gray-200/50 shadow-sm' : 'h-16 bg-white/85 border-gray-200/30'
      } transition-all duration-200`}>
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Layout (lg screens) */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:h-full lg:items-center">
            
            {/* Left: Site Identity (cols 1-4) */}
            <div className="lg:col-span-4">
              <a 
                href="https://craignewmarkphilanthropies.org/" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/CNP-Logo.svg" 
                  alt="Craig Newmark Philanthropies" 
                  className="h-8 w-auto filter brightness-0"
                />
              </a>
            </div>

            {/* Center: Navigation Links (cols 5-10) */}
            <div className="lg:col-span-6">
              <div className="flex justify-between items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-normal text-gray-900 hover:text-gray-700 hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Spacer */}
            <div className="lg:col-span-2"></div>
          </div>

          {/* Tablet Layout (md screens) */}
          <div className="hidden md:grid lg:hidden md:grid-cols-12 md:h-full md:items-center">
            
            {/* Left: Site Identity */}
            <div className="md:col-span-4">
              <a 
                href="https://craignewmarkphilanthropies.org/" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/CNP-Logo.svg" 
                  alt="Craig Newmark Philanthropies" 
                  className="h-7 w-auto filter brightness-0"
                />
              </a>
            </div>

            {/* Center: Navigation Links - Horizontal Scroll */}
            <div className="md:col-span-7">
              <div className="flex overflow-x-auto space-x-4 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-normal text-gray-900 hover:text-gray-700 hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Spacer */}
            <div className="md:col-span-1"></div>
          </div>

          {/* Mobile Layout (sm screens) */}
          <div className="md:hidden h-full flex items-center justify-between">
            
            {/* Left: Site Identity */}
            <div>
              <a 
                href="https://craignewmarkphilanthropies.org/" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/CNP-Logo.svg" 
                  alt="Craig Newmark Philanthropies" 
                  className="h-6 w-auto filter brightness-0"
                />
              </a>
            </div>

            {/* Right: Mobile Menu Button */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-16 right-0 bottom-0 w-80 bg-white shadow-xl border-l border-gray-200 overflow-y-auto">
            <div className="p-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};