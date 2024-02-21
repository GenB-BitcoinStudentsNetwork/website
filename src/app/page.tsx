"use client";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div>
        <Hero />
      </div>
    </main>
  );
}
