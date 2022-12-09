import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JoinMovement from "../components/JoinMovement";
import Mission from "../components/Mission";
import TheFuture from "../components/TheFuture";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <Head>
        <title>Webshift - The easiest way to build XR websites.</title>
        <meta
          name="description"
          content="The easiest way to build XR websites."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
