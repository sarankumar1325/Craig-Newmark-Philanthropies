import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-civic-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-end min-h-[50vh]">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 text-civic-ink">
            craig newmark<br />philanthropies
          </h1>
          <p className="font-sans text-xl md:text-2xl font-light text-civic-ink/80 max-w-xl leading-relaxed">
            I’m an old-school nerd helping to protect the people who protect our country.
          </p>
        </div>

        {/* Image Column - Brutalist, Grayscale, Sharp Corners */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200 grayscale contrast-125 brightness-90">
             <img 
               src="https://picsum.photos/800/1000?grayscale" 
               alt="Portrait of Craig Newmark" 
               className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-[2000ms] ease-out"
             />
             <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/70 uppercase tracking-widest">
               DSCF5376_NEWMARK
             </div>
          </div>
          <div className="mt-2 flex justify-between items-start font-mono text-xs text-civic-gray uppercase tracking-widest border-t border-civic-ink pt-2">
             <span>Est. 2016</span>
             <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};