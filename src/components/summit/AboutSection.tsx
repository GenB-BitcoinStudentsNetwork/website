
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-4">
      {/* Left Content Column */}
      <div className="md:col-span-5 space-y-8">
        <div>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-8">
            ABOUT THE SUMMIT
          </h2>
          <div className="space-y-6 text-sm md:text-[15px] text-zinc-700 leading-relaxed font-light">
            <p>
              The Bitcoin Students Network is planning its inaugural global summit in October 2026.
            </p>
            <p>
              The event will convene student Bitcoin clubs, ecosystem partners, and educators to strengthen collaboration, share knowledge, and build long-term pathways into the Bitcoin ecosystem.
            </p>
            <p>
              Additional details will be shared as planning progresses.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="md:col-span-7 flex flex-col items-end">
        <div className="w-full aspect-[1.8/1] bg-[#1a1c1e] rounded-md overflow-hidden mb-2 border border-zinc-200 shadow-sm relative group">
          {/* Note: In a production environment, this would be the actual asset provided in the prompt */}
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Bitcoin Park Nashville Logo Graphic" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-700 group-hover:scale-105"
          />
          {/* Overlay Text to simulate the graphic in the screenshot */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
             <div className="text-white text-center">
                <div className="text-3xl md:text-4xl font-serif tracking-tight mb-0.5">bitcoin park</div>
                <div className="text-sm md:text-lg uppercase tracking-[0.4em] font-light opacity-90">NASHVILLE</div>
             </div>
             {/* Simple representation of the Bitcoin tree logo from the screenshot */}
             <div className="absolute right-[10%] top-1/2 -translate-y-1/2 opacity-80 scale-75 md:scale-100">
                <div className="w-12 h-12 rounded-full border-2 border-[#f7931a] flex items-center justify-center text-[#f7931a] font-bold text-xl">₿</div>
             </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-zinc-400 font-medium">Nashville - Host City</p>
        </div>
      </div>
    </section>
  );
};
