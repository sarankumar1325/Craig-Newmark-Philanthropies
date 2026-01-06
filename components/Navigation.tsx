import React, { useState, useEffect } from 'react';

const navGroups = {
  about: [
    { label: 'About', href: 'https://craignewmarkphilanthropies.org/about-us' },
    { label: 'Craig Newmark', href: 'https://craignewmarkphilanthropies.org/about-us/craig-newmark-bio' },
    { label: 'Board Memberships', href: 'https://craignewmarkphilanthropies.org/about-us/board-memberships' },
  ],
  focus: [
    { label: 'Cybersecurity', href: 'https://craignewmarkphilanthropies.org/about-us/cybersecurity' },
    { label: 'Veterans & Military Families', href: 'https://craignewmarkphilanthropies.org/about-us/veterans-and-military-families' },
    { label: 'Promoting the Truth', href: 'https://craignewmarkphilanthropies.org/about-us/promoting-the-truth' },
  ],
  action: [
    { label: 'Apply', href: 'https://craignewmarkphilanthropies.org/apply' },
    { label: 'Newsroom', href: 'https://craignewmarkphilanthropies.org/newsroom' },
    { label: 'Contact', href: 'https://craignewmarkphilanthropies.org/contact' },
    { label: 'Take9', href: 'https://pausetake9.org/' },
  ],
};

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      scrolled ? 'py-3 border-b border-civic-ink/15' : 'py-6 border-b border-civic-ink/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Mobile Logo */}
        <div className="lg:hidden mb-4">
          <a 
            href="https://craignewmarkphilanthropies.org/" 
            className="font-serif text-xl font-semibold text-civic-ink tracking-tight"
          >
            craig newmark philanthropies
          </a>
        </div>

        {/* Desktop Two-Zone Layout */}
        <div className="hidden lg:flex items-center justify-between">
          
          {/* Left Zone - Primary Identity */}
          <div className="flex-shrink-0">
            <a 
              href="https://craignewmarkphilanthropies.org/" 
              className="font-serif text-lg font-semibold text-civic-ink tracking-tight hover:text-civic-gray transition-colors duration-200"
            >
              craig newmark philanthropies
            </a>
          </div>

          {/* Right Zone - Primary Navigation */}
          <div className="flex items-center space-x-12">
            
            {/* About & Work Group */}
            <div className="flex items-center space-x-8">
              {navGroups.about.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-civic-ink/80 hover:text-civic-ink transition-colors duration-200 tracking-wide"
                  style={{ letterSpacing: '0.025em' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Focus Areas Group */}
            <div className="flex items-center space-x-8">
              {navGroups.focus.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-civic-ink/80 hover:text-civic-ink transition-colors duration-200 tracking-wide"
                  style={{ letterSpacing: '0.025em' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Action & Media Group */}
            <div className="flex items-center space-x-8">
              {navGroups.action.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-civic-ink/80 hover:text-civic-ink transition-colors duration-200 tracking-wide"
                  style={{ letterSpacing: '0.025em' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Search */}
            <div className="flex-shrink-0">
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input
                  type="text"
                  placeholder="search archive"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`bg-transparent text-sm text-civic-ink placeholder-civic-gray/70 focus:outline-none transition-all duration-200 font-sans tracking-wide ${
                    searchFocused ? 'w-48' : 'w-32'
                  }`}
                  style={{
                    borderBottom: '1px solid currentColor',
                    paddingBottom: '2px',
                  }}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Simple List */}
        <div className="lg:hidden">
          <div className="space-y-3">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-civic-gray mb-2">About & Work</div>
              {navGroups.about.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-civic-ink/80 hover:text-civic-ink py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-civic-gray mb-2">Focus Areas</div>
              {navGroups.focus.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-civic-ink/80 hover:text-civic-ink py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-civic-gray mb-2">Action & Media</div>
              {navGroups.action.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-civic-ink/80 hover:text-civic-ink py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};