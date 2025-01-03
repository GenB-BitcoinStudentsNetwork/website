"use client";
import Footer from "@/components/footer";
import About from "@/components/layerZero/about";
import GetStarted from "@/components/layerZero/getStarted";
import Hero from "@/components/layerZero/hero";
import Timeline from "@/components/layerZero/timelime";
import Navigation from "@/components/navigation";

export default function LayerZero() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <GetStarted />
      <Timeline />
      <Footer />
    </main>
  );
}
