"use client";
import About from "@/components/about";
import Board from "@/components/board/board";
import BtcPayButton from "@/components/btcpay/btcpayButton";
import Founders from "@/components/founder";
import GetInvolved from "@/components/getInvolved";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Resources from "@/components/resources";

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
      <div id="resources">
        <Resources />
      </div>
      {/* <div>
        <BtcPayButton />
      </div> */}
      <div id="founders">
        <Founders />
      </div>
      <div id="board">
        <Board />
      </div>
    </main>
  );
}
