"use client";
import About from "@/components/about";
import GetInvolved from "@/components/getInvolved";
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
      <div id="get-involved">
        <GetInvolved />
      </div>
    </main>
  );
}
