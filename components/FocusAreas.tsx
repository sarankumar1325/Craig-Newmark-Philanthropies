import React, { useEffect, useRef } from 'react';
import { FocusArea } from '../types';

const areas: FocusArea[] = [
  { 
    id: '1', 
    title: 'Military families and vets', 
    isTag: false, 
    link: 'https://bobwoodrufffoundation.org/craig-newmark-philanthropies-grants/', 
    description: '(new grants portal here)' 
  },
  { 
    id: '2', 
    title: '#CyberCivilDefense', 
    isTag: true,
    link: 'https://craignewmarkphilanthropies.org/about-us/cybersecurity'
  },
  { 
    id: '3', 
    title: '#cybersecurity', 
    isTag: true,
    link: 'https://craignewmarkphilanthropies.org/about-us/cybersecurity'
  },
  { 
    id: '4', 
    title: 'Promoting the truth', 
    isTag: false,
    link: 'https://craignewmarkphilanthropies.org/about-us/promoting-the-truth'
  },
  { 
    id: '5', 
    title: 'Pigeon rescue', 
    isTag: false,
    link: 'https://fortune.com/2025/12/08/craigslist-founder-craig-newmark-signs-giving-pledge-pigeon-rescue-donation/'
  },
  { 
    id: '6', 
    title: '(I retired from craigslist a few years ago.)', 
    isTag: false, 
    description: 'Clarification',
    link: 'https://craignewmarkphilanthropies.org/about-us/craig-newmark-bio'
  },
];

export const FocusAreas: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    itemsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="focus" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-civic-ink">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="font-mono text-sm uppercase tracking-widest text-civic-gray mb-8">
            Active Focus Areas
          </h2>
        </div>
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {areas.map((area, index) => (
              <a 
                href={area.link}
                key={area.id} 
                ref={(el) => { itemsRef.current[index] = el; }}
                className={`group block cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-transform ${
                  area.isTag 
                    ? 'bg-civic-ink/5 hover:bg-civic-ink p-8' 
                    : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {!area.isTag && (
                   <div className="border-t border-black/20 w-8 mb-4 transition-all duration-500 group-hover:w-full"></div>
                )}
                
                <h3 className={`transition-colors duration-300 ${
                    area.isTag 
                      ? 'text-civic-ink group-hover:text-civic-paper font-mono tracking-tight text-2xl md:text-3xl' 
                      : 'text-civic-ink font-serif text-3xl md:text-4xl'
                  }`}>
                  {area.title}
                </h3>

                {area.description && (
                  <p className={`mt-2 font-sans text-lg transition-colors duration-300 ${
                    area.isTag ? 'text-civic-gray group-hover:text-civic-paper/70' : 'text-civic-gray'
                  }`}>
                    {area.description}
                  </p>
                )}
                
                {area.link && (
                  <div className="mt-4">
                     <span className={`font-mono text-xs uppercase tracking-widest border-b pb-0.5 transition-colors ${
                       area.isTag 
                        ? 'border-civic-ink/50 group-hover:border-civic-paper/50 text-civic-ink/70 group-hover:text-civic-paper/70'
                        : 'border-civic-ink text-civic-ink group-hover:bg-civic-ink group-hover:text-civic-paper'
                     }`}>
                       {area.isTag ? 'Read More' : 'Access Portal'} &rarr;
                     </span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};