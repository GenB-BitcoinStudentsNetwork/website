"use client";
import About from "@/components/about";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div>
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
