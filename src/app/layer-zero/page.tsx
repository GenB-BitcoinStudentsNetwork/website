"use client";
import Footer from "@/components/footer";
import About from "@/components/layerZero/about";
import Hero from "@/components/layerZero/hero";
import Navigation from "@/components/navigation";

export default function LayerZero() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
