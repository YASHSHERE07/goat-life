import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import spoon from "../assets/video/spoon.mp4";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Quick to prepare, easy to consume",
  "Packed with protein for daily goals",
  "Available in delicious flavours",
  "Designed for busy schedules",
];

export default function ProductInfo1() {
  const sectionRef = useRef(null);
  const videoWrapRef = useRef(null);
  const badgeRef = useRef(null);
  const bodyRef = useRef(null);
  const bulletRefs = useRef([]);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const marqRef = useRef(null);

  const addBullet = (el) => {
    if (el && !bulletRefs.current.includes(el)) bulletRefs.current.push(el);
  };

  useGSAP(
    () => {
      // ── Initial states ────────────────────────────────
      gsap.set(videoWrapRef.current, { x: 80, opacity: 0, rotate: 3 });
      gsap.set(badgeRef.current, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        rotate: -2,
      });
      gsap.set(bodyRef.current, { y: 30, opacity: 0 });
      gsap.set(bulletRefs.current, { x: -24, opacity: 0 });
      gsap.set(taglineRef.current, { y: 20, opacity: 0 });
      gsap.set(ctaRef.current, { y: 20, opacity: 0 });

      const st = { trigger: sectionRef.current, start: "top 65%" };

      // Video entrance
      gsap.to(videoWrapRef.current, {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: st,
      });

      // Video parallax scrub
      gsap.to(videoWrapRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline char split
      const split = SplitText.create(".pi1-headline", { type: "lines,chars" });
      gsap.from(split.chars, {
        yPercent: 110,
        stagger: 0.012,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { ...st, start: "top 60%" },
      });

      // Badge
      gsap.to(badgeRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        rotate: -2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 55%" },
      });

      // Body
      gsap.to(bodyRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 52%" },
      });

      // Bullets
      gsap.to(bulletRefs.current, {
        x: 0,
        opacity: 1,
        stagger: 0.09,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 48%" },
      });

      // Tagline + CTA
      gsap.to(taglineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 45%" },
      });
      gsap.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 42%" },
      });

      // Marquee infinite scroll
      gsap.to(marqRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative bg-[#150805] overflow-hidden">
      {/* ── Grid lines bg ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,235,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,224,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Amber glow spot ── */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#a26833]/10 blur-[100px]" />

      {/* ════════ MARQUEE HEADER STRIP ════════ */}
      <div className="border-b border-[#f2ebe0]/8 py-3 overflow-hidden">
        <div ref={marqRef} className="flex gap-8 w-max">
          {[...Array(2)].map((_, di) =>
            [
              "India's First",
              "Spoon-Free",
              "High Protein",
              "Oats",
              "No Cooking",
              "No Bowls",
              "No Pauses",
              "Made for Real Life",
            ].map((t, i) => (
              <span
                key={`${di}-${i}`}
                className="text-[11px] font-black uppercase tracking-[0.35em] text-[#f2ebe0]/30 whitespace-nowrap flex items-center gap-8"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-[#a26833] inline-block" />
              </span>
            )),
          )}
        </div>
      </div>

      {/* ════════ MAIN CONTENT ════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 2xl:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
        {/* ── RIGHT: COPY (order-1 on mobile, order-2 on md) ── */}
        <div className="md:order-1 flex flex-col gap-5 md:pr-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#a26833]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#a26833]">
              Protein Oats · GOAT
            </span>
          </div>

          {/* BIG stacked headline */}
          <div className="overflow-hidden">
            <h2
              className="pi1-headline font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#f2ebe0]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 7rem)" }}
            >
              Breakfast
              <br />
              <span
                className="inline-block"
                style={{
                  WebkitTextStroke: "3px rgba(242,235,224,0.5)",
                  color: "transparent",
                }}
              >
                That Moves
              </span>
              <br />
              <span className="text-[#da9452]">At Your Speed.</span>
            </h2>
          </div>

          {/* Badge */}
          <div ref={badgeRef} className="w-fit">
            <div className="bg-[#da9452] px-5 py-2">
              <span
                className="text-[#150805] font-black uppercase whitespace-nowrap tracking-[-0.02em] leading-none"
                style={{ fontSize: "clamp(0.95rem, 2vw, 1.5rem)" }}
              >
                High Protein. Easy Prep. Real Life.
              </span>
            </div>
          </div>

          {/* Body */}
          <div ref={bodyRef}>
            <p className="text-[#f2ebe0]/55 font-medium leading-relaxed text-sm md:text-base max-w-md">
              Enjoy a high-protein breakfast while driving, working, or rushing
              out the door. Designed for busy schedules — quick to prepare, easy
              to consume, packed with protein.
            </p>
          </div>

          {/* Bullets */}
          <div className="flex flex-col gap-2.5">
            {bullets.map((b) => (
              <div key={b} ref={addBullet} className="flex items-center gap-3">
                <div className="w-4 h-[1.5px] bg-[#a26833] flex-shrink-0" />
                <span className="text-[#f2ebe0]/65 text-sm font-semibold">
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* Tagline + CTA */}
          <div ref={taglineRef} className="pt-2 border-t border-[#f2ebe0]/8">
            <p className="text-[#f2ebe0]/30 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              No cooking · No bowls · No pauses
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <button className="group relative overflow-hidden bg-[#f2ebe0] text-[#150805] rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-widest hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/8 to-transparent" />
              <span className="relative">Shop Now →</span>
            </button>
            <button className="border border-[#f2ebe0]/20 text-[#f2ebe0]/60 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-[#f2ebe0]/40 hover:text-[#f2ebe0]/80 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* ── LEFT: VIDEO ── */}
        <div className="md:order-2 flex justify-center md:justify-end">
          <div
            ref={videoWrapRef}
            className="relative"
            style={{ width: "min(320px, 80vw)" }}
          >
            {/* Diagonal amber slash behind card */}
            <div
              className="absolute -inset-3 bg-[#a26833]/20 rounded-[2.5rem]"
              style={{ transform: "rotate(-4deg) skewX(-2deg)" }}
            />

            {/* 9:16 video card */}
            <div
              className="relative z-10 rounded-[2.2rem] overflow-hidden border border-[#f2ebe0]/10 shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                src={spoon}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />

              {/* Dark scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#150805]/80 via-transparent to-[#150805]/30" />

              {/* Top label row */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#f2ebe0]/50">
                    GOAT Life
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-tight text-[#f2ebe0]">
                    Protein Oats
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#a26833] flex items-center justify-center">
                  <span className="text-[8px] font-black text-[#150805] uppercase tracking-tight">
                    New
                  </span>
                </div>
              </div>

              {/* Big watermark number */}
              <span
                className="absolute right-2 top-12 text-[#f2ebe0]/[0.05] font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "9rem" }}
              >
                01
              </span>

              {/* Bottom overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#f2ebe0]/10 backdrop-blur-md border border-[#f2ebe0]/15 rounded-xl px-4 py-3">
                  <p className="text-[#f2ebe0] font-black uppercase text-lg leading-none tracking-tight mb-1">
                    Mix. Shake. Sip.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-[1.5px] bg-[#a26833]" />
                    <span className="text-[#f2ebe0]/50 text-[9px] uppercase tracking-widest font-bold">
                      30 seconds flat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -left-6 top-1/3 z-20 bg-[#f2ebe0] rounded-xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <span className="block text-[#150805] font-black text-2xl leading-none tracking-tight">
                30g
              </span>
              <span className="block text-[#a26833] text-[9px] font-bold uppercase tracking-widest">
                Protein
              </span>
            </div>

            {/* Floating stat chip 2 */}
            <div className="absolute -right-6 bottom-1/3 z-20 bg-[#a26833] rounded-xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <span className="block text-[#150805] font-black text-2xl leading-none tracking-tight">
                0g
              </span>
              <span className="block text-[#150805]/70 text-[9px] font-bold uppercase tracking-widest">
                Sugar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ BOTTOM RULE STRIP ════════ */}
    </section>
  );
}
