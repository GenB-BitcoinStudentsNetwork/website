"use client";
import About from "@/components/about";
import Board from "@/components/board/board";
import Footer from "@/components/footer";
import Founders from "@/components/founder";
import GetInvolved from "@/components/getInvolved";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import NetworkMap from "@/components/networkMap";
import Resources from "@/components/resources";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="get-involved">
        <GetInvolved />
      </div>
      <div id="resources">
        <Resources />
      </div>
      <div id="founders">
        <Founders />
      </div>
      <div id="board">
        <Board />
      </div>
      <div id="network">
        <NetworkMap />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
