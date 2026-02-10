
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-50 mt-12 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        <p className="text-[11px] md:text-xs text-zinc-400 max-w-sm leading-relaxed">
          Organized by the Bitcoin Students Network, the global coordination layer for student Bitcoin clubs.
        </p>
        <p className="text-[10px] text-zinc-300 tracking-wider">
          © 2026 Bitcoin Students Network
        </p>
      </div>
    </footer>
  );
};
