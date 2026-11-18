import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveHorizontal, Star } from "lucide-react";
import FadeUp from "./Reveal";
import { bestsellers, WHATSAPP_URL } from "../data/menu";

export default function Bestsellers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDragWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="bestsellers" className="relative overflow-hidden bg-ink pb-28 text-cream">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/50">
                <span className="h-px w-10 bg-coral" />
                Crowd Favourites
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                The ones you{" "}
                <span className="font-serif font-light italic text-coral">keep ordering.</span>
              </h2>
            </div>
            <p className="flex items-center gap-3 text-sm font-medium text-cream/50">
              <MoveHorizontal className="h-5 w-5 text-lime" />
              Drag to explore
            </p>
          </div>
        </FadeUp>
      </div>

      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -dragWidth, right: 0 }}
        dragElastic={0.08}
        className="mt-14 flex w-max cursor-grab gap-6 px-5 active:cursor-grabbing md:px-10"
      >
        {bestsellers.map((item, i) => (
          <FadeUp key={item.name} delay={0.04 * i} y={40}>
            <div className="group w-72 shrink-0 md:w-80">
              <div className="relative overflow-hidden rounded-[2rem] border border-cream/15">
                <img
                  src={item.img}
                  alt={item.name}
                  draggable={false}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-72"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream px-3.5 py-1.5 font-display text-sm font-semibold text-ink">
                  ₹{item.price}
                </span>
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-coral px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
                  <Star className="h-3.5 w-3.5 fill-cream" />
                  Popular
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Order this
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{item.name}</h3>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/55">{item.desc}</p>
            </div>
          </FadeUp>
        ))}

        {/* end card */}
        <FadeUp delay={0.24} y={40}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full min-h-[22rem] w-72 shrink-0 flex-col items-start justify-between rounded-[2rem] bg-lime p-8 text-ink transition-transform duration-300 hover:-translate-y-2 md:w-80"
          >
            <Star className="h-10 w-10 fill-ink" />
            <div>
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight">
                Can't decide? Toss it to us.
              </p>
              <p className="mt-3 flex items-center gap-2 font-semibold">
                DM to order
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </p>
            </div>
          </a>
        </FadeUp>
      </motion.div>
    </section>
  );
}
