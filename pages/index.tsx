import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JoinMovement from "../components/JoinMovement";
import Mission from "../components/Mission";
import TheFuture from "../components/TheFuture";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <main>
        <Hero />
        <JoinMovement />
        <Mission />
        <TheFuture />
      </main>

      <Footer />
    </section>
  );
}
