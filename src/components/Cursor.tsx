import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [fine, setFine] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest?.("a, button, [data-hover]");
      setHovering(!!interactive);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!fine) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
        animate={{
          width: hovering ? 52 : 22,
          height: hovering ? 52 : 22,
          backgroundColor: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        <span
          className="rounded-full bg-white transition-all duration-200"
          style={{ width: hovering ? 0 : 5, height: hovering ? 0 : 5 }}
        />
      </motion.div>
    </motion.div>
  );
}
