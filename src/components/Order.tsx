import FadeUp from "./Reveal";
import { Asterisk, Clock, MapPin, MessageCircle, PartyPopper, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/menu";

const info = [
  { icon: MapPin, title: "Find us", text: "Fort Kochi, Kerala" },
  { icon: Clock, title: "Open daily", text: "9:00 AM – 8:00 PM" },
  { icon: PartyPopper, title: "Party orders", text: "Accepted, happily" },
];

export default function Order() {
  return (
    <section id="order" className="relative -mt-6 overflow-hidden rounded-t-[3rem] bg-lime pt-24 text-ink md:pt-32">
      {/* deco asterisks */}
      <Asterisk className="pointer-events-none absolute -left-10 top-16 h-48 w-48 text-ink/10" strokeWidth={1.5} />
      <Asterisk className="pointer-events-none absolute -bottom-12 right-10 h-64 w-64 text-ink/10" strokeWidth={1.5} />

      <div className="relative mx-auto max-w-[100rem] px-5 pb-28 text-center md:px-10">
        <FadeUp>
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/60">
            Hungry already?
          </p>
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.4rem,7vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            Your bowl is{" "}
            <span className="font-serif font-light normal-case italic text-cream">waiting.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink/70">
            Order direct on WhatsApp or give us a call — we'll have it tossed, packed and ready
            before you can say "extra feta".
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group mt-10 inline-block font-serif text-[clamp(2.2rem,6vw,4.75rem)] font-light italic leading-none transition-transform duration-300 hover:scale-[1.02]"
          >
            {PHONE_DISPLAY}
            <span className="ml-3 inline-block align-middle text-ink/40 transition-transform duration-300 group-hover:rotate-45">
              <Phone className="h-7 w-7 md:h-9 md:w-9" />
            </span>
          </a>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-bold text-cream transition-all duration-300 hover:scale-105 hover:bg-coral"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp us
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 rounded-full border-2 border-ink px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-ink hover:text-lime"
            >
              <Phone className="h-5 w-5" />
              Call to order
            </a>
          </div>
        </FadeUp>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {info.map((item, i) => (
            <FadeUp key={item.title} delay={0.1 + i * 0.06}>
              <div className="rounded-3xl border border-ink/15 bg-cream/60 p-6 text-left backdrop-blur-sm">
                <item.icon className="h-6 w-6 text-coral" />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
                  {item.title}
                </p>
                <p className="mt-1 font-display text-lg font-semibold">{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
