import React from 'react';
import { SocialLink } from '../types';

const socials: SocialLink[] = [
  { platform: 'Mastodon', handle: '@craignewmark@mastodon.social', url: 'https://mastodon.social/@craignewmark' },
  { platform: 'Bluesky', handle: '@craignewmark.bsky.social', url: 'https://bsky.app/profile/craignewmark.bsky.social' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/craignewmark' },
  { platform: 'Twitter / X', url: 'https://twitter.com/craignewmark' },
  { platform: 'Facebook', url: 'https://www.facebook.com/craignewmark/' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-civic-ink text-civic-paper pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-16">
        
        <div className="md:col-span-6 lg:col-span-5">
           <div className="mb-6">
             <img 
               src="/CNP-Logo-Black.svg" 
               alt="Craig Newmark Philanthropies" 
               className="h-10 w-auto filter invert brightness-0 opacity-90"
             />
           </div>
           <h4 className="font-serif text-3xl mb-6">craig newmark<br/>philanthropies</h4>
           <p className="font-sans text-white/60 max-w-md mb-8">
             Digital civic infrastructure. Building trust, protecting truth, and supporting those who serve.
           </p>
           <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
             © 2025 Craig Newmark Philanthropies
           </div>
        </div>

        <div className="md:col-span-6 lg:col-span-3">
          <h5 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6">Navigation</h5>
          <ul className="space-y-4 font-sans text-white/90">
             <li><a href="https://craignewmarkphilanthropies.org/about-us/board-memberships" className="hover:underline underline-offset-4">Board Memberships</a></li>
             <li><a href="https://craignewmarkphilanthropies.org/about-us/cybersecurity" className="hover:underline underline-offset-4">Cybersecurity Resources</a></li>
             <li><a href="https://craignewmarkphilanthropies.org/about-us/veterans-and-military-families" className="hover:underline underline-offset-4">Veteran Support</a></li>
             <li><a href="https://craignewmarkphilanthropies.org/apply" className="hover:underline underline-offset-4">Apply for Grant</a></li>
          </ul>
        </div>

        <div className="md:col-span-12 lg:col-span-4">
           <h5 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6">Please follow me on:</h5>
           <ul className="space-y-4">
             {socials.map((social) => (
               <li key={social.platform} className="flex items-baseline gap-2">
                 <span className="font-mono text-white/40 text-xs">[{social.platform}]</span>
                 <a href={social.url} className="font-serif text-lg hover:text-white text-white/80 transition-colors">
                   {social.platform}
                 </a>
                 {social.handle && (
                   <span className="font-mono text-xs text-white/40 ml-1 hidden sm:inline-block">
                     {social.handle}
                   </span>
                 )}
               </li>
             ))}
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex justify-between items-end font-mono text-[10px] text-white/30 uppercase tracking-widest">
        <div>
          <a href="https://craignewmarkphilanthropies.org/terms-of-use" className="hover:text-white/60 transition-colors">Terms of Use</a>
          <span className="mx-2">•</span>
          <a href="https://craignewmarkphilanthropies.org/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
        </div>
        <div>
          designed and build by <a href="https://x.com/iamsaranhere" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Sarankumar S</a>
        </div>
      </div>
    </footer>
  );
};