import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg2 from "../assets/video/bg-review.mp4";
import vid1 from "../assets/video/vid1.mp4";
import vid2 from "../assets/video/vid2.mp4";
import vid3 from "../assets/video/vid3.mp4";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const videos = [
  {
    id: 1,
    title: "Daily Ritual",
    src: vid1,
    label: "Morning Blend",
  },
  {
    id: 2,
    title: "Creamy Energy",
    src: vid2,
    label: "Power Up",
  },
  {
    id: 3,
    title: "Smooth Matcha",
    src: vid3,
    label: "Public Cam",
  },
];

export default function InsiderSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textBlockRef = useRef(null);
  const ctaRef = useRef(null);
  const bgVideoRef = useRef(null);

  const cardRefs = useRef([]);
  const mediaRefs = useRef([]);
  const videoRefs = useRef([]);

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };
  const addMediaRef = (el) => {
    if (el && !mediaRefs.current.includes(el)) mediaRefs.current.push(el);
  };
  const addVideoRef = (el) => {
    if (el && !videoRefs.current.includes(el)) videoRefs.current.push(el);
  };

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const medias = mediaRefs.current;
      const vids = videoRefs.current;

      gsap.set(headingRef.current, { y: 100, opacity: 0 });
      gsap.set(textBlockRef.current?.children || [], { y: 60, opacity: 0 });
      gsap.set(ctaRef.current, { y: 40, opacity: 0 });
      gsap.set(cards, { y: 180, opacity: 0, scale: 0.88 });
      gsap.set(cards[0], { rotate: -8, x: -40 });
      gsap.set(cards[1], { rotate: 3, x: 0 });
      gsap.set(cards[2], { rotate: 8, x: 40 });
      gsap.set(medias, { scale: 1.08 });

      // Bg video parallax
      gsap.to(bgVideoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        0.1,
      )
        .to(
          textBlockRef.current?.children || [],
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          0.2,
        )
        .to(
          ctaRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          0.35,
        )
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
          },
          0.15,
        )
        .to(
          medias,
          { scale: 1, stagger: 0.08, duration: 1, ease: "power2.out" },
          0.25,
        )
        .to(
          cards,
          {
            y: (i) => [0, -12, 8][i],
            rotate: (i) => [-7, 2, 7][i],
            duration: 1,
            ease: "none",
          },
          1.2,
        )
        .to(
          headingRef.current,
          { y: -100, opacity: 0, duration: 0.7, ease: "power2.inOut" },
          2.2,
        )
        .to(
          textBlockRef.current?.children || [],
          {
            y: -60,
            opacity: 0,
            stagger: 0.06,
            duration: 0.55,
            ease: "power2.inOut",
          },
          2.18,
        )
        .to(
          ctaRef.current,
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          2.22,
        )
        .to(
          cards,
          {
            y: -220,
            opacity: 0,
            scale: 0.86,
            stagger: 0.08,
            duration: 0.9,
            ease: "power2.inOut",
          },
          2.3,
        )
        .to(
          medias,
          { scale: 1.12, stagger: 0.05, duration: 0.8, ease: "power2.inOut" },
          2.25,
        );

      const cleanups = cards.map((card, i) => {
        const media = medias[i];
        const video = vids[i];

        const enter = () => {
          gsap.to(card, {
            y: -16,
            scale: 1.04,
            rotate: [-10, 0, 10][i],
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(media, { scale: 1.09, duration: 0.45, ease: "power2.out" });
          video?.play().catch(() => {});
        };
        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotate: [-8, 3, 8][i],
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(media, { scale: 1, duration: 0.45, ease: "power2.out" });
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative min-h-[220vh]">
      <div className="sticky top-0 min-h-screen overflow-hidden flex items-center">
        {/* ══ BG VIDEO ══ */}
        <div className="absolute inset-0 z-0">
          <video
            ref={bgVideoRef}
            src={bg2}
            className="absolute w-full h-[120%] -top-[10%] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Warm cream wash */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Left column darkener for text legibility */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur" />
          {/* Edge fades */}
        </div>

        {/* ══ GRAIN ══ */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }}
        />

        {/* ══ GRID ══ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: COPY ── */}
          <div className="flex flex-col">
            {/* Rule + eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <div className="w-10 h-[3px] bg-[#a26833] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#7f3b2d]">
                Insider Stories
              </span>
            </div>

            {/* Heading — mix of filled, outlined, and highlighted words */}
            <h2
              ref={headingRef}
              className="font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#3a1a0a]"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              {/* Line 1 — solid */}
              <span className="block text-white">You</span>

              {/* Line 2 — outline stroke */}
              <span
                className="block"
                style={{
                  WebkitTextStroke: "2px #ffffff",
                  color: "transparent",
                }}
              >
                Deserve
              </span>

              {/* Line 3 — amber highlight slab */}
              <span className="block relative w-fit">
                <span className="relative z-10 text-[#faeade] px-3 py-1">
                  The Best.
                </span>
                <span className="absolute inset-0 bg-[#a26833] -skew-x-3 rounded-sm" />
              </span>
            </h2>

            {/* Body */}
            <div ref={textBlockRef} className="mt-9 space-y-3 max-w-sm">
              <p className="text-white text-[17px] font-semibold leading-snug">
                Healthy, science-backed nutrition — simple, satisfying, and
                designed to fit your life effortlessly.
              </p>
              <p className="text-white text-sm leading-relaxed">
                Loved by thousands of real people. Every sip is a ritual you'll
                actually look forward to.
              </p>
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary button with shine sweep */}
              <button className="group relative overflow-hidden bg-[#3a1a0a] text-[#faeade] rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-widest transition-transform duration-300 hover:scale-[1.04]">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">Shop Now →</span>
              </button>

              {/* Social proof chip */}
              <div className="flex items-center gap-2 bg-[#faeade]/70 backdrop-blur-sm border border-[#a26833]/25 rounded-full px-4 py-2">
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="11"
                      height="11"
                      viewBox="0 0 16 16"
                      fill="#a26833"
                    >
                      <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-[#523122]">
                  4.8 · 3,158 reviews
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: VIDEO CARDS ── */}
          <div className="relative flex items-center justify-center min-h-[520px]">
            {/* Dashed decorative ring behind cards */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a26833]/20 pointer-events-none"
              style={{ width: "460px", height: "460px" }}
            />

            <div className="relative h-[520px] w-full max-w-[500px]">
              {videos.map((item, index) => (
                <article
                  key={item.id}
                  ref={addCardRef}
                  className={`
                    absolute overflow-hidden cursor-pointer rounded-[22px]
                    ${
                      index === 0
                        ? "-left-15 top-8 h-[440px] w-[250px]"
                        : index === 1
                          ? "left-1/2 -translate-x-1/2 top-0 z-10 h-[490px] w-[290px]"
                          : "-right-15 top-14 h-[440px] w-[250px]"
                    }
                  `}
                >
                  <div
                    ref={addMediaRef}
                    className="relative h-full w-full overflow-hidden"
                  >
                    <video
                      ref={addVideoRef}
                      src={item.src}
                      className="h-full w-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    {/* Warm dark scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a0a]/80 via-[#3a1a0a]/5 to-transparent" />

                    {/* Top pill */}
                    <div className="absolute top-5 left-5">
                      <span className="bg-[#faeade]/90 backdrop-blur-sm text-[#523122] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {item.label}
                      </span>
                    </div>

                    {/* Faded number watermark */}
                    <span
                      className="absolute -right-1 top-1 text-[#faeade]/[0.07] font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: "6rem" }}
                    >
                      {item.id}
                    </span>

                    {/* Bottom glass strip */}
                    <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5">
                      <p className="text-[#faeade] text-sm font-bold tracking-tight">
                        {item.title}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#e3a458] inline-block" />
                        <p className="text-[#faeade]/60 text-[9px] uppercase tracking-wider font-semibold">
                          Hover to preview
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
