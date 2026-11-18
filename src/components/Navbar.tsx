import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Asterisk, Menu as MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { scrollToId, startLenis, stopLenis } from "../lib/scroll";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/menu";

const links = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Favourites", href: "#bestsellers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Order", href: "#order" },
];

export default function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      stopLenis();
      document.body.style.overflow = "hidden";
    } else {
      startLenis();
      document.body.style.overflow = "";
    }
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex h-20 max-w-[100rem] items-center justify-between px-5 md:px-10">
          <button
            onClick={() => go("#top")}
            className="group flex items-center gap-2.5"
            aria-label="Toss Theory home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-500 group-hover:rotate-180">
              <Asterisk className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Toss Theory<span className="text-coral">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="group relative text-sm font-medium tracking-wide"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 text-sm font-medium xl:flex"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-coral sm:flex"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-ink text-cream"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-20 items-center justify-between px-5 md:px-10">
              <span className="font-display text-xl font-semibold">
                Toss Theory<span className="text-lime">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-6 md:px-12">
              {links.map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.button
                    onClick={() => go(l.href)}
                    className="group flex items-baseline gap-4 text-left"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-serif text-lg italic text-lime">0{i + 1}</span>
                    <span className="font-display text-4xl font-semibold uppercase tracking-tight transition-colors group-hover:text-lime sm:text-5xl md:text-7xl">
                      {l.label}
                    </span>
                  </motion.button>
                </div>
              ))}
            </div>
            <motion.div
              className="flex flex-wrap items-center justify-between gap-4 px-6 pb-10 text-sm text-cream/60 md:px-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
            >
              <span>Fort Kochi, Kerala</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-lime">
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
