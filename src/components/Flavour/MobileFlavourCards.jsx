const flavourList = [
  { name: "Triramisu", color: "tri", rotation: "-1deg" },
  { name: "Mango", color: "mango", rotation: "1.5deg" },
  { name: "Strawberry", color: "strawberry", rotation: "-1deg" },
  { name: "Kulfi", color: "kulfi", rotation: "2deg" },
  { name: "Cookie", color: "cookie", rotation: "-1.5deg" },
  { name: "Chocolate", color: "choclate", rotation: "1deg" },
];

export default function MobileFlavourCards() {
  return (
    <section className="bg-[#faeade] px-4 pt-10 pb-16 md:hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-5 h-[2px] bg-[#a26833]" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#a26833]">
            Our Collection
          </span>
          <div className="w-5 h-[2px] bg-[#a26833]" />
        </div>
        <h2
          className="font-black uppercase leading-none tracking-[-0.04em] text-[#150805] text-center"
          style={{ fontSize: "clamp(2.2rem, 8vw, 3.5rem)" }}
        >
          6 Flavours
        </h2>
        <p className="text-[#7a5240]/60 text-xs font-medium text-center max-w-[220px]">
          Pick your favourite or try them all.
        </p>
      </div>

      {/* Cards grid — 2 columns */}
      <div className="grid grid-cols-2 gap-4">
        {flavourList.map((flavour, i) => (
          <div
            key={flavour.name}
            className="group relative overflow-hidden rounded-[1.6rem] cursor-pointer active:scale-[0.97] transition-transform duration-200"
            style={{
              aspectRatio: "3/4",
              transform: `rotate(${flavour.rotation})`,
            }}
          >
            {/* Bg image */}
            <img
              src={`/product-img/${flavour.color}-bg.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75 z-10" />

            {/* Gloss */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Ring */}
            <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-white/15 z-10 pointer-events-none" />

            {/* Float decorative */}
            <img
              src={`/product-img/${flavour.color}-float.png`}
              alt=""
              className="absolute z-20 top-0 w-full transition-transform duration-500 group-active:scale-105"
            />

            {/* Bottle */}
            <img
              src={`/product-img/${flavour.color}.png`}
              alt={flavour.name}
              className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[18%] h-[62%] drop-shadow-xl transition-transform duration-500 group-active:-translate-y-1 group-active:scale-[1.04] group-active:-translate-x-1/2"
            />

            {/* Index badge */}
            <span className="absolute z-40 top-3 left-3 text-[#faeade]/50 text-[9px] font-black uppercase tracking-[0.25em]">
              0{i + 1}
            </span>

            {/* NEW badge */}
            {i < 2 && (
              <span className="absolute z-40 top-3 right-3 bg-[#faeade]/15 backdrop-blur-sm text-[#faeade] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full border border-[#faeade]/20">
                New
              </span>
            )}

            {/* Name */}
            <div className="absolute z-40 bottom-0 left-0 right-0 p-3">
              <div className="bg-[#150805]/50 backdrop-blur-sm rounded-2xl px-3 py-2.5 text-center">
                <h3 className="text-[#faeade] font-black uppercase tracking-tight leading-none text-[10px]">
                  {flavour.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <button className="group relative overflow-hidden bg-[#150805] text-[#f2ebe0] rounded-full px-8 py-3.5 text-[11px] font-black uppercase tracking-widest hover:scale-[1.03] transition-transform duration-200">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="relative">Shop All Flavours →</span>
        </button>
      </div>
    </section>
  );
}
