import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { initLenis } from "./lib/scroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import MenuSection from "./components/Menu";
import Bestsellers from "./components/Bestsellers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Order from "./components/Order";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div className="relative min-h-screen bg-cream font-sans text-ink antialiased">
      <Cursor />

      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar ready={!loading} />

      <main>
        <Hero ready={!loading} />

        <div className="relative -rotate-[1.2deg] scale-[1.02]">
          <Marquee
            className="border-y-2 border-ink bg-lime py-4 text-ink"
            items={["Fresh", "Colourful", "Delicious", "Fort Kochi", "Made Daily", "Party Orders"]}
          />
        </div>

        <Story />
        <MenuSection />
        <Bestsellers />
        <Gallery />

        <div className="relative rotate-[1deg] scale-[1.02]">
          <Marquee
            slow
            className="border-y-2 border-ink bg-coral py-4 text-cream"
            items={["Order Now", "DM To Order", "WhatsApp Us", "89435 48100", "Your Bowl Is Waiting"]}
          />
        </div>

        <Testimonials />
        <Order />
      </main>

      <Footer />

      {/* film grain */}
      <div className="grain" aria-hidden />
    </div>
  );
}
