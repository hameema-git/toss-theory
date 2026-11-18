import FadeUp from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { INSTAGRAM_URL } from "../data/menu";

const shots = [
  { src: "/images/tossing.jpg", caption: "The toss", span: "col-span-2 row-span-2" },
  { src: "/images/bowl-chia.jpg", caption: "Chia Paradise", span: "" },
  { src: "/images/bowl-smoothie.jpg", caption: "Tropical Sunrise", span: "" },
  { src: "/images/broasted.jpg", caption: "Broasted Fridays", span: "" },
  { src: "/images/ingredients.jpg", caption: "Morning market run", span: "" },
  { src: "/images/hero-bowl.jpg", caption: "The Classic Toss", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative -mt-6 rounded-t-[3rem] bg-cream pt-24 md:pt-32">
      <div className="mx-auto max-w-[100rem] px-5 pb-20 md:px-10">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/60">
                <span className="h-px w-10 bg-coral" />
                Fresh From The Feed
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                Straight from{" "}
                <span className="font-serif font-light italic text-coral">the gram.</span>
              </h2>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border-2 border-ink px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-ink hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
              @tosstheory.kochi
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeUp>

        <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4 md:gap-4">
          {shots.map((shot, i) => (
            <FadeUp key={shot.src + i} delay={0.04 * i} className={shot.span}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem]"
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
                <div className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  {shot.caption}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="mt-10 text-center text-sm text-ink/50">
            Tag us in your bowl pics — we repost the prettiest ones every week.
            <span className="font-semibold text-ink"> #TossTheory #KochiFoodies #FortKochiEats</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
