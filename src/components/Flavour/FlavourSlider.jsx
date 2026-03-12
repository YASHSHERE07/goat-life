import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Hardcoded flavour data — edit names / colours / rotations here
const flavourList = [
  { name: "triramisu", color: "tri", rotation: "rotate-[-2deg]" },
  { name: "mango", color: "mango", rotation: "rotate-[2deg]" },
  { name: "strawberry", color: "strawberry", rotation: "rotate-[-1deg]" },
  { name: "kulfi", color: "kulfi", rotation: "rotate-[3deg]" },
  { name: "cookie", color: "cookie", rotation: "rotate-[-2deg]" },
  { name: "choclate", color: "choclate", rotation: "rotate-[1deg]" },
];

const FlavourSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavour-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavour-section", {
        x: `-${scrollAmount + 1000}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavour-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <div
      ref={sliderRef}
      className="lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0 bg-[#faeade]"
    >
      {/* Flavour cards row */}
      <div
        className="
          h-full w-full
          flex md:flex-row flex-col
          items-center
          2xl:gap-10 lg:gap-8 md:gap-6 gap-6
          flex-nowrap
          px-8
        "
      >
        {flavourList.map((flavour, i) => (
          <div
            key={flavour.name}
            style={{ transitionDelay: `${i * 40}ms` }}
            className={`
              group
              relative z-30 flex-none overflow-hidden
              lg:w-[32vw] md:w-[80vw] w-[82vw]
              lg:h-[80vh] md:h-[60vh] h-[72vw]
              rounded-[2.5rem]
              cursor-pointer
              transition-transform duration-500 ease-out
              hover:-translate-y-3 hover:scale-[1.02]
              ${flavour.rotation}
            `}
          >
            {/* ── Background image ── */}
            <img
              src={`/product-img/${flavour.color}-bg.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ── Dark vignette gradient ── */}
            <div className="absolute inset-0 z-10 rounded-[2.5rem] bg-gradient-to-b from-black/50 via-transparent to-black/80" />

            {/* ── Gloss sheen top-left highlight ── */}
            <div className="absolute inset-0 z-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* ── Thin border glow ── */}
            <div className="absolute inset-0 z-10 rounded-[2.5rem] ring-1 ring-white/15 pointer-events-none" />

            {/* ── Decorative floats behind bottle ── */}
            <img
              src={`/product-img/${flavour.color}-float.png`}
              alt=""
              className="
                absolute z-20 top-0 w-full
                transition-transform duration-700 ease-out
                group-hover:-translate-y-2 group-hover:scale-105
              "
            />

            {/* ── Drink bottle ── */}
            <img
              src={`/product-img/${flavour.color}.png`}
              alt={flavour.name}
              className="
                absolute z-30 left-1/2 -translate-x-1/2 bottom-0
                h-[85%]
                drop-shadow-2xl
                transition-transform duration-700 ease-out
                group-hover:-translate-y-3 group-hover:scale-[1.04] group-hover:-translate-x-1/2
              "
            />

            {/* ── Card index badge ── */}
            <span className="absolute z-40 top-6 left-6 text-[#faeade]/50 text-xs font-bold uppercase tracking-[.25em]">
              0{i + 1}
            </span>

            {/* ── NEW badge on first two cards ── */}
            {i < 2 && (
              <span
                className="
                  absolute z-40 top-6 right-6
                  bg-[#faeade]/15 backdrop-blur-sm
                  text-[#faeade] text-[10px] font-bold uppercase tracking-widest
                  px-3 py-1 rounded-full border border-[#faeade]/20
                "
              >
                New
              </span>
            )}

            {/* ── Bottom text block ── */}
            <div className="absolute z-40 bottom-0 left-0 right-0 p-6 md:p-8">
              <h1
                className=" bg-neutral-900/50 p-4 rounded-4xl text-center backdrop-blur-sm
                  text-[#faeade]
                  text-4xl md:text-5xl lg:text-[3.2vw]
                  font-bold uppercase tracking-tight leading-none
                  mb-2
                "
              >
                {flavour.name}
              </h1>

              {/* Animated underline on hover */}
              <div className="w-8 h-[2px] bg-[#faeade]/40 mb-3 transition-all duration-500 group-hover:w-16 group-hover:bg-[#faeade]/70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;
