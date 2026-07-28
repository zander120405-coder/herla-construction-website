const photos = [
  "/work-1.jpg",
  "/work-2.jpg",
  "/work-3.jpg",
  "/work-4.jpg",
  "/work-5.jpg",
  "/work-6.jpg",
  "/work-7.jpg",
];

export function WorkStrip() {
  const doubled = [...photos, ...photos];

  return (
    <div className="relative h-52 overflow-hidden bg-[#0d0d0d]">
      {/* Scrolling photo track */}
      <div
        className="flex h-full"
        style={{
          animation: "workStripScroll 55s linear infinite",
          width: `${doubled.length * 220}px`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-full"
            style={{ width: 210, marginRight: 4 }}
          >
            <img
              src={src}
              alt="Herla on site"
              className="w-full h-full object-cover"
              style={{
                filter: "grayscale(45%) brightness(0.45) contrast(1.05)",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay — left-to-right gradient for depth */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.15) 20%, rgba(13,13,13,0.15) 80%, #0d0d0d 100%)"
        }}
      />

      {/* Centred label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-[#CC9633]/60" />
            <span className="text-[#CC9633] text-[10px] font-bold uppercase tracking-[0.35em]">
              On Site · Every Day · Real Work
            </span>
            <div className="w-12 h-px bg-[#CC9633]/60" />
          </div>
        </div>
      </div>

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes workStripScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${photos.length * 214}px); }
        }
      `}</style>
    </div>
  );
}
