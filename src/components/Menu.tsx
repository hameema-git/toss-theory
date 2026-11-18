import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, PartyPopper } from "lucide-react";
import FadeUp from "./Reveal";
import { bestsellers, menu, tagLabels, tagStyles, WHATSAPP_URL } from "../data/menu";

export default function MenuSection() {
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <section id="menu" className="relative overflow-hidden rounded-t-[3rem] bg-ink pt-24 text-cream md:pt-32">
      <div className="mx-auto max-w-[100rem] px-5 pb-16 md:px-10">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/50">
                <span className="h-px w-10 bg-lime" />
                The Menu
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                Pick your{" "}
                <span className="font-serif font-light italic text-lime">bowl.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-cream/50">
              Ten bowls of pure joy. Prices indicative — DM us for the day's menu and party
              orders.
            </p>
          </div>
        </FadeUp>

        {/* desktop list with floating preview */}
        <div className="mt-14 hidden lg:block">
          {menu.map((item, i) => (
            <FadeUp key={item.name} delay={0.03 * i}>
              <button
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                className="group grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-8 border-t border-cream/15 py-7 text-left transition-colors duration-300 last:border-b hover:bg-cream/5"
              >
                <span className="font-serif text-lg italic text-cream/35 transition-colors group-hover:text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="flex flex-wrap items-center gap-4">
                    <span className="font-display text-3xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-lime">
                      {item.name}
                    </span>
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${tagStyles[t]}`}
                      >
                        {tagLabels[t]}
                      </span>
                    ))}
                  </span>
                  <span className="mt-1.5 block max-w-xl text-sm text-cream/55">{item.desc}</span>
                </span>
                <span className="flex items-center gap-6">
                  <span className="font-display text-2xl font-semibold text-cream/80 transition-colors group-hover:text-coral">
                    ₹{item.price}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all duration-300 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </span>
              </button>
            </FadeUp>
          ))}
        </div>

        {/* mobile cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {menu.map((item, i) => (
            <FadeUp key={item.name} delay={0.05 * (i % 2)}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-cream/15 bg-cream/5"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.popular && (
                    <span className="absolute left-3 top-3 rounded-full bg-coral px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                    <span className="font-display text-lg font-semibold text-lime">₹{item.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{item.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${tagStyles[t]}`}
                      >
                        {tagLabels[t]}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-cream/15 bg-cream/5 px-6 py-5 text-sm text-cream/70">
            <span className="flex items-center gap-3">
              <PartyPopper className="h-5 w-5 text-mango" />
              Party orders accepted — birthdays, office lunches & beach days.
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-transform duration-300 hover:scale-105"
            >
              Order on WhatsApp
            </a>
          </div>
        </FadeUp>
      </div>

      {/* floating preview (desktop) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
        style={{ x: sx, y: sy }}
      >
        <div className="-translate-x-1/2 -translate-y-[112%]">
          <motion.div
            className="relative h-[21rem] w-[16rem] overflow-hidden rounded-[2rem] border-2 border-cream/30 shadow-2xl"
            animate={{
              opacity: active !== null ? 1 : 0,
              scale: active !== null ? 1 : 0.6,
              rotate: active !== null ? 4 : -6,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {menu.map((item, i) => (
              <img
                key={item.name}
                src={item.img}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                style={{ opacity: active === i ? 1 : 0 }}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/70 px-4 py-3 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-lime">
                {active !== null
                  ? bestsellers.some((b) => b.name === menu[active].name)
                    ? "Bestseller"
                    : "Try me"
                  : ""}
              </span>
              <span className="text-sm font-semibold text-cream">
                {active !== null ? `₹${menu[active].price}` : ""}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
