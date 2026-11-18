import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

const letters = "TOSS THEORY".split("");

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => onDone(), 2300);
    const interval = setInterval(() => {
      setCount((c) => Math.min(100, c + Math.ceil(Math.random() * 9)));
    }, 90);
    const t2 = setTimeout(() => clearInterval(interval), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink text-cream"
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink"
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Asterisk className="h-8 w-8" strokeWidth={2.5} />
      </motion.div>

      <div className="flex overflow-hidden">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            className="font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl md:text-7xl"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="mt-4 text-[11px] uppercase tracking-[0.35em] text-cream/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Fresh Bowls · Fort Kochi
      </motion.p>

      <div className="mt-10 h-px w-48 overflow-hidden bg-cream/15">
        <motion.div className="h-full bg-lime" style={{ width: `${count}%` }} />
      </div>
      <span className="mt-3 font-display text-xs text-cream/50">{count}%</span>
    </motion.div>
  );
}
