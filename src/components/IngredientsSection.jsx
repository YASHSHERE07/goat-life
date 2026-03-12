import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ingredientsVideo from "../assets/video/ingridents.mp4";

gsap.registerPlugin(ScrollTrigger);

const goodStuff = [
  { emoji: "🌾", label: "Oats" },
  { emoji: "🌱", label: "Chia & Flax Seeds" },
  { emoji: "🍯", label: "Date Powder & Jaggery" },
  { emoji: "💪", label: "Pure Whey Protein" },
  { emoji: "🍃", label: "Stevia" },
  { emoji: "🏔️", label: "Himalayan Pink Salt" },
  { emoji: "☕", label: "Cocoa, Coffee & Dried Fruit Powders" },
];

const badStuff = [
  "Artificial flavours",
  "Refined sugar",
  "Preservatives",
  "Fillers",
];

export default function IngredientsSection() {
  const sectionRef  = useRef(null);
  const videoRef    = useRef(null);
  const marqRef     = useRef(null);
  const eyebrowRef  = useRef(null);
  const badgeRef    = useRef(null);
  const bodyRef     = useRef(null);
  const goodRefs    = useRef([]);
  const badRefs     = useRef([]);
  const stampRef    = useRef(null);
  const ctaRef      = useRef(null);



  const addGood = (el) => { if (el && !goodRefs.current.includes(el)) goodRefs.current.push(el); };
  const addBad  = (el) => { if (el && !badRefs.current.includes(el))  badRefs.current.push(el);  };

  useGSAP(() => {
    // ── Set initial states ──────────────────────────────
    gsap.set(videoRef.current,             { x: -70, opacity: 0, rotate: -3 });
    gsap.set(eyebrowRef.current,           { y: 20, opacity: 0 });
    gsap.set(badgeRef.current,             { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" });
    gsap.set(bodyRef.current,              { y: 30, opacity: 0 });
    gsap.set(goodRefs.current,             { x: -28, opacity: 0 });
    gsap.set(badRefs.current,              { x: 28,  opacity: 0 });
    gsap.set(stampRef.current,             { scale: 0.7, opacity: 0, rotate: -8 });
    gsap.set(ctaRef.current,               { y: 20, opacity: 0 });

    const st = { trigger: sectionRef.current, start: "top 65%" };

    // Video entrance + parallax
    gsap.to(videoRef.current, {
      x: 0, opacity: 1, rotate: 0,
      duration: 1.1, ease: "power3.out",
      scrollTrigger: st,
    });
    gsap.to(videoRef.current, {
      yPercent: -6, ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", end: "bottom top", scrub: true,
      },
    });

    // Eyebrow
    gsap.to(eyebrowRef.current, {
      y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 62%" },
    });

    // Headline SplitText
    const split = SplitText.create(".ing-headline", { type: "lines,chars" });
    gsap.from(split.chars, {
      yPercent: 110, stagger: 0.012, duration: 0.8, ease: "power3.out",
      scrollTrigger: { ...st, start: "top 58%" },
    });

    // Badge
    gsap.to(badgeRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.85, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 54%" },
    });

    // Body
    gsap.to(bodyRef.current, {
      y: 0, opacity: 1, duration: 0.75, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 51%" },
    });

    // Good stuff items
    gsap.to(goodRefs.current, {
      x: 0, opacity: 1, stagger: 0.07, duration: 0.55, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 47%" },
    });

    // Bad stuff items
    gsap.to(badRefs.current, {
      x: 0, opacity: 1, stagger: 0.07, duration: 0.55, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 42%" },
    });

    // Stamp
    gsap.to(stampRef.current, {
      scale: 1, opacity: 1, rotate: -6,
      duration: 0.65, ease: "back.out(1.6)",
      scrollTrigger: { ...st, start: "top 38%" },
    });

    // CTA
    gsap.to(ctaRef.current, {
      y: 0, opacity: 1, duration: 0.65, ease: "power2.out",
      scrollTrigger: { ...st, start: "top 34%" },
    });

    // Marquee
    gsap.to(marqRef.current, {
      xPercent: -50, ease: "none", duration: 20, repeat: -1,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#150805] overflow-hidden">

      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,235,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,224,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Amber glow */}
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#a26833]/8 blur-[110px]" />

      {/* ════════ MARQUEE STRIP ════════ */}
      <div className="border-b border-[#f2ebe0]/8 py-3 overflow-hidden">
        <div ref={marqRef} className="flex gap-8 w-max">
          {[...Array(2)].map((_, di) =>
            ["Only The Good Stuff", "Nothing Else", "No Shortcuts", "No Junk", "Natural Ingredients", "Clean Protein", "GOAT Mornings"].map((t, i) => (
              <span key={`${di}-${i}`} className="text-[11px] font-black uppercase tracking-[0.35em] text-[#f2ebe0]/30 whitespace-nowrap flex items-center gap-8">
                {t}
                <span className="w-1 h-1 rounded-full bg-[#a26833] inline-block" />
              </span>
            ))
          )}
        </div>
      </div>

      {/* ════════ MAIN GRID ════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 2xl:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center">

        {/* ── LEFT: VIDEO ── */}
        <div className="flex justify-center md:justify-start">
          <div
            ref={videoRef}
            className="relative"
            style={{ width: "min(300px, 78vw)" }}
          >
            {/* Diagonal slab */}
            <div
              className="absolute -inset-3 bg-[#a26833]/18 rounded-[2.5rem]"
              style={{ transform: "rotate(4deg) skewX(2deg)" }}
            />

            {/* 9:16 card */}
            <div
              className="relative z-10 rounded-[2.2rem] overflow-hidden border border-[#f2ebe0]/10 shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                src={ingredientsVideo}
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline preload="auto"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#150805]/80 via-transparent to-[#150805]/25" />

              {/* Top labels */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#f2ebe0]/50">
                  Ingredients
                </span>
                <div className="bg-[#a26833] rounded-full w-7 h-7 flex items-center justify-center">
                  <span className="text-[7px] font-black text-[#150805] uppercase">Pure</span>
                </div>
              </div>

              {/* Big faded text */}
              <span
                className="absolute right-2 top-12 text-[#f2ebe0]/[0.05] font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "8rem" }}
              >
                🥣
              </span>

              {/* Bottom strip */}
              <div className="absolute bottom-5 left-4 right-4">
                <div className="bg-[#f2ebe0]/10 backdrop-blur-md border border-[#f2ebe0]/15 rounded-xl px-4 py-3">
                  <p className="text-[#f2ebe0] font-black uppercase text-base leading-none tracking-tight mb-1">
                    Clean. Real. GOAT.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-[1.5px] bg-[#a26833]" />
                    <span className="text-[#f2ebe0]/50 text-[9px] uppercase tracking-widest font-bold">
                      No shortcuts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div className="absolute -right-5 top-1/4 z-20 bg-[#f2ebe0] rounded-xl px-3 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
              <span className="block text-[#150805] font-black text-xl leading-none tracking-tight">7</span>
              <span className="block text-[#a26833] text-[8px] font-black uppercase tracking-widest">Ingredients</span>
            </div>

            {/* Floating chip 2 */}
            <div className="absolute -left-5 bottom-1/4 z-20 bg-[#a26833] rounded-xl px-3 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
              <span className="block text-[#150805] font-black text-xl leading-none tracking-tight">0g</span>
              <span className="block text-[#150805]/70 text-[8px] font-black uppercase tracking-widest">Junk</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: COPY ── */}
        <div className="md:pl-14 2xl:pl-20 flex flex-col gap-5">

          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#a26833]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#a26833]">
              Only The Good Stuff · Nothing Else
            </span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden">
            <h2
              className="ing-headline font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#f2ebe0]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 6.5rem)" }}
            >
              Clean.
              <br />
              <span style={{ WebkitTextStroke: "2px rgba(242,235,224,0.45)", color: "transparent" }}>
                No Junk.
              </span>
              <br />
              <span className="text-[#da9452]">Real Life.</span>
            </h2>
          </div>

          {/* Badge */}
          <div ref={badgeRef} className="w-fit rotate-[-1.5deg]">
            <div className="bg-[#da9452] px-5 py-2">
              <span className="text-[#150805] font-black uppercase whitespace-nowrap tracking-[-0.02em] leading-none" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.4rem)" }}>
                Simple Ingredients. Smart Nutrition.
              </span>
            </div>
          </div>

          {/* Body */}
          <div ref={bodyRef}>
            <p className="text-[#f2ebe0]/55 font-medium leading-relaxed text-sm md:text-base max-w-md">
              GOAT Protein Oats are made with natural, high-quality ingredients
              to give you a clean, high-protein breakfast — no shortcuts, no junk.
              Can't pick a flavour? Try our Assorted Protein Oats Box.
            </p>
          </div>

          {/* Ingredients two-col list */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 pt-2 border-t border-[#f2ebe0]/8">

            {/* What Goes In */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a26833] mb-3">
                What Goes In 🥣
              </p>
              <div className="flex flex-col gap-2">
                {goodStuff.map((item) => (
                  <div key={item.label} ref={addGood} className="flex items-center gap-2.5 group">
                    <div className="w-4 h-[1.5px] bg-[#a26833]/50 flex-shrink-0 group-hover:w-6 group-hover:bg-[#a26833] transition-all duration-300" />
                    <span className="text-sm">{item.emoji}</span>
                    <span className="text-[#f2ebe0]/65 text-xs font-semibold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Stays Out */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#f2ebe0]/30 mb-3">
                What Stays Out 🚫
              </p>
              <div className="flex flex-col gap-2">
                {badStuff.map((item) => (
                  <div key={item} ref={addBad} className="flex items-center gap-2.5">
                    <div className="w-4 h-[1.5px] bg-[#f2ebe0]/15 flex-shrink-0" />
                    <span className="text-[#f2ebe0]/30 text-xs font-semibold line-through decoration-[#f2ebe0]/20 leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stamp */}
              <div
                ref={stampRef}
                className="mt-6 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#a26833]/50"
                style={{ rotate: "-6deg" }}
              >
                <div className="text-center">
                  <span className="block text-[#a26833] text-[7px] font-black uppercase tracking-widest leading-tight">GOAT</span>
                  <span className="block text-[#f2ebe0]/50 text-[6px] font-bold uppercase tracking-wider leading-tight mt-0.5">Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button className="group relative overflow-hidden bg-[#f2ebe0] text-[#150805] rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-widest hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/8 to-transparent" />
              <span className="relative">Shop Now →</span>
            </button>
            <button className="border border-[#f2ebe0]/20 text-[#f2ebe0]/60 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-[#f2ebe0]/40 hover:text-[#f2ebe0]/80 transition-all duration-300">
              Try Assorted Box
            </button>
          </div>

        </div>
      </div>

      {/* ════════ BOTTOM STRIP ════════ */}
      <div className="border-t border-[#f2ebe0]/8 py-4 px-6 md:px-12 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#f2ebe0]/20">
          Simple Ingredients
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#f2ebe0]/20">
          Smart Nutrition · GOAT Mornings
        </span>
      </div>
    </section>
  );
}