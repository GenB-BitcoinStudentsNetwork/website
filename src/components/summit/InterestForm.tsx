
import React, { useState } from 'react';

export const InterestForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Logic would go here to save to a database
    }
  };

  return (
    <section id="interest-list" className="flex flex-col items-center space-y-8 py-8">
      <h2 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
        INTEREST LIST
      </h2>

      <div className="w-full max-w-md border border-zinc-200 rounded-lg p-10 md:p-12 shadow-sm bg-white">
        {!submitted ? (
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-800 tracking-tight">Stay Informed</h3>
            <p className="text-zinc-500 text-xs text-center leading-relaxed">
              Be the first to receive updates as details are<br className="hidden md:block" /> announced.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 rounded focus:ring-1 focus:ring-zinc-400 focus:outline-none text-sm placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="w-full bg-[#b366b3] hover:bg-[#a157a1] text-white font-medium py-3 rounded transition-all active:scale-[0.98]"
              >
                Notify Me
              </button>
            </form>
            
            <p className="text-[10px] text-zinc-400 text-center">
              Updates only when there's something meaningful to share.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-800">You're on the list!</h3>
            <p className="text-sm text-zinc-500">We'll reach out to {email} as soon as we have news to share.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[10px] text-zinc-400 hover:text-zinc-600 underline"
            >
              Sign up another email
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
