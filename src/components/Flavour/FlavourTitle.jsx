import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavourTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavour-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="relative flex flex-col justify-center h-full px-8 md:px-12 2xl:px-16 py-10 gap-0">
      {/* ══ TOP ROW: eyebrow + small descriptor ══ */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        {/* Left pill */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a26833] inline-block" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7f3b2d]">
            Our Collection
          </span>
        </div>
        {/* Right counter */}
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#523122]/40">
          06 Varieties
        </span>
      </div>

      {/* ══ LINE 1 — "We have" small, italic serif feel ══ */}
      <div className="overflow-hidden first-text-split mb-1">
        <h1
          className="font-black uppercase leading-none tracking-[-0.04em] text-[#523122]/30"
          style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
        >
          We have
        </h1>
      </div>

      {/* ══ LINE 2 — BIG number "6" with badge overlay ══ */}
      <div className="relative flex items-center gap-4 md:gap-6 mb-2">
        {/* Giant 6 */}
        <span
          className="font-black uppercase leading-none text-[#523122] select-none"
          style={{ fontSize: "clamp(7rem, 18vw, 20rem)", lineHeight: 0.85 }}
        >
          6
        </span>

        {/* Badge stacked vertically beside the 6 */}
        <div className="flex flex-col gap-2 md:gap-3 pb-2">
          {/* Freaking Delicious badge */}
          <div
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            className="flavour-text-scroll rotate-[-2deg]"
          >
            <div className="bg-[#a26833] px-3 py-1 md:px-5 md:py-2">
              <h2
                className="text-[#faeade] whitespace-nowrap font-black uppercase tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 4.5rem)" }}
              >
                Freaking Delicious
              </h2>
            </div>
          </div>

          {/* Sub text */}
          <p
            className="text-[#523122]/55 font-medium leading-snug max-w-[28ch]"
            style={{ fontSize: "clamp(0.7rem, 1.2vw, 1rem)" }}
          >
            Handcrafted in small batches using the finest ingredients. Each sip
            is a moment worth savoring.
          </p>
        </div>
      </div>

      {/* ══ LINE 3 — FLAVOURS large ══ */}
      <div className="overflow-hidden second-text-split">
        <h1
          className="font-black uppercase leading-none tracking-[-0.05em] text-[#523122]"
          style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
        >
          Flavours
        </h1>
      </div>

      {/* ══ BOTTOM — marquee tag strip ══ */}
      <div className="mt-6 md:mt-8 overflow-hidden">
        <div className="flex gap-3 flex-wrap">
          {[
            "Triramisu",
            "Mango",
            "Strawberry",
            "Kulfi",
            "Cookie",
            "Chocolate",
          ].map((tag) => (
            <span
              key={tag}
              className="
                border border-[#523122]/25 rounded-full
                px-3 py-1
                text-[9px] font-bold uppercase tracking-widest
                text-[#523122]/60
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlavourTitle;
