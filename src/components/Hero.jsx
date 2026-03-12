import React, { useEffect, useRef } from "react";
import bg from "../assets/video/bg2.mp4";
import { gsap } from "gsap";

// ── Scramble text ────────────────────────────────────────────
function scrambleText(element, finalText, duration = 1.5) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!&%$";
  const totalFrames = Math.round(duration * 60);
  let frame = 0;
  const interval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    element.textContent = finalText
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        if (i / finalText.length < progress * 1.4) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
    if (frame >= totalFrames) {
      clearInterval(interval);
      element.textContent = finalText;
    }
  }, 1000 / 60);
}

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);
  const statsRef = useRef(null);
  const marqRef = useRef(null);
  const rulerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video subtle zoom out
      gsap.fromTo(
        videoRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 8, ease: "power1.out" },
      );

      // Heading — scramble only, visible from start
      scrambleText(headingRef.current, "GOAT LIFE", 2.0);

      // Marquee
      gsap.to(marqRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });

      // Scroll dot bounce
      gsap.to(scrollRef.current?.querySelector(".scroll-dot"), {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.85,
        ease: "sine.inOut",
        delay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#150805]"
    >
      {/* ── Fullscreen bg video ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover will-change-transform"
      >
        <source src={bg} type="video/mp4" />
      </video>

      {/* ── Layered overlays ── */}
      {/* Base dark wash */}
      <div className="absolute inset-0 z-10 bg-[#150805]/55" />
      {/* Bottom heavy vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#150805] via-transparent to-transparent" />
      {/* Top edge fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#150805]/60 via-transparent to-transparent" />
      {/* Left edge vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#150805]/50 via-transparent to-[#150805]/30" />

      {/* ── Grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />

      {/* ── Amber glow behind heading ── */}
      <div
        className="pointer-events-none absolute z-10 left-1/2 -translate-x-1/2"
        style={{
          top: "30%",
          width: "min(1000px, 100vw)",
          height: "50vh",
          background:
            "radial-gradient(ellipse at center, rgba(162,104,51,0.18) 0%, transparent 65%)",
          filter: "blur(4px)",
        }}
      />

     

      {/* ── Main content ── */}
      <div className="relative z-20 flex h-full flex-col items-center justify-between pb-16 md:pb-20 px-6 md:px-12 lg:px-16 text-center">
        {/* Eyebrow row */}
        <div ref={eyebrowRef} className="flex items-center mt-20 gap-3 mb-3">
          <div className="w-6 h-[2px] bg-[#a26833]" />
          <span className="text-[9px] font-black uppercase  tracking-[0.42em] text-[#a26833]">
            India's First Spoon-Free
          </span>
          <div className="w-6 h-[2px] bg-[#a26833]" />
        </div>

        {/* Thin rule */}
        <div
          ref={rulerRef}
          className="mb-4 h-px bg-gradient-to-r from-transparent via-[#f2ebe0]/20 to-transparent w-full max-w-xl"
        />

        {/* Giant heading */}
        <h1
          ref={headingRef}
          className="font-black uppercase leading-[0.84] text-[8rem] md:text-[14rem] tracking-[-0.04em] text-[#f2ebe0] mb-4"
          style={{
            textShadow:
              "0 4px 40px rgba(162,104,51,0.25), 0 0 120px rgba(21,8,5,0.8)",
          }}
        >
          @#&%!&!%
        </h1>

        {/* Badge + sub-label row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-5 md:mb-7">
          <div
            ref={badgeRef}
            className="bg-[#a26833] px-4 py-2 -rotate-[0.5deg]"
          >
            <span className="font-black uppercase text-[#150805] tracking-[-0.01em] whitespace-nowrap text-sm md:text-base">
              High Protein Oats
            </span>
          </div>
          <span className="text-[#f2ebe0]/30 text-[10px] font-bold uppercase tracking-[0.3em]">
            No cooking · No bowls · No pauses
          </span>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[#f2ebe0]/50 font-medium leading-relaxed max-w-sm md:max-w-md mb-7 text-center"
          style={{ fontSize: "clamp(12px, 1.3vw, 15px)" }}
        >
          Bold nutrition for people who want clean energy, strong mornings, and
          a better everyday routine.
        </p>

        {/* Buttons + stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {/* Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap gap-3">
            <button className="group relative overflow-hidden rounded-full bg-[#f2ebe0] px-7 py-3 text-[10px] font-black uppercase tracking-widest text-[#150805] transition-transform hover:scale-[1.04] duration-200">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/8 to-transparent" />
              <span className="relative">Buy Now →</span>
            </button>
            <button className="rounded-full border border-[#f2ebe0]/18 px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-[#f2ebe0]/50 transition-all hover:border-[#f2ebe0]/40 hover:text-[#f2ebe0]/80 duration-200">
              Explore
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-[#f2ebe0]/10" />

          {/* Stats */}
          <div ref={statsRef} className="flex items-center gap-5 md:gap-7">
            {[
              { val: "30g", label: "Protein" },
              { val: "6", label: "Flavours" },
              { val: "0g", label: "Sugar" },
            ].map(({ val, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="h-4 w-px bg-[#f2ebe0]/10" />}
                <div>
                  <span
                    className="block font-black uppercase leading-none text-[#f2ebe0]"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                  >
                    {val}
                  </span>
                  <span className="block text-[7px] font-bold uppercase tracking-[0.3em] text-[#a26833] mt-0.5">
                    {label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        ref={scrollRef}
        className="absolute bottom-7 right-8 md:right-10 z-30 flex flex-col items-center gap-1.5"
      >
        <p className="text-[7px] uppercase tracking-[0.36em] text-[#f2ebe0]/20">
          Scroll
        </p>
        <div className="h-8 w-px bg-gradient-to-b from-[#f2ebe0]/25 to-transparent" />
        <div className="scroll-dot w-1 h-1 rounded-full bg-[#a26833]" />
      </div>

      {/* ── Marquee bottom strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-[#f2ebe0]/6 py-2.5 overflow-hidden bg-[#150805]/40 backdrop-blur-sm">
        <div ref={marqRef} className="flex gap-8 w-max">
          {[...Array(2)].map((_, di) =>
            [
              "GOAT Life",
              "Protein Oats",
              "No Cooking",
              "No Bowls",
              "No Pauses",
              "Shark Tank India",
              "₹2 Crore Deal",
              "6 Flavours",
              "India's First",
            ].map((t, i) => (
              <span
                key={`${di}-${i}`}
                className="text-[9px] font-black uppercase tracking-[0.35em] text-[#f2ebe0]/18 whitespace-nowrap flex items-center gap-8"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-[#a26833]/40 inline-block" />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
