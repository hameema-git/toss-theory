import { ArrowUp, Asterisk, MapPin, MessageCircle, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { scrollToId, startLenis, stopLenis } from "../lib/scroll";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/menu";

const nav = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Favourites", href: "#bestsellers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Order", href: "#order" },
];

export default function Footer() {
  const toTop = () => {
    stopLenis();
    window.scrollTo({ top: 0 });
    setTimeout(startLenis, 700);
  };

  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-cream">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="grid gap-12 border-b border-cream/15 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink">
                <Asterisk className="h-7 w-7" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                Toss Theory<span className="text-lime">.</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-cream/60">
              Salads that actually make you happy. Fresh bowls tossed daily in Fort Kochi, Kerala —
              made to order, never boring.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                aria-label="Call us"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollToId(l.href)}
                    className="group flex items-center gap-2 text-cream/70 transition-colors hover:text-lime"
                  >
                    <span className="h-px w-0 bg-lime transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40">Get in touch</p>
            <div className="mt-5 space-y-4 text-cream/70">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 transition-colors hover:text-lime">
                <Phone className="h-4 w-4 text-lime" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-lime"
              >
                <MessageCircle className="h-4 w-4 text-lime" />
                WhatsApp us anytime
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-lime" />
                Fort Kochi, Kerala
              </p>
              <p className="text-sm text-cream/45">Open daily · 9 AM – 8 PM · Party orders accepted</p>
            </div>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="select-none overflow-hidden py-10 md:py-14">
          <p className="text-stroke-cream whitespace-nowrap text-center font-display text-[clamp(2.25rem,11vw,10rem)] font-bold uppercase leading-none tracking-tight">
            Toss Theory
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 py-7 text-xs text-cream/45">
          <span>© {new Date().getFullYear()} Toss Theory Kochi · All rights reserved</span>
          <span className="font-medium text-cream/55">
            #TossTheory #KochiFoodies #FortKochiEats #HealthyFoodKochi
          </span>
          <button
            onClick={toTop}
            className="group flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
