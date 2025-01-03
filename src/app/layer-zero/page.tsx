"use client";
import Footer from "@/components/footer";
import Hero from "@/components/layerZero/hero";
import Navigation from "@/components/navigation";

export default function LayerZero() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  );
}
