"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const TRANSLATIONS = [
  { text: "GOAT LIFE", lang: "English" },

  { text: "गोट लाइफ", lang: "Hindi" },
  { text: "गोट लाईफ", lang: "Marathi" },
  { text: "ગોટ લાઇફ", lang: "Gujarati" },
  { text: "ਗੋਟ ਲਾਈਫ", lang: "Punjabi" },
  { text: "গোট লাইফ", lang: "Bengali" },
  { text: "ଗୋଟ ଲାଇଫ", lang: "Odia" },
  { text: "గోట్ లైఫ్", lang: "Telugu" },
  { text: "ಗೋಟ್ ಲೈಫ್", lang: "Kannada" },
  { text: "கோட் லைஃப்", lang: "Tamil" },
  { text: "ഗോട്ട് ലൈഫ്", lang: "Malayalam" },
  { text: "গোট লাইফ", lang: "Assamese" },
  { text: "ꯒꯣꯠ ꯂꯥꯏꯐ", lang: "Manipuri (Meitei)" },
  { text: "गोठ लाइफ", lang: "Nepali" },
  { text: "गोट लाइफ", lang: "Konkani" },
  { text: "𑂏𑂷𑂙 𑂪𑂰𑂩𑂲𑂤", lang: "Maithili (Tirhuta script)" },
];

const TAG_META = TRANSLATIONS.map((_, i) => {
  const angle = (i / TRANSLATIONS.length) * 360;
  const radius = 30 + (((i * 7) % 10) / 10) * 36;
  return {
    fontSize: 9 + (i % 5) * 2.2,
    fontWeight: i % 3 === 0 ? 700 : 400,
    opacity: 0.07 + (i % 6) * 0.035,
    scale: 0.7 + (i % 4) * 0.14,
    left: 50 + Math.cos((angle * Math.PI) / 180) * radius,
    top: 50 + Math.sin((angle * Math.PI) / 180) * radius * 0.52,
    floatY: 6 + (i % 5) * 2.8,
    floatX: (i % 2 === 0 ? 1 : -1) * (i % 4) * 3,
    floatDur: 2.8 + (i % 5) * 0.5,
    delay: (i % 8) * 0.25,
  };
});

const REASONS = [
  {
    num: "01",
    title: "Spoon-Free",
    desc: "Eat on the go — no bowl, no spoon, no mess.",
  },
  {
    num: "02",
    title: "30g Protein",
    desc: "Clinically dosed protein per serving, every time.",
  },
  {
    num: "03",
    title: "Zero Junk",
    desc: "No refined sugar, no preservatives, no fillers.",
  },
  {
    num: "04",
    title: "6 Bold Flavours",
    desc: "Tiramisu to Almond Kulfi — pick your favourite.",
  },
];

export default function Banner() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const sublineRef = useRef(null);
  const pillRef = useRef(null);
  const rule1Ref = useRef(null);
  const rule2Ref = useRef(null);
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);
  const marqRef = useRef(null);
  const glowRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glow breathe
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      // Rules
      gsap.fromTo(
        rule1Ref.current,
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 1.1, ease: "expo.out", delay: 0.5 },
      );
      gsap.fromTo(
        rule2Ref.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.1, ease: "expo.out", delay: 0.5 },
      );

      // Sub-eyebrow pill
      gsap.fromTo(
        pillRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "expo.out", delay: 0.3 },
      );

      // Main heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.9, filter: "blur(22px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
          delay: 0.4,
        },
      );

      // Sub-line
      gsap.fromTo(
        sublineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 },
      );

      // Reason cards stagger
      gsap.fromTo(
        cardsRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          delay: 1.1,
        },
      );

      // Language tags
      tagsRef.current.forEach((el, i) => {
        if (!el) return;
        const m = TAG_META[i];
        gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.4 });
        gsap.to(el, {
          opacity: m.opacity,
          scale: m.scale,
          duration: 0.9 + (i % 4) * 0.15,
          delay: 0.05 * i + m.delay * 0.4,
          ease: "back.out(1.4)",
        });
        gsap.to(el, {
          y: `+=${m.floatY}`,
          x: `+=${m.floatX}`,
          duration: m.floatDur,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: m.delay,
        });
      });

      // Marquee
      gsap.to(marqRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex flex-col"
      style={{ background: "#0d1117" }}
    >
      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(242,235,224,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Grain ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Amber glow orb ── */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: "18%",
          width: "min(700px, 90vw)",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(162,104,51,0.16) 0%, transparent 65%)",
          filter: "blur(8px)",
        }}
      />

      {/* ── Edge vignette ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 40%, transparent 20%, rgba(13,17,23,0.85) 100%)",
        }}
      />

      {/* ── Floating language tags ── */}
      {TRANSLATIONS.map((item, i) => (
        <span
          key={item.lang}
          ref={(el) => (tagsRef.current[i] = el)}
          className="pointer-events-none absolute whitespace-nowrap text-[#f2ebe0]"
          style={{
            left: `${TAG_META[i].left}%`,
            top: `${TAG_META[i].top}%`,
            fontSize: `${TAG_META[i].fontSize}px`,
            fontWeight: TAG_META[i].fontWeight,
            letterSpacing: "0.07em",
            opacity: 0,
          }}
        >
          {item.text}
        </span>
      ))}

      {/* ════════ HERO BLOCK ════════ */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 pb-10 px-6 text-center">
        {/* Top eyebrow pill */}
        <div
          ref={pillRef}
          className="mb-6 flex items-center gap-2 bg-[#a26833]/15 border border-[#a26833]/30 rounded-full px-5 py-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#a26833]" />
          <span className="text-[9px] font-black uppercase tracking-[0.42em] text-[#a26833]">
            India's First Spoon-Free · GOAT Life
          </span>
        </div>

        {/* Rules + WHY CHOOSE US */}
        <div className="flex items-center gap-5 mb-3 w-full justify-center">
          <div
            ref={rule1Ref}
            className="h-px flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-l from-[#a26833]/60 to-transparent"
          />
          <span className="text-[9px] font-black uppercase tracking-[0.42em] text-[#a26833]/70 whitespace-nowrap hidden md:block">
            High Protein Oats
          </span>
          <div
            ref={rule2Ref}
            className="h-px flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-r from-[#a26833]/60 to-transparent"
          />
        </div>

        {/* ── MAIN HEADING ── */}
        <div
          ref={headingRef}
          className="opacity-0 relative flex flex-col items-center mb-4 py-4"
        >
          {/* GOAT LIFE watermark — sits behind as bg of heading */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap z-0"
            style={{
              fontSize: "clamp(5rem, 28vw, 28rem)",
              fontFamily: "'Bebas Neue', 'Antonio', sans-serif",
              letterSpacing: "1rem",
              color: "transparent",
              WebkitTextStroke: "1px rgba(162,104,51,0.18)",
            }}
          >
            GOAT LIFE
          </span>

          {/* Foreground heading */}
          <h1
            className="relative z-10 uppercase leading-none tracking-[-0.04em] text-[#f2ebe0]"
            style={{
              fontSize: "clamp(2.8rem, 10vw, 10rem)",
              fontFamily: "'Bebas Neue', 'Antonio', sans-serif",
              textShadow: "0 0 60px rgba(162,104,51,0.3)",
            }}
          >
            Why Choose US
          </h1>
        </div>

        {/* Sub-line */}
        <p
          ref={sublineRef}
          className="opacity-0 text-[#f2ebe0]/40 font-medium text-sm max-w-md leading-relaxed mb-10"
        >
          Because settling for ordinary breakfast is so last season. High
          protein. Zero junk. Built for real life.
        </p>
      </div>

   
      {/* ════════ MARQUEE STRIP ════════ */}
      <div
        className="relative z-10 border-t border-[#f2ebe0]/6 py-3 overflow-hidden"
        style={{ background: "rgba(13,17,23,0.8)" }}
      >
        <div ref={marqRef} className="flex gap-8 w-max">
          {[...Array(2)].map((_, di) =>
            [
              "GOAT Life",
              "Pan India",
              "High Protein",
              "Spoon-Free",
              "No Cooking",
              "No Bowls",
              "Shark Tank India",
              "6 Flavours",
              "₹2 Crore Deal",
              "Zero Sugar",
            ].map((t, i) => (
              <span
                key={`${di}-${i}`}
                className="text-[9px] font-black uppercase tracking-[0.35em] text-[#f2ebe0]/18 whitespace-nowrap flex items-center gap-8"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-[#a26833]/50 inline-block" />
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
