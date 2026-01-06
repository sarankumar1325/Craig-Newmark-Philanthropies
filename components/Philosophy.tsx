import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-civic-ink bg-civic-paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="font-mono text-sm uppercase tracking-widest text-civic-gray sticky top-32">
            Statement of Intent
          </h2>
        </div>
        <div className="lg:col-span-9">
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-civic-ink">
            "Okay, what I do is find people who are really good at their jobs, and who can tolerate my sense of humor. 
            <br /><br />
            I provide them with resources, and then get outta their way."
          </blockquote>
          
          <div className="mt-12 flex gap-4 items-center">
            <span className="h-px w-12 bg-civic-ink"></span>
            <p className="font-sans text-lg text-civic-ink italic">
              Craig Newmark
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};