import FadeUp from "./Reveal";
import { ArrowRight, Palette, Salad, Timer } from "lucide-react";
import { scrollToId } from "../lib/scroll";

const values = [
  {
    icon: Timer,
    num: "01",
    title: "Tossed fresh, daily",
    text: "Every bowl is built to order with produce sourced fresh each morning. Nothing sits around waiting for you.",
  },
  {
    icon: Palette,
    num: "02",
    title: "Colour-first cooking",
    text: "We eat with our eyes first. Every bowl gets the full rainbow treatment — it should look as good as it tastes.",
  },
  {
    icon: Salad,
    num: "03",
    title: "No sad salads",
    text: "Big flavours, real portions, dressings worth drinking. Sadness is strictly not allowed in our kitchen.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* text side */}
          <div>
            <FadeUp>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/60">
                <span className="h-px w-10 bg-coral" />
                The Theory
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl xl:text-6xl">
                Good food, good mood &{" "}
                <span className="font-serif font-light italic text-coral">a little extra</span>{" "}
                freshness.
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
                Toss Theory started with one simple idea: healthy food should actually make you
                happy. Not "healthy-ish", not "good for a salad" — genuinely, properly happy. So we
                toss the freshest produce we can find into bowls that look like art and taste like
                a holiday.
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/70">
                From post-surf breakfasts to late-night broasted cravings, every bowl is made to
                order — never pre-packed, never boring. Fort Kochi, this one's for you.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <button
                onClick={() => scrollToId("#menu")}
                className="group mt-8 flex items-center gap-2 font-display text-lg font-medium"
              >
                <span className="border-b-2 border-lime pb-0.5 transition-colors group-hover:border-coral">
                  Dive into the menu
                </span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </FadeUp>

            {/* values */}
            <div className="mt-14 space-y-4">
              {values.map((v, i) => (
                <FadeUp key={v.num} delay={0.08 * i}>
                  <div className="group flex gap-6 rounded-3xl border border-ink/10 bg-creamdark/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-lime/40 md:p-7">
                    <span className="font-serif text-2xl italic text-ink/40 transition-colors group-hover:text-coral">
                      {v.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <v.icon className="h-5 w-5 text-limedark" />
                        <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                      </div>
                      <p className="mt-2 max-w-md leading-relaxed text-ink/70">{v.text}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* image collage */}
          <div className="relative">
            <FadeUp delay={0.1} className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border-2 border-ink shadow-[6px_8px_0_#16301f] md:rounded-[2.5rem] md:shadow-[12px_16px_0_#16301f]">
                <img
                  src="/images/ingredients.jpg"
                  alt="Fresh salad ingredients flat lay"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-8 -left-4 w-44 rotate-[-5deg] overflow-hidden rounded-[2rem] border-4 border-cream shadow-2xl md:-left-10 md:w-60">
                <img
                  src="/images/tossing.jpg"
                  alt="Salad being tossed"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -right-3 top-8 flex rotate-3 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-xl md:-right-6">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime" />
                100% Fresh, always
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
