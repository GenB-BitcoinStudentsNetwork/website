"use client";
import About from "@/components/about";
import Board from "@/components/board/board";
import Footer from "@/components/footer";
import Founders from "@/components/founder";
import GetInvolved from "@/components/getInvolved";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
// import NetworkMap from "@/components/map/networkMap";
import Resources from "@/components/resources";
import Summit from "@/components/summit/Summit";

import dynamic from "next/dynamic";

const NetworkMap = dynamic(() => import("../components/map/networkMap"), {
  ssr: false,
});

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
      <Summit/>
      <div>
        <Footer />
      </div>
    </main>
  );
}
