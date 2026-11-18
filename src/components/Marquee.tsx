import { Asterisk } from "lucide-react";

interface MarqueeProps {
  items: string[];
  className?: string;
  slow?: boolean;
}

export default function Marquee({ items, className = "", slow = false }: MarqueeProps) {
  const row = (
    <div className="flex w-max shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
            {item}
          </span>
          <Asterisk className="h-6 w-6 shrink-0" strokeWidth={2.5} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`flex w-max ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {row}
        {row}
      </div>
    </div>
  );
}
