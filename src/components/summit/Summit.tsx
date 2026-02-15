
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { InterestForm } from './InterestForm';
import { Footer } from './Footer';

const Summit: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Header / Nav */}
            <Navbar />

            <main className="w-full max-w-4xl px-6 md:px-12 py-16 space-y-24">
                {/* Hero Section */}
                <Hero />

                {/* Separator */}
                <hr className="border-t border-zinc-200" />

                {/* About Section */}
                <AboutSection />

                {/* Form Section */}
                <InterestForm />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Summit;