
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('interest-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col items-center text-center space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
        The Bitcoin Students Network<br />Summit
      </h1>

      <div className="flex items-center space-x-4 w-full justify-center">
        <div className="h-px bg-zinc-300 w-12 hidden md:block"></div>
        <p className="text-sm md:text-base font-medium text-zinc-700">
          October 3 - 4, 2026 · Nashville, TN
        </p>
        <div className="h-px bg-zinc-300 w-12 hidden md:block"></div>
      </div>

      <p className="text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed">
        A global gathering of student Bitcoin leaders, builders, and educators.
      </p>

      <div className="flex flex-col items-center space-y-4 pt-4">
        <button
          onClick={scrollToForm}
          className="bg-[#b366b3] hover:bg-[#a157a1] text-white font-medium py-3 px-10 rounded-md transition-all duration-200 active:scale-95 shadow-sm"
        >
          Get Updates
        </button>
        <p className="text-[11px] md:text-xs text-zinc-400">
          Join students and partners following the 2026 summit.
        </p>
      </div>
    </section>
  );
};
