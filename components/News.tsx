import React from 'react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    category: 'Podcast',
    headline: 'Craigslist: Craig Newmark — The Forrest Gump of the Internet',
    date: 'February 2024',
    source: 'How I Built This with Guy Raz',
    url: 'https://podcasts.apple.com/us/podcast/craigslist-craig-newmark-the-forrest-gump-of-the-internet/id1150510297?i=1.000729038488e+12'
  },
  {
    id: '2',
    category: 'In The News',
    headline: 'Did Craigslist kill newspapers?',
    date: 'January 2025',
    source: 'Poynter',
    url: 'https://www.poynter.org/business-work/2025/did-craigslist-kill-newspapers-poynter-50/'
  },
  {
    id: '3',
    category: 'Philanthropy',
    headline: 'Craigslist founder Craig Newmark signs Giving Pledge, Pigeon Rescue Donation',
    date: 'December 2024',
    source: 'Fortune',
    url: 'https://fortune.com/2025/12/08/craigslist-founder-craig-newmark-signs-giving-pledge-pigeon-rescue-donation/'
  },
  {
    id: '4',
    category: 'Cyber Defense',
    headline: 'Craig Newmark Invests in Gen Z Cyber Defense',
    date: 'Late 2024',
    source: 'Inside Philanthropy',
    url: 'https://www.insidephilanthropy.com/home/craigslist-founder-craig-newmark-invests-in-gen-z-cyber-defense'
  },
  {
     id: '5',
     category: 'Profile',
     headline: 'Tech & Human Connections',
     date: '2025',
     source: 'The Boss Magazine',
     url: 'https://thebossmagazine.com/profile/craigslist-founder-craig-newmark-tech-human-connections/'
  }
];

export const News: React.FC = () => {
  return (
    <section id="news" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col mb-12">
        <h2 className="font-serif text-5xl text-civic-ink mb-2">Newsroom</h2>
        <p className="font-sans text-civic-gray max-w-2xl">
          Recent coverage, press releases, and thoughts on the digital public square.
        </p>
      </div>

      <div className="border-t border-civic-ink">
        {newsItems.map((item, index) => (
          <a 
            key={item.id} 
            href={item.url}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-civic-ink/20 hover:bg-black/5 transition-colors cursor-pointer items-baseline"
          >
            <div className="md:col-span-2 font-mono text-xs uppercase tracking-widest text-civic-gray">
              {item.date}
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-2xl md:text-3xl text-civic-ink group-hover:underline decoration-1 underline-offset-4">
                {item.headline}
              </h3>
              <p className="font-mono text-xs mt-2 text-civic-gray uppercase tracking-wider md:hidden">
                {item.source}
              </p>
            </div>
            <div className="md:col-span-3 text-right hidden md:block font-sans font-medium text-civic-ink/70">
              {item.source} <span className="text-civic-gray font-normal block text-sm mt-1">{item.category}</span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://craignewmarkphilanthropies.org/newsroom" className="inline-block font-sans text-lg border border-civic-ink px-8 py-3 hover:bg-civic-ink hover:text-civic-paper transition-colors duration-300">
          View Full Archive
        </a>
      </div>
    </section>
  );
};