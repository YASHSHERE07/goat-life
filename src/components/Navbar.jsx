import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", target: "#section-hero" },
  { label: "Features", target: "#section-features" },
  { label: "Flavours", target: "#section-flavours" },
  { label: "Reviews", target: "#section-reviews" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "section-hero",
      "section-features",
      "section-flavours",
      "section-reviews",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.3 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest("#navbar-root")) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleClick = (e, target, idx) => {
    e.preventDefault();
    setActive(idx);
    setOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="navbar-root"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[calc(100vw-2rem)]"
    >
      {/* ── PILL ── */}
      <nav
        className={`transition-all duration-300
          ${
            scrolled
              ? "bg-[#f2ebe0]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(21,8,5,0.18)] py-2 px-4"
              : "bg-[#f2ebe0]/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(21,8,5,0.12)] py-3 px-5"
          }
          rounded-full border border-[#150805]/10 flex items-center gap-3
        `}
      >
        {/* Logo */}
        <a
          href="#section-hero"
          onClick={(e) => handleClick(e, "#section-hero", 0)}
          className="flex items-center gap-2 flex-shrink-0 group"
        >
          <div className="w-[22px] h-[22px] rounded-full bg-[#a26833] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <span className="text-[7px] font-black text-[#150805] uppercase leading-none">
              GL
            </span>
          </div>
          <span
            className="font-black uppercase text-[#150805] tracking-[-0.03em] leading-none hidden sm:block"
            style={{
              fontFamily: "'Bebas Neue', 'Antonio', sans-serif",
              fontSize: "1.05rem",
            }}
          >
            GOAT<span className="text-[#a26833]">·</span>LIFE
          </span>
        </a>

        {/* Divider — desktop only */}
        <div className="w-px h-3.5 bg-[#150805]/10 flex-shrink-0 hidden md:block" />

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, target }, i) => (
            <a
              key={label}
              href={target}
              onClick={(e) => handleClick(e, target, i)}
              className={`relative px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-colors duration-200 flex-shrink-0
                ${
                  active === i
                    ? "text-[#f2ebe0]"
                    : "text-[#150805]/45 hover:text-[#150805]/80"
                }
              `}
            >
              {active === i && (
                <span
                  className="absolute inset-0 rounded-full bg-[#150805]"
                  style={{ zIndex: -1 }}
                />
              )}
              {label}
            </a>
          ))}
        </div>

        {/* Divider — desktop only */}
        <div className="w-px h-3.5 bg-[#150805]/10 flex-shrink-0 hidden md:block" />

        {/* Instagram */}
        <a
          href="https://www.instagram.com/goatlife.co/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GOAT Life on Instagram"
          className="flex-shrink-0 text-[#150805]/35 hover:text-[#a26833] transition-colors duration-200 hidden md:block"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex-shrink-0 w-7 h-7 flex flex-col justify-center items-center gap-[5px] ml-8"
        >
          <span
            className={`block h-[2px] bg-[#150805] rounded-full transition-all duration-300 origin-center
              ${open ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`}
          />
          <span
            className={`block h-[2px] bg-[#150805] rounded-full transition-all duration-300
              ${open ? "w-0 opacity-0" : "w-3.5"}`}
          />
          <span
            className={`block h-[2px] bg-[#150805] rounded-full transition-all duration-300 origin-center
              ${open ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`}
          />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`md:hidden mt-2 overflow-hidden transition-all items-center justify-center duration-300 ease-in-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#f2ebe0]/95 backdrop-blur-md rounded-2xl border border-[#150805]/10 shadow-[0_8px_32px_rgba(21,8,5,0.18)] px-3 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, target }, i) => (
            <a
              key={label}
              href={target}
              onClick={(e) => handleClick(e, target, i)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-200
                ${
                  active === i
                    ? "bg-[#150805] text-[#f2ebe0]"
                    : "text-[#150805]/50 hover:bg-[#150805]/6 hover:text-[#150805]/80"
                }
              `}
            >
              {/* Active dot */}
              <span
                className={`w-1 h-1 rounded-full flex-shrink-0 ${active === i ? "bg-[#a26833]" : "bg-[#150805]/15"}`}
              />
              {label}
            </a>
          ))}

          {/* Instagram row in drawer */}
          <div className="mt-1 pt-2 border-t border-[#150805]/8 flex items-center gap-3 px-4 py-2">
            <a
              href="https://www.instagram.com/goatlife.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#150805]/40 hover:text-[#a26833] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                @goatlife.co
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
