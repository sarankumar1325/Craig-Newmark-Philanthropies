import React, { useState, useEffect } from 'react';

const navItems = [
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      scrolled ? 'py-2 border-b border-civic-ink/15' : 'py-4 border-b border-civic-ink/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Mobile Logo */}
        <div className="lg:hidden mb-3">
          <a 
            href="https://craignewmarkphilanthropies.org/" 
            className="font-serif text-lg font-medium text-civic-ink"
          >
            craig newmark philanthropies
          </a>
        </div>

        {/* Desktop Single-Line Grid */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Column - Identity */}
          <div className="lg:col-span-4">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="font-serif text-base font-medium text-civic-ink hover:text-civic-gray transition-colors duration-200 inline-block"
            >
              craig newmark philanthropies
            </a>
          </div>

          {/* Center Column - Navigation */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-6 overflow-x-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-civic-ink/75 hover:text-civic-ink transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Search */}
          <div className="lg:col-span-1">
            <form onSubmit={(e) => e.preventDefault()} className="flex justify-end">
              <input
                type="text"
                placeholder="search archive"
                className="bg-transparent text-sm text-civic-ink placeholder-civic-gray/70 focus:outline-none w-24 font-sans"
                style={{
                  borderBottom: '1px solid currentColor',
                  paddingBottom: '2px',
                }}
              />
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-civic-ink/80 hover:text-civic-ink py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-civic-ink/20">
              <input
                type="text"
                placeholder="search archive"
                className="bg-transparent text-sm text-civic-ink placeholder-civic-gray/70 focus:outline-none w-full font-sans"
                style={{
                  borderBottom: '1px solid currentColor',
                  paddingBottom: '2px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};