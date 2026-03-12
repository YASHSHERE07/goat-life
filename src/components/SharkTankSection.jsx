import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Replace with your actual photo import
// import sharkTankPhoto from "../assets/images/shark-tank.jpg";
const sharkTankPhoto = "src/assets/images/shark.webp";

gsap.registerPlugin(ScrollTrigger);

const sharks = [
  { name: "Aman Gupta", flavour: "Mocha Marvel", initial: "AG" },
  { name: "Anupam Mittal", flavour: "Tiramisu", initial: "AM" },
  { name: "Amit Jain", flavour: "Mocha Marvel", initial: "AJ" },
  { name: "Namita Thapar", flavour: "Mango Madness", initial: "NT" },
  { name: "Ritesh Agarwal", flavour: "Almond Kulfi", initial: "RA" },
];

// ── Full Article Modal ──────────────────────────────────────
function ArticleModal({ onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useGSAP(() => {
    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.from(panelRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.45,
      ease: "power3.out",
    });
  });

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      gsap.to(panelRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      });
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-[#150805]/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
    >
      <div
        ref={panelRef}
        className="relative bg-[#f2ebe0] w-full md:max-w-2xl max-h-[92vh] md:max-h-[88vh] rounded-t-[2rem] md:rounded-[2rem] overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2e1a0e]/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a26833]" />
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#a26833]">
              Brand Story
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2e1a0e]/8 flex items-center justify-center text-[#2e1a0e]/60 hover:bg-[#2e1a0e]/15 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 md:px-8 py-6">
          {/* Hero image */}
          <div className="relative h-48 md:h-64 rounded-[1.4rem] overflow-hidden mb-6">
            <img
              src={sharkTankPhoto}
              alt="GOAT Life on Shark Tank India"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150805]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="bg-[#2e1a0e] text-[#f2ebe0] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                Season 5
              </span>
              <span className="bg-[#a26833] text-[#150805] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                ₹2 Crore
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#150805] mb-2"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            From a Dream to the Tank
          </h2>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#7a5240]/50 mb-6">
            January 9, 2026
          </p>

          {/* Body */}
          <div className="space-y-4 text-[#7a5240]/80 font-medium leading-relaxed text-sm">
            <p>
              For Yash Kalra, getting to Shark Tank India was never a one-day
              goal. Before GOAT Life, he had once tried to reach the Tank with
              an earlier venture, Wisegg. That experience didn't lead to the
              stage, but it planted the seed and strengthened the resolve to
              build something sharper, stronger, and more aligned with real
              consumer needs.
            </p>
            <p>
              On{" "}
              <span className="font-black text-[#2e1a0e]">11th July 2023</span>,
              that next chapter began with GOAT Life — a brand created with a
              simple mission: to make high protein oats convenient, flavourful,
              and realistic for everyday life.
            </p>
            <p>
              Two years later, after applying for 4 seasons straight, Yash with
              GOAT Life walked into Shark Tank India Season 5.
            </p>
          </div>

          {/* Pull quote */}
          <div className="my-6 border-l-4 border-[#a26833] pl-5">
            <p className="font-black uppercase text-[#150805] leading-tight text-base">
              "GOAT Life received offers from all five Sharks."
            </p>
          </div>

          <div className="space-y-4 text-[#7a5240]/80 font-medium leading-relaxed text-sm">
            <p>
              GOAT Life entered the Tank with a clear belief — that breakfast
              shouldn't slow people down. The idea of spoon-free, high protein
              oats designed for busy mornings immediately resonated with the
              Sharks.
            </p>
          </div>

          {/* Deal card */}
          <div className="my-6 bg-[#2e1a0e] rounded-[1.4rem] px-6 py-5 flex items-center justify-between gap-4">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a26833] block mb-1">
                Deal Closed
              </span>
              <span className="font-black text-[#f2ebe0] text-3xl uppercase leading-none tracking-tight">
                ₹2 Crore
              </span>
            </div>
            <div className="flex flex-col gap-2 border-l border-[#f2ebe0]/10 pl-5">
              <div className="flex items-center justify-between gap-6">
                <span className="text-[#f2ebe0]/55 text-xs font-semibold">
                  Aman Gupta
                </span>
                <span className="text-[#a26833] font-black text-xs">
                  ₹1 Crore
                </span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-[#f2ebe0]/55 text-xs font-semibold">
                  Anupam Mittal
                </span>
                <span className="text-[#a26833] font-black text-xs">
                  ₹1 Crore
                </span>
              </div>
            </div>
          </div>

          {/* Sharks' favourites */}
          <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#a26833] mb-3">
            The Sharks' Favourite Flavours
          </p>
          <div className="flex flex-col mb-6">
            {sharks.map(({ name, flavour, initial }) => (
              <div
                key={name}
                className="flex items-center gap-3 py-2.5 border-b border-[#2e1a0e]/8"
              >
                <div className="w-7 h-7 rounded-full bg-[#2e1a0e] flex items-center justify-center flex-shrink-0">
                  <span className="text-[7px] font-black text-[#f2ebe0] uppercase">
                    {initial}
                  </span>
                </div>
                <span className="text-[#2e1a0e] font-bold text-sm flex-1">
                  {name}
                </span>
                <span className="text-[#a26833] text-xs font-black uppercase tracking-wide">
                  {flavour}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-[#7a5240]/80 font-medium leading-relaxed text-sm mb-6">
            <p>
              GOAT Life hasn't been built over decades, but every step over the
              last two years has been intentional. From product development to
              flavour innovation, from understanding busy lifestyles to
              simplifying nutrition, GOAT Life has focused on solving one
              everyday problem well: making a high protein breakfast easy and
              enjoyable. Making it to Shark Tank India validated that focus.
            </p>
            <p>
              To everyone who has supported GOAT Life — customers, partners, and
              well-wishers — thank you for being part of this story. And to
              those discovering us through Shark Tank India, welcome.
            </p>
          </div>

          {/* Closing badge */}
          <div className="bg-[#a26833] px-5 py-3 w-fit -rotate-1 mb-2">
            <span className="text-[#150805] font-black uppercase tracking-[-0.02em] text-sm whitespace-nowrap">
              High Protein Oats. Real Flavour. Built for Real Life.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card Section ────────────────────────────────────────────
export default function SharkTankSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(labelRef.current, { y: 16, opacity: 0 });
      gsap.set(cardRef.current, { y: 50, opacity: 0, scale: 0.97 });
      gsap.set(textRef.current, { y: 28, opacity: 0 });
      gsap.set(btnRef.current, { y: 16, opacity: 0 });

      const st = { trigger: sectionRef.current, start: "top 72%" };

      gsap.to(labelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: st,
      });
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: { ...st, start: "top 68%" },
      });
      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 60%" },
      });
      gsap.to(btnRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { ...st, start: "top 55%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-[#150805] overflow-hidden px-6 md:px-12 2xl:px-16 py-20 md:py-28"
      >
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
        <div className="pointer-events-none absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#a26833]/8 blur-[120px]" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-7">
          {/* Top label row */}
          <div ref={labelRef} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#a26833]" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#a26833]">
                Brand Story
              </span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f2ebe0]/25">
              Jan 9, 2026
            </span>
          </div>

          {/* Image card */}
          <div
            ref={cardRef}
            className="relative rounded-[1.8rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={sharkTankPhoto}
              alt="GOAT Life on Shark Tank India"
              className="w-full h-full object-cover"
            />

            {/* Gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#150805]/85 via-[#150805]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#150805]/30 via-transparent to-transparent" />

            {/* Top-right season badge */}
            <div className="absolute top-4 right-4 bg-[#f2ebe0]/10 backdrop-blur-md border border-[#f2ebe0]/15 rounded-full px-4 py-1.5">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#f2ebe0]/70">
                Season 5
              </span>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-10">
              {/* Deal stat row */}
              <div className="flex items-end justify-between mb-3">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-[0.35em] text-[#a26833] mb-1">
                    Deal Closed
                  </span>
                  <span
                    className="font-black text-[#f2ebe0] uppercase leading-none tracking-tight"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                  >
                    ₹2 Crore
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[#f2ebe0]/40 text-[10px] font-semibold">
                    Aman Gupta · Anupam Mittal
                  </span>
                  <span className="text-[#f2ebe0]/25 text-[9px] uppercase tracking-widest">
                    All 5 Sharks Offered
                  </span>
                </div>
              </div>

              {/* Bottom pills */}
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#a26833] text-[#150805] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Shark Tank India · S5
                </span>
                <span className="bg-[#f2ebe0]/10 backdrop-blur-sm text-[#f2ebe0]/70 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#f2ebe0]/10">
                  High Protein Oats
                </span>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div
            ref={textRef}
            className="flex flex-col gap-2.5 border-l-2 border-[#a26833]/40 pl-5"
          >
            <h3
              className="font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#f2ebe0]"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}
            >
              From a Dream
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(242,235,224,0.4)",
                  color: "transparent",
                }}
              >
                to the Tank.
              </span>
            </h3>
            <p className="text-[#f2ebe0]/45 font-medium text-sm leading-relaxed max-w-md">
              After applying for 4 seasons straight, GOAT Life walked into Shark
              Tank India Season 5 — and received offers from all five Sharks,
              closing a ₹2 crore deal with Aman Gupta and Anupam Mittal.
            </p>
          </div>

          {/* Read More */}
          <div ref={btnRef} className="flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="group relative overflow-hidden bg-[#f2ebe0] text-[#150805] rounded-full px-7 py-3 text-sm font-black uppercase tracking-widest hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/8 to-transparent" />
              <span className="relative flex items-center gap-2">
                Read More
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </button>
            <div className="flex gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="#a26833"
                >
                  <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ArticleModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
