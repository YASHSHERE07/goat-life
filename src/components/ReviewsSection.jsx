import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Fitness Coach",
    text: "This product honestly became part of my daily routine. Smooth taste, great energy, and super easy to fit into my mornings.",
  },
  {
    id: 2,
    name: "Sofia Khan",
    role: "Content Creator",
    text: "I love how premium this feels. The texture, the flavor, and the packaging all feel top tier. Definitely something I'd buy again.",
  },
  {
    id: 3,
    name: "Rohan Patel",
    role: "Designer",
    text: "Usually healthy drinks taste boring, but this one is actually enjoyable. It feels like a treat without ruining my routine.",
  },
  {
    id: 4,
    name: "Emily Dsouza",
    role: "Student",
    text: "I was surprised by how creamy and satisfying it was. It keeps me full longer and helps me avoid random snacking.",
  },
  {
    id: 5,
    name: "Kabir Shah",
    role: "Entrepreneur",
    text: "Very clean flavor, no weird aftertaste, and the experience feels premium. It genuinely stands out from other options I've tried.",
  },
  {
    id: 6,
    name: "Nina Verma",
    role: "Yoga Instructor",
    text: "This has become my favorite post-workout drink. Light, refreshing, and gives me that little boost without feeling heavy.",
  },
  {
    id: 7,
    name: "Daniel Roy",
    role: "Marketing Lead",
    text: "The biggest win for me is consistency. I actually look forward to having it every day, which says a lot for any wellness product.",
  },
];

// Warm amber stars
function StarRow() {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#a26833">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

// Initials avatar
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full
        w-11 h-11 bg-[#523122] text-[#faeade] text-sm font-bold tracking-wide"
    >
      {initials}
    </div>
  );
}

export default function ReviewsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const decorRef = useRef(null);

  const cardRefs = useRef([]);
  const contentRefs = useRef([]);
  const floatRefs = useRef([]);
  const floatTweensRef = useRef([]);

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };
  const addContentRef = (el) => {
    if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el);
  };
  const addFloatRef = (el) => {
    if (el && !floatRefs.current.includes(el)) floatRefs.current.push(el);
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const cards = cardRefs.current;
      const contents = contentRefs.current;
      const floatLayers = floatRefs.current;

      gsap.set(headingRef.current, { y: 120, opacity: 0, scale: 0.9 });
      gsap.set(subRef.current, { y: 60, opacity: 0 });
      gsap.set(decorRef.current, { opacity: 0, x: 30 });
      gsap.set(cards, {
        y: 120,
        opacity: 0,
        scale: 0.82,
        rotate: (i) => [-10, -6, -2, 0, 2, 6, 10][i],
      });
      gsap.set(contents, { y: 24, opacity: 0.85 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 35%",
          scrub: 1,
        },
      });

      introTl
        .to(headingRef.current, { y: 0, opacity: 1, scale: 1, ease: "none" }, 0)
        .to(subRef.current, { y: 0, opacity: 1, ease: "none" }, 0.1)
        .to(decorRef.current, { opacity: 1, x: 0, ease: "none" }, 0)
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: (i) => [-6, -3, -1, 0, 1, 3, 6][i],
            stagger: 0.08,
            ease: "none",
          },
          0.05,
        )
        .to(contents, { y: 0, opacity: 1, stagger: 0.05, ease: "none" }, 0.12);

      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - section.offsetWidth);

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() + 1000}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -28 : 28,
          rotate: i % 2 === 0 ? "-=2" : "+=2",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount() + 1000}`,
            scrub: 1.4,
          },
        });
      });

      floatTweensRef.current = floatLayers.map((layer, i) =>
        gsap.to(layer, {
          y: i % 2 === 0 ? -10 : 10,
          rotate: i % 2 === 0 ? -1.5 : 1.5,
          duration: 2 + i * 0.15,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        }),
      );

      const cleanups = cards.map((card, i) => {
        const content = contents[i];
        const floatTween = floatTweensRef.current[i];

        const enter = () => {
          floatTween?.pause();
          gsap.to(card, {
            scale: 1.05,
            y: -18,
            rotate: i % 2 === 0 ? -4 : 4,
            duration: 0.35,
            ease: "power3.out",
          });
          gsap.to(content, { y: -5, duration: 0.35, ease: "power3.out" });
        };

        const leave = () => {
          floatTween?.resume();
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotate: [-6, -3, -1, 0, 1, 3, 6][i],
            duration: 0.35,
            ease: "power3.out",
          });
          gsap.to(content, { y: 0, duration: 0.35, ease: "power3.out" });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });

      return () => {
        horizontalTween.kill();
        floatTweensRef.current.forEach((t) => t?.kill());
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#faeade] text-[#523122]"
    >
      {/* ── Diagonal watermark ── */}
      <div
        className="
          pointer-events-none absolute inset-0 flex items-center justify-center
          overflow-hidden select-none
        "
      >
        <span
          className="
            text-[#523122]/[0.04] font-black uppercase
            text-[22vw] tracking-[.35em] whitespace-nowrap
            rotate-[-14deg]
          "
        >
          Reviews
        </span>
      </div>

      {/* ── Subtle paper grain overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Main layout ── */}
      <div className="relative z-10 flex h-full flex-col justify-center">
        {/* Header */}
        <div className="mx-auto mb-10 w-full max-w-7xl px-8 flex items-end justify-between">
          <div>
            {/* Label pill */}
            <p
              ref={subRef}
              className="
                mb-4 inline-flex items-center gap-2
                bg-[#a26833] text-[#faeade]
                text-[10px] font-bold uppercase tracking-[0.3em]
                px-4 py-[6px] rounded-full
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#faeade] inline-block" />
              What people say
            </p>

            <h2
              ref={headingRef}
              className="
                font-black uppercase leading-[0.92]
                text-[#523122]
                text-5xl md:text-7xl
                tracking-tighter
              "
            >
              Real people.
              <br />
              <em className="not-italic text-[#a26833]">Real love.</em>
            </h2>
          </div>

          {/* Right decoration — count */}
          <div
            ref={decorRef}
            className="
              hidden md:flex flex-col items-end gap-1
              text-right
            "
          >
            <span className="text-[#523122]/30 text-[10px] uppercase tracking-widest font-bold">
              Reviews
            </span>
            <span className="text-[#523122] text-6xl font-black leading-none tracking-normal">
              4.2/5{" "}
            </span>
            <div className="flex gap-[2px] mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="26"
                  height="26"
                  viewBox="0 0 16 16"
                  fill="#a26833"
                >
                  <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex w-max gap-5 px-8 will-change-transform"
        >
          {reviews.map((review, index) => (
            <article
              key={review.id}
              ref={addCardRef}
              className={`
                relative flex-shrink-0 cursor-pointer
                w-[300px] h-[370px]
                ${index % 3 === 0 ? "mt-0" : index % 3 === 1 ? "mt-10" : "mt-20"}
              `}
              style={{
                filter: "drop-shadow(0 12px 40px rgba(82,49,34,0.14))",
              }}
            >
              {/* Card body */}
              <div
                ref={addFloatRef}
                className="
                  relative w-full h-full
                  bg-[#fffaf4]
                  rounded-[1.4rem]
                  border border-[#523122]/10
                  p-6
                  flex flex-col justify-between
                  overflow-hidden
                "
              >
                {/* Corner accent — top right folded look */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(225deg, #e3d3bc 50%, transparent 50%)",
                    borderRadius: "0 1.4rem 0 0",
                  }}
                />

                {/* Subtle inner warm tint */}
                <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-[#a26833]/5 via-transparent to-transparent pointer-events-none" />

                {/* Large quote mark watermark */}
                <span
                  className="
                    absolute -top-3 left-4
                    text-[#523122]/8 font-black
                    text-[9rem] leading-none select-none pointer-events-none
                  "
                >
                  "
                </span>

                <div
                  ref={addContentRef}
                  className="relative z-10 flex flex-col gap-4"
                >
                  <StarRow />

                  <p
                    className="
                      text-[#523122]/85
                      text-[15px] leading-[1.65]
                      font-medium
                    "
                  >
                    "{review.text}"
                  </p>
                </div>

                {/* Divider */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="w-full h-px bg-[#523122]/10" />

                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <Avatar name={review.name} />
                    <div>
                      <h3 className="text-sm font-bold text-[#523122] leading-none mb-[3px]">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-[#a26833] font-semibold uppercase tracking-wider">
                        {review.role}
                      </p>
                    </div>

                    {/* Verified stamp */}
                    <div className="ml-auto flex-shrink-0">
                      <div
                        className="
                          w-9 h-9 rounded-full
                          border-2 border-[#a26833]/40
                          flex items-center justify-center
                          rotate-[-12deg]
                        "
                      >
                        <span className="text-[#a26833]/60 text-[8px] font-black uppercase leading-none text-center">
                          ✓
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
