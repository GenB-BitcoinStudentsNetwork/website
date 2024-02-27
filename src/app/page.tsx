"use client";
import About from "@/components/about";
import Board from "@/components/board/board";
import Footer from "@/components/footer";
import Founders from "@/components/founder";
import GetInvolved from "@/components/getInvolved";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import NetworkMap from "@/components/map/networkMap";
import Resources from "@/components/resources";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <GetInvolved />
      <Resources />
      <Founders />
      <Board />
      <NetworkMap />
      <div>
        <Footer />
      </div>
    </main>
  );
}
