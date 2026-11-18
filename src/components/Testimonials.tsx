import FadeUp from "./Reveal";
import { Quote, Star } from "lucide-react";

const quotes = [
  {
    text: "Best salad in Fort Kochi, hands down. The Classic Toss is basically a religion at this point.",
    name: "Anjali P.",
    role: "Regular since day one",
  },
  {
    text: "The oatmeal bowl changed my mornings. I used to skip breakfast. Now I plan my day around it.",
    name: "Rahul S.",
    role: "Morning bowl devotee",
  },
  {
    text: "Broasted chicken AND healthy bowls under one roof? My whole family orders weekly. No notes.",
    name: "Fathima K.",
    role: "Family orders",
  },
  {
    text: "Fresh, colourful and actually filling. Finally, healthy food that doesn't taste like homework.",
    name: "Devika N.",
    role: "Lunch break hero",
  },
  {
    text: "That avocado quinoa bowl is chef's kiss. The tahini drizzle deserves its own award.",
    name: "Arjun M.",
    role: "Feta appreciator",
  },
  {
    text: "Ordered for my whole team's lunch. Everyone asked where it was from. Everyone.",
    name: "Sneha R.",
    role: "Office party orders",
  },
];

function Card({ q }: { q: (typeof quotes)[number] }) {
  return (
    <div className="w-80 shrink-0 rounded-[2rem] border border-ink/10 bg-cream p-7 shadow-sm transition-colors duration-300 hover:border-lime hover:bg-lime/30 md:w-96">
      <Quote className="h-7 w-7 rotate-180 text-coral" />
      <p className="mt-4 text-lg leading-relaxed text-ink/80">"{q.text}"</p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="font-display font-semibold">{q.name}</p>
          <p className="text-xs uppercase tracking-wider text-ink/50">{q.role}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-limedark text-limedark" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <FadeUp>
          <p className="mb-6 flex items-center justify-center gap-3 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-ink/60">
            <span className="h-px w-10 bg-coral" />
            Word On The Street
            <span className="h-px w-10 bg-coral" />
          </p>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold tracking-tight md:text-5xl xl:text-6xl">
            Kochi has{" "}
            <span className="font-serif font-light italic text-coral">spoken.</span>
          </h2>
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <div className="mt-14 overflow-hidden">
          <div className="flex w-max animate-marquee-slow gap-5 pr-5">
            {[...quotes, ...quotes].map((q, i) => (
              <Card key={i} q={q} />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
