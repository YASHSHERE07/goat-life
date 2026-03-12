import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./Banner";
import breakfast from "../assets/images/breakfastcard.png";
import WaveLines, { DASHLEN } from "./Waveline";
import packet from "../assets/images/packets.png";
// inside Card() alongside const container = useRef(null)

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Card1 = () => (
  <div className="col-span-1 sm:col-span-7 relative min-h-48 sm:min-h-56 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-gradient-to-br from-[#ffb347] via-[#ff8f00] to-[#e46f00] p-6 sm:p-8 shadow-[0_30px_80px_rgba(255,143,0,0.28)] flex flex-col justify-between">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.12),transparent_40%)]" />
    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] [background-size:22px_22px]" />

    <p className="relative z-10 text-[10px] tracking-[0.22em] uppercase text-black font-bold font-sans">
      01 — Speed
    </p>

    <div className="relative z-10 mt-4">
      <h2
        className="text-4xl sm:text-6xl font-black uppercase tracking-wide text-black leading-none mb-2 sm:mb-3"
        style={{ fontFamily: "'Bebas Neue',sans-serif" }}
      >
        READY UNDER
        <br />
        30 SECONDS
      </h2>
      <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-black/75 font-sans font-semibold">
        Mix. Shake. Sip. Your entire breakfast, done before the elevator
        arrives.
      </p>
    </div>

    <span
      className="pointer-events-none absolute -bottom-3 -right-2 text-8xl sm:text-9xl font-black text-black/10 select-none leading-none"
      style={{ fontFamily: "'Bebas Neue',sans-serif" }}
    >
      30s
    </span>
  </div>
);

const Card2 = () => (
  <div className="col-span-1 sm:col-span-5 relative min-h-48 sm:min-h-56 overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-500/30 bg-gradient-to-br from-[#111111] via-[#181818] to-[#2a1b12] p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] flex flex-col justify-between">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,143,0,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
    <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_14px)]" />

    <p className="relative z-10 text-[10px] tracking-[0.22em] uppercase text-orange-400 font-bold font-sans">
      02 — Nutrition
    </p>

    <div className="relative z-10 mt-4">
      <h2
        className="text-4xl sm:text-6xl font-black uppercase tracking-wide text-white leading-none mb-2 sm:mb-3"
        style={{ fontFamily: "'Bebas Neue',sans-serif" }}
      >
        HIGH IN
        <br />
        PROTEIN
      </h2>
      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
        Pure whey protein — the fuel your body actually needs, not just empty
        calories.
      </p>
    </div>

    <span
      className="pointer-events-none absolute -bottom-3 -right-2 text-8xl sm:text-9xl font-black text-orange-400/10 select-none leading-none"
      style={{ fontFamily: "'Bebas Neue',sans-serif" }}
    >
      PRO
    </span>
  </div>
);

const Card3 = () => (
  <div className="col-span-1 sm:col-span-5 relative min-h-48 sm:min-h-56 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-gradient-to-br from-[#fff6e8] via-[#f5ecd9] to-[#ead8b7] p-6 sm:p-8 shadow-[0_30px_80px_rgba(90,60,20,0.12)] flex flex-col justify-between">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.06),transparent_38%)]" />
    <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(135deg,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

    <p className="relative z-10 text-[10px] tracking-[0.22em] uppercase text-zinc-500 font-bold font-sans">
      03 — Clean
    </p>

    <div className="relative z-10 mt-4">
      <h2
        className="text-4xl sm:text-6xl font-black uppercase tracking-wide text-zinc-900 leading-none mb-2 sm:mb-3"
        style={{ fontFamily: "'Bebas Neue',sans-serif" }}
      >
        NO REFINED
        <br />
        SUGAR
      </h2>
      <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
        Date powder, jaggery & stevia — the kind of sweet your body thanks you
        for.
      </p>
    </div>

    <span
      className="pointer-events-none absolute -bottom-3 -left-2 text-8xl sm:text-9xl font-black text-zinc-900/5 select-none leading-none"
      style={{ fontFamily: "'Bebas Neue',sans-serif" }}
    >
      0g
    </span>
  </div>
);

const Card4 = () => (
  <div className="col-span-1 sm:col-span-7 relative min-h-48 sm:min-h-56 overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-500/35 bg-gradient-to-br from-[#090909] via-[#121212] to-[#25160d] p-6 sm:p-8 shadow-[0_30px_90px_rgba(255,143,0,0.18)] flex flex-col justify-between">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,143,0,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_32%)]" />
    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,143,0,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(255,143,0,0.22)_1px,transparent_1px)] [background-size:26px_26px]" />

    <p className="relative z-10 text-[10px] tracking-[0.22em] uppercase text-orange-400 font-bold font-sans">
      04 — Satiety
    </p>

    <div className="relative z-10 mt-4">
      <h2
        className="text-4xl sm:text-6xl font-black uppercase tracking-wide text-white leading-none mb-2 sm:mb-3"
        style={{ fontFamily: "'Bebas Neue',sans-serif" }}
      >
        HIGH IN
        <br />
        FIBER
      </h2>
      <p className="max-w-sm text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
        Oats, chia seeds & flax seeds — keeps you full, focused, and far from
        the 10am hunger crash.
      </p>
    </div>

    <span
      className="pointer-events-none absolute -bottom-3 -right-2 text-8xl sm:text-9xl font-black text-orange-400/10 select-none leading-none"
      style={{ fontFamily: "'Bebas Neue',sans-serif" }}
    >
      FIB
    </span>
  </div>
);

const SpeedometerIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 16C30 16.34 30 16.67 30 17C29.7667 20.3709 28.3222 23.5436 25.9329 25.9329C23.5436 28.3222 20.3709 29.7667 17 30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30C11.6291 29.7667 8.45636 28.3222 6.0671 25.9329C3.67783 23.5436 2.23329 20.3709 2 17C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15C2.23329 11.6291 3.67783 8.45636 6.0671 6.0671C8.45636 3.67783 11.6291 2.23329 15 2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2C20.3709 2.23329 23.5436 3.67783 25.9329 6.0671C28.3222 8.45636 29.7667 11.6291 30 15C30 15.33 30 15.66 30 16Z"
      fill="#FF8F00"
    />
    <path
      d="M17 28V30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30V28C15 27.7348 15.1054 27.4804 15.2929 27.2929C15.4804 27.1054 15.7348 27 16 27C16.2652 27 16.5196 27.1054 16.7071 27.2929C16.8946 27.4804 17 27.7348 17 28Z"
      fill="#0D47A1"
    />
    <path
      d="M30 16C30 16.34 30 16.67 30 17H28C27.7348 17 27.4804 16.8946 27.2929 16.7071C27.1054 16.5196 27 16.2652 27 16C27 15.7348 27.1054 15.4804 27.2929 15.2929C27.4804 15.1054 27.7348 15 28 15H30C30 15.33 30 15.66 30 16Z"
      fill="#0D47A1"
    />
    <path
      d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
      fill="#304046"
    />
    <path
      d="M17 2V4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5C15.7348 5 15.4804 4.89464 15.2929 4.70711C15.1054 4.51957 15 4.26522 15 4V2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2Z"
      fill="#0D47A1"
    />
    <path
      d="M16 17.0001C15.8088 17.0001 15.6217 16.9453 15.4607 16.8422C15.2997 16.7391 15.1716 16.592 15.0917 16.4184C15.0117 16.2448 14.9831 16.0519 15.0094 15.8625C15.0357 15.6732 15.1157 15.4953 15.24 15.3501L21.24 8.35005C21.3254 8.25025 21.4295 8.16823 21.5466 8.10869C21.6636 8.04915 21.7913 8.01324 21.9222 8.00303C22.0531 7.99282 22.1848 8.00849 22.3097 8.04916C22.4346 8.08983 22.5502 8.15469 22.65 8.24005C22.7498 8.32541 22.8318 8.42959 22.8914 8.54665C22.9509 8.6637 22.9868 8.79134 22.997 8.92227C23.0072 9.0532 22.9916 9.18486 22.9509 9.30973C22.9102 9.43461 22.8454 9.55025 22.76 9.65005L16.76 16.6501C16.6661 16.7598 16.5496 16.8479 16.4184 16.9084C16.2872 16.9688 16.1444 17.0001 16 17.0001Z"
      fill="#0D47A1"
    />
    <path
      d="M16 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17Z"
      fill="#0D47A1"
    />
    <path
      d="M15 2C11.6291 2.23329 8.45636 3.67783 6.0671 6.0671C3.67783 8.45636 2.23329 11.6291 2 15C2 15.33 2 15.66 2 16C2 16.34 2 16.67 2 17C2.23329 20.3709 3.67783 23.5436 6.0671 25.9329C8.45636 28.3222 11.6291 29.7667 15 30C15.33 30 15.66 30 16 30V2C15.66 2 15.33 2 15 2Z"
      fill="#FFB300"
    />
    <path
      d="M15 28V30C15.33 30 15.66 30 16 30V27C15.7348 27 15.4804 27.1054 15.2929 27.2929C15.1054 27.4804 15 27.7348 15 28Z"
      fill="#1565C0"
    />
    <path
      d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
      fill="#1565C0"
    />
    <path
      d="M15 2V4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5V2C15.66 2 15.33 2 15 2Z"
      fill="#1565C0"
    />
    <path
      d="M15.24 15.35C15.1157 15.4952 15.0357 15.6731 15.0094 15.8624C14.9831 16.0518 15.0117 16.2447 15.0917 16.4183C15.1716 16.592 15.2997 16.739 15.4607 16.8421C15.6217 16.9452 15.8088 17 16 17V14.46L15.24 15.35Z"
      fill="#1565C0"
    />
    <path
      d="M11 15C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H16V15H11Z"
      fill="#1565C0"
    />
  </svg>
);

const ChargingIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <circle fill="#FC6F58" cx="256" cy="256" r="256" />
    <path
      fill="#F1543F"
      d="M504.122,319.233L327.111,142.222L246.232,256l-82.797,135.113l119.48,119.48 C390.409,499.36,478.11,421.61,504.122,319.233z"
    />
    <path
      fill="#FFFFFF"
      d="M331.493,398.222H180.507c-13.29,0-24.062-10.773-24.062-24.062V194.729 c0-13.29,10.773-24.062,24.062-24.062h150.987c13.29,0,24.062,10.773,24.062,24.062V374.16 C355.556,387.45,344.781,398.222,331.493,398.222z"
    />
    <path
      fill="#D0D1D3"
      d="M331.493,170.667h-76.067v227.556h76.067c13.29,0,24.062-10.773,24.062-24.062V194.729 C355.556,181.439,344.781,170.667,331.493,170.667z"
    />
    <rect
      x="156.444"
      y="227.556"
      fill="#FFD15D"
      width="199.111"
      height="113.778"
    />
    <rect
      x="255.431"
      y="227.556"
      fill="#F9B54C"
      width="100.124"
      height="113.778"
    />
    <rect
      x="184.889"
      y="142.222"
      fill="#324A5E"
      width="142.222"
      height="28.444"
    />
    <rect
      x="255.431"
      y="142.222"
      fill="#2B3B4E"
      width="71.685"
      height="28.444"
    />
    <path
      fill="#324A5E"
      d="M237.037,329.266c-1.765,0-3.529-0.674-4.877-2.019c-2.693-2.694-2.693-7.059,0-9.752l26.155-26.155 h-21.278c-2.789,0-5.303-1.681-6.37-4.256c-1.067-2.576-0.478-5.542,1.495-7.514l37.926-37.926c2.694-2.693,7.059-2.693,9.752,0 c2.693,2.694,2.693,7.059,0,9.752l-26.157,26.153h21.28c2.789,0,5.303,1.681,6.37,4.256c1.067,2.576,0.478,5.542-1.495,7.514 l-37.926,37.926C240.566,328.592,238.802,329.266,237.037,329.266z"
    />
    <path
      fill="#2B3B4E"
      d="M279.838,251.394c2.693-2.694,2.693-7.059,0-9.752c-2.694-2.693-7.059-2.693-9.752,0l-14.66,14.66 v19.504L279.838,251.394z"
    />
    <path
      fill="#324A5E"
      d="M232.16,317.493c-2.693,2.694-2.693,7.059,0,9.752c1.346,1.346,3.112,2.019,4.877,2.019 c1.765,0,3.529-0.674,4.877-2.019l13.512-13.512v-19.504"
    />
    <path
      fill="#2B3B4E"
      d="M274.963,277.549h-19.537v13.791h2.889l-2.889,2.889v19.504l24.414-24.414 c1.972-1.972,2.562-4.939,1.495-7.514C280.267,279.23,277.751,277.549,274.963,277.549z"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <circle fill="#FFD15D" cx="256" cy="256" r="256" />
    <path
      fill="#F9B54C"
      d="M512,256c0-0.945-0.026-1.884-0.036-2.826L398.222,139.431l-155.8,152.207L138.845,405.516l106.236,106.236c3.622,0.152,7.259,0.248,10.918,0.248C397.384,512,512,397.384,512,256z"
    />
    <rect x="199.111" y="139.431" fill="#FFFFFF" width="199.111" height="256" />
    <polygon
      fill="#D0D1D3"
      points="398.222,139.431 302.545,139.431 301.971,139.431 300.248,139.431 300.248,395.431 398.222,395.431"
    />
    <rect
      x="227.556"
      y="193.733"
      fill="#B8C9D9"
      width="142.222"
      height="5.172"
    />
    <polyline
      fill="#B8C9D9"
      points="227.556,193.734 227.556,198.906 300.248,198.906 300.248,193.734"
    />
    <rect
      x="300.253"
      y="193.733"
      fill="#99ACBC"
      width="69.525"
      height="5.172"
    />
    <rect
      x="300.253"
      y="222.177"
      fill="#99ACBC"
      width="69.525"
      height="5.172"
    />
    <rect
      x="227.556"
      y="222.177"
      fill="#B8C9D9"
      width="72.697"
      height="5.172"
    />
    <rect
      x="227.556"
      y="250.621"
      fill="#B8C9D9"
      width="72.697"
      height="5.172"
    />
    <rect
      x="300.253"
      y="250.621"
      fill="#99ACBC"
      width="69.525"
      height="5.172"
    />
    <rect
      x="227.556"
      y="279.066"
      fill="#B8C9D9"
      width="72.697"
      height="5.172"
    />
    <rect
      x="300.253"
      y="279.066"
      fill="#99ACBC"
      width="69.525"
      height="5.172"
    />
    <rect x="300.253" y="307.51" fill="#99ACBC" width="69.525" height="5.172" />
    <rect x="227.556" y="307.51" fill="#B8C9D9" width="72.697" height="5.172" />
    <rect
      x="227.556"
      y="335.955"
      fill="#B8C9D9"
      width="72.697"
      height="5.172"
    />
    <rect
      x="300.253"
      y="335.955"
      fill="#99ACBC"
      width="69.525"
      height="5.172"
    />
    <path
      fill="#C1321F"
      d="M187.618,277.43c-40.781,0-73.84,14.6-73.84,55.38c0,28.057,15.651,72.025,38.697,84.516c7.725,4.187,17.103,3.162,24.148-2.088c3.069-2.286,6.871-3.639,10.993-3.639s7.925,1.353,10.993,3.639c7.046,5.249,16.425,6.275,24.148,2.088c23.045-12.491,38.697-56.461,38.697-84.516C261.458,292.03,228.399,277.43,187.618,277.43z"
    />
    <path
      fill="#A82116"
      d="M187.618,277.43c-0.124,0-0.248,0.003-0.372,0.003v134.182c0.124-0.003,0.247-0.016,0.372-0.016c4.122,0,7.925,1.353,10.993,3.639c7.046,5.248,16.424,6.273,24.148,2.088c23.045-12.491,38.697-56.461,38.697-84.516C261.458,292.03,228.399,277.43,187.618,277.43z"
    />
    <path
      fill="#2C9984"
      d="M231.727,253.388c0,0-38.264-4.779-44.11,35.188C187.618,288.577,221.668,297.669,231.727,253.388z"
    />
    <path
      fill="#268472"
      d="M187.725,288.603c2.069,0.505,34.123,7.596,43.935-34.933L187.725,288.603z"
    />
    <path
      fill="#935635"
      d="M187.621,301.484c-0.079,0-0.157-0.002-0.238-0.005c-3.086-0.128-5.485-2.736-5.356-5.822c0.802-19.213-16.056-32.084-16.227-32.213c-2.472-1.853-2.972-5.36-1.119-7.832c1.855-2.47,5.36-2.974,7.832-1.119c0.888,0.665,21.735,16.598,20.694,41.627C193.081,299.13,190.604,301.484,187.621,301.484z"
    />
    <path
      fill="#804000"
      d="M187.245,271.939v29.518c0.048,0.003,0.091,0.017,0.14,0.021c0.079,0.003,0.159,0.005,0.238,0.005c2.982,0,5.46-2.353,5.585-5.361C193.602,286.644,190.855,278.475,187.245,271.939z"
    />
  </svg>
);

const ThermometerIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="#C7C5CC"
      d="M173.098,0v429.098C173.098,474.812,210.286,512,256,512c0.355,0,0.721,0,1.076-0.021c45.223-0.564,81.826-37.522,81.826-82.881V0H173.098z M307.555,429.098c0,28.076-22.538,50.97-50.479,51.534c-0.355,0.021-0.721,0.021-1.076,0.021c-28.432,0-51.555-23.124-51.555-51.555v-285.8h103.111V429.098z"
    />
    <path
      fill="#8A8791"
      d="M338.902,0v429.098c0,45.359-36.603,82.317-81.826,82.881V0H338.902z"
    />
    <rect x="140.539" fill="#D8D7DA" width="230.922" height="31.347" />
    <rect x="257.045" fill="#C7C5CC" width="114.416" height="31.347" />
    <path
      fill="#FF4F18"
      d="M307.555,143.297v285.8c0,28.076-22.538,50.97-50.479,51.534c-0.355,0.021-0.721,0.021-1.076,0.021c-28.432,0-51.555-23.124-51.555-51.555v-285.8H307.555z"
    />
    <path
      fill="#FF3400"
      d="M307.555,143.297v285.8c0,28.076-22.538,50.97-50.479,51.534V143.297H307.555z"
    />
    <rect x="230.39" y="355.234" fill="#FFDAA7" width="23.51" height="23.51" />
    <rect x="261.736" y="385.797" fill="#F2C794" width="23.51" height="23.51" />
    <rect x="221.247" y="404.344" fill="#FFDAA7" width="23.51" height="23.51" />
  </svg>
);

function Card() {
  const wave1 = useRef(null);
  const wave2 = useRef(null);
  const wave3 = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      // ── Add these gsap.set calls alongside your other sets ──
      gsap.set(wave1.current, { attr: { "stroke-dashoffset": DASHLEN.wave1 } });
      gsap.set(wave2.current, { attr: { "stroke-dashoffset": DASHLEN.wave2 } });
      gsap.set(wave3.current, { attr: { "stroke-dashoffset": DASHLEN.wave3 } });
      gsap.set(".card", { y: "100vh" });

      // purple box starts above center
      gsap.set(".box", {
        y: -300,
        scale: 0.6,
      });

      // demo text hidden initially
      gsap.set(".demo-text", {
        y: 80,
        opacity: 0,
      });

      gsap.set(".bottombox", {
        y: 80,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=4300",
          scrub: 1.2,
          pin: true,
        },
      });

      // entry animation to center
      tl.to(".box", {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
      })
        // Wave 1: draw in at 0.6, erase at 1.6
        .to(
          wave1.current,
          {
            attr: { "stroke-dashoffset": 0 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          0.6,
        )
        .to(
          wave1.current,
          {
            attr: { "stroke-dashoffset": -DASHLEN.wave1 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          1.6,
        )

        // Wave 2: draw in at 1.6, erase at 2.6
        .to(
          wave2.current,
          {
            attr: { "stroke-dashoffset": 0 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          1.6,
        )
        .to(
          wave2.current,
          {
            attr: { "stroke-dashoffset": -DASHLEN.wave2 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          2.6,
        )

        // Wave 3: draw in at 2.6, erase at 3.6
        .to(
          wave3.current,
          {
            attr: { "stroke-dashoffset": 0 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          2.6,
        )
        .to(
          wave3.current,
          {
            attr: { "stroke-dashoffset": -DASHLEN.wave3 },
            duration: 0.9,
            ease: "power2.inOut",
          },
          3.6,
        )

        // ── BG CHANGES (added) ──────────────────────────────
        .to("body", { backgroundColor: "#fff6e8", duration: 0.4 }, 0.6) // card 1 — warm cream

        // ───────────────────────────────────────────────────

        .to(
          ".card1",
          { y: "-120vh", rotate: 0.5, ease: "none", duration: 1 },
          0.6,
        )
        .to(
          ".card2",
          { y: "-120vh", rotate: 0.5, ease: "none", duration: 1 },
          1.6,
        )
        .to(
          ".card3",
          { y: "-120vh", rotate: 0.5, ease: "none", duration: 1 },
          2.6,
        )
        .to(
          ".card4",
          { y: "-120vh", rotate: 0.5, ease: "none", duration: 1 },
          3.6,
        )

        .to(".box", { y: 300, duration: 1.8 }, 3.7)
        .to(".demo-text", { y: 0, opacity: 1, duration: 0.8 }, 4.7)
        .to(".bottombox", { y: 0, opacity: 1, duration: 0.8 }, 5.2)

        // purple box exit
        .to(
          ".box",
          {
            y: 300,
            duration: 1.8,
          },
          3.7,
        )

        // text enters after 4th card exits
        .to(
          ".demo-text",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          4.7,
        )
        .to(
          ".bottombox",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          5.2,
        );
    },
    { scope: container },
  );

  return (
    <div>
      <section className="absolute z-20  flex flex-col  w-full items-center justify-center  ">
        <Banner />
      </section>
      <div className="absolute z-10 ">
        <WaveLines wave1={wave1} wave2={wave2} wave3={wave3} /> {/* ← add */}
      </div>
      <section
        ref={container}
        className="relative h-screen  overflow-hidden bg-[#F9EADE]"
      >
        <WaveLines wave1={wave1} wave2={wave2} wave3={wave3} /> {/* ← add */}
        <div className="relative z-20 mx-auto h-full w-full max-w-7xl overflow-hidden">
          <div
            className="box absolute top-1/2 left-1/2 z-30
    h-[300px] w-[220px]
    sm:h-[380px] sm:w-[276px]
    md:h-[450px] md:w-[327px]
    flex flex-col items-center gap-5 rounded-[27px] px-8
    -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${breakfast})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Big cards */}
          <div
            className="card card1 absolute top-20 right-0
  h-auto sm:h-68
  w-[calc(100vw-2rem)] sm:w-[25rem]
  rotate-4 rounded-3xl bg-black shadow-2xl"
          >
            <div
              className="absolute -top-10
    left-1/2 -translate-x-1/2
    sm:left-40 sm:translate-x-0
    z-40 flex h-18 w-18 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#ffe7a3] via-[#ffc94d] to-[#ff9f1a] shadow-[0_18px_40px_rgba(255,170,0,0.35)] backdrop-blur-sm"
            >
              <SpeedometerIcon />
            </div>
            <Card1 />
          </div>

          <div
            className="card card2 absolute top-20 left-0
  h-auto sm:h-68
  w-[calc(100vw-2rem)] sm:w-[25rem]
  -rotate-4 rounded-3xl bg-blue-500 shadow-2xl"
          >
            <div
              className="absolute -top-10
    left-1/2 -translate-x-1/2
    sm:left-40 sm:translate-x-0
    z-40 flex h-18 w-18 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#ffe7a3] via-[#ffc94d] to-[#ff9f1a] shadow-[0_18px_40px_rgba(255,170,0,0.35)] backdrop-blur-sm"
            >
              <ChargingIcon />
            </div>
            <Card2 />
          </div>

          <div
            className="card card3 absolute top-20 right-0
  h-auto sm:h-68
  w-[calc(100vw-2rem)] sm:w-[25rem]
  rotate-4 rounded-3xl bg-green-500 shadow-2xl"
          >
            <div
              className="absolute -top-10
    left-1/2 -translate-x-1/2
    sm:left-40 sm:translate-x-0
    z-40 flex h-18 w-18 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#ffe7a3] via-[#ffc94d] to-[#ff9f1a] shadow-[0_18px_40px_rgba(255,170,0,0.35)] backdrop-blur-sm"
            >
              <DocumentIcon />
            </div>
            <Card3 />
          </div>

          <div
            className="card card4 absolute top-20 left-0
  h-auto sm:h-68
  w-[calc(100vw-2rem)] sm:w-[25rem]
  -rotate-4 rounded-3xl bg-purple-500 shadow-2xl"
          >
            <div
              className="absolute -top-10
    left-1/2 -translate-x-1/2
    sm:left-40 sm:translate-x-0
    z-40 flex h-18 w-18 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#ffe7a3] via-[#ffc94d] to-[#ff9f1a] shadow-[0_18px_40px_rgba(255,170,0,0.35)] backdrop-blur-sm"
            >
              <ThermometerIcon />
            </div>
            <Card4 />
          </div>
          {/* Text after cards */}
          <div
            className="demo-text absolute
  w-[90vw] sm:w-325
  top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h2 className="text-6xl md:text-9xl font-bebas font-bold text-slate-900 leading-tight">
              Hot people do eat breakfast
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center md:text-right mr-4 sm:mr-20 text-slate-700 mt-1">
              -SHARK TANK INDIA APPROVED
            </p>
          </div>
          <div className="bottombox hidden md:block absolute bottom-0 -z-20   h-34 w-full items-center justify-center  px-6">
            <h1 className="absolute z-20 -top-40 right-3 text-5xl font-bold text-slate-900 md:text-7xl">
              <img src={packet} />
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
