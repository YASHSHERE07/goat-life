import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[#f2ebe0]/6 bg-[#2a120c]"
    >
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,235,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,224,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Amber glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: "60vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse, rgba(162,104,51,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12 md:py-28"
      >
        {/* Left */}
        <div className="flex max-w-xl flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#a26833]" />
            <span className="text-[9px] font-black uppercase tracking-[0.45em] text-[#f2ebe0]/30">
              GOAT Life®
            </span>
          </div>

          <h2
            className="font-black uppercase leading-none tracking-[-0.04em] text-[#f2ebe0]"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontFamily: "'Bebas Neue', 'Antonio', sans-serif",
            }}
          >
            Get Early Access
          </h2>

          <p className="max-w-xl text-sm font-medium leading-relaxed text-[#f2ebe0]/35">
            Be the first to know about new flavours, drops, and exclusive
            offers.
          </p>
        </div>

        {/* Middle */}
        <div className="flex w-full max-w-xl flex-col gap-6 lg:flex-1">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-full border border-[#f2ebe0]/12 bg-[#f2ebe0]/6 px-5 py-3.5 text-sm font-medium text-[#f2ebe0]/80 outline-none transition-all duration-200 placeholder:text-[#f2ebe0]/25 focus:border-[#a26833]/50 focus:bg-[#f2ebe0]/9"
              />
              <button
                type="submit"
                className="group relative overflow-hidden whitespace-nowrap rounded-full bg-[#f2ebe0] px-7 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#150805] transition-transform duration-200 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Join Now →</span>
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 rounded-full border border-[#a26833]/30 bg-[#a26833]/15 px-6 py-3 w-fit">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8l4 4 8-8"
                  stroke="#a26833"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#a26833]">
                You're on the list!
              </span>
            </div>
          )}

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f2ebe0]/8 to-transparent" />
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-end lg:text-right">
          <a
            href="https://www.instagram.com/goatlife.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#f2ebe0]/40 transition-colors duration-300 hover:text-[#f2ebe0]/80"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-colors duration-300"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                ry="6"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
            </svg>

            <span className="text-[11px] font-black uppercase tracking-[0.3em]">
              @goatlife.co
            </span>

            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f2ebe0]/15">
            © 2024 GOAT Life · High Protein Oats · India
          </p>
        </div>
      </div>
    </footer>
  );
}
