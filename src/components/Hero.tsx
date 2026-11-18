import { motion, type Variants } from "framer-motion";
import { ArrowDown, Asterisk, ChefHat, Flame, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { scrollToId } from "../lib/scroll";
import { WHATSAPP_URL } from "../data/menu";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const line: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { icon: Leaf, label: "Fresh every morning" },
  { icon: ChefHat, label: "Made to order" },
  { icon: Flame, label: "Sugar-free options" },
];

export default function Hero({ ready }: { ready: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 xl:pt-40">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-lime/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-mango/30 blur-3xl" />

      <div className="relative mx-auto max-w-[100rem] px-5 md:px-10">
        {/* eyebrow */}
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/60"
          variants={fade}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-coral" />
            Fort Kochi · Kerala
          </span>
          <span className="hidden h-px w-10 bg-ink/25 md:block" />
          <span>Bowls tossed daily</span>
        </motion.div>

        {/* headline */}
        <motion.h1
          className="font-display max-w-full text-[clamp(2.5rem,6.6vw,8.25rem)] font-semibold uppercase leading-[0.95] tracking-tight"
          variants={container}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
        >
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={line}>
              Salads that
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="flex flex-wrap items-center gap-x-[0.18em]" variants={line}>
              Actually
              <img
                src="/images/bowl-oatmeal.jpg"
                alt="Morning oatmeal bowl"
                className="inline-block h-[0.68em] w-[1.5em] rounded-full border-2 border-ink object-cover md:border-[3px]"
              />
              Make
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-3">
            <motion.span className="block" variants={line}>
              You{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-serif font-light italic text-coral">happy.</span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 w-full"
                  viewBox="0 0 220 24"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 16 C 60 4, 160 4, 216 14"
                    stroke="#B9E150"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.span>
          </span>
        </motion.h1>

        {/* content row */}
        <motion.div
          className="mt-10 grid items-end gap-12 md:mt-14 lg:grid-cols-12 lg:gap-8"
          variants={fade}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
        >
          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed md:text-lg text-ink/70">
              Toss Theory is Fort Kochi's happiest bowl bar — fresh, colourful, ridiculously
              delicious salads, smoothie bowls & protein bowls, made to order and tossed with
              love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm md:px-7 md:py-4 font-semibold text-cream transition-all duration-300 hover:scale-[1.03] hover:bg-coral"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <button
                onClick={() => scrollToId("#menu")}
                className="group flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 text-sm md:px-7 md:py-4 font-semibold transition-all duration-300 hover:bg-ink hover:text-cream"
              >
                See the menu
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                  <s.icon className="h-4 w-4 text-limedark" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* hero image */}
          <div className="relative lg:col-span-7">
            <motion.div
              className="relative mx-auto w-full max-w-xl lg:max-w-2xl"
              animate={{ rotate: [2, 1.2, 2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-[1.75rem] border-2 border-ink shadow-[6px_8px_0_#16301f] md:rounded-[2.5rem] md:shadow-[12px_16px_0_#16301f]">
                <img
                  src="/images/hero-bowl.jpg"
                  alt="The Classic Toss rainbow salad bowl"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* rotating badge */}
              <div className="absolute -right-2 -top-8 hidden h-28 w-28 items-center justify-center rounded-full bg-cream md:flex lg:-right-6 lg:h-32 lg:w-32">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
                  <defs>
                    <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-ink font-display text-[10px] uppercase" letterSpacing="2.5">
                    <textPath href="#badge-circle">
                      Fresh Bowls · Big Moods · Fort Kochi ·
                    </textPath>
                  </text>
                </svg>
                <Asterisk className="h-8 w-8 text-coral" strokeWidth={2.5} />
              </div>

              {/* price chip */}
              <div className="absolute -bottom-5 left-3 flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-2 text-xs shadow-lg md:left-6 md:px-5 md:py-2.5 md:text-sm font-semibold shadow-lg">
                <Sparkles className="h-4 w-4 text-limedark" />
                The Classic Toss · ₹320
              </div>
            </motion.div>

            {/* floating mini bowls */}
            <motion.div
              className="absolute -left-8 top-6 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-cream shadow-xl lg:block lg:-left-10"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/images/bowl-smoothie.jpg" alt="Tropical smoothie bowl" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-16 hidden h-24 w-24 overflow-hidden rounded-full border-4 border-cream shadow-xl lg:block lg:right-4"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img src="/images/bowl-chia.jpg" alt="Chia paradise bowl" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex justify-center py-10 md:py-14">
          <motion.button
            onClick={() => scrollToId("#story")}
            className="flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-ink/50"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
          >
            Scroll for the good stuff
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
