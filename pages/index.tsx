import Head from "next/head";
import Hero from "../components/Hero";
import JoinMovement from "../components/JoinMovement";
import Mission from "../components/Mission";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <main>
        <Hero />
        <JoinMovement />
        <Mission />
      </main>
    </section>
  );
}
