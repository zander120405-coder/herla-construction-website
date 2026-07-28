import { useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilter?: string;
  afterFilter?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  title: string;
  category: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeFilter = "none",
  afterFilter = "none",
  beforeObjectPosition = "center",
  afterObjectPosition = "center",
  title,
  category,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div className="group relative overflow-hidden aspect-[4/3] bg-background select-none">
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-ew-resize"
        onMouseDown={() => { isDragging.current = true; }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onMouseMove={(e) => { if (isDragging.current) handleMove(e.clientX); }}
        onTouchStart={() => { isDragging.current = true; }}
        onTouchEnd={() => { isDragging.current = false; }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After image (full width behind) */}
        <img
          src={after}
          alt={`${title} - after`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: afterFilter, objectPosition: afterObjectPosition }}
          draggable={false}
        />

        {/* Before image clipped via clip-path */}
        <img
          src={before}
          alt={`${title} - before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, filter: beforeFilter, objectPosition: beforeObjectPosition }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none z-10"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <ChevronsLeftRight className="w-5 h-5 text-background" />
          </div>
        </div>

        {/* Before label */}
        <div className="absolute top-4 left-4 z-20 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 pointer-events-none">
          {beforeLabel}
        </div>

        {/* After label */}
        <div className="absolute top-4 right-4 z-20 bg-[#CC9633] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 pointer-events-none">
          {afterLabel}
        </div>
      </div>

      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#CC9633] text-xs font-bold uppercase tracking-widest mb-1 block">{category}</span>
        <h4 className="text-2xl font-display font-bold uppercase text-white">{title}</h4>
      </div>
    </div>
  );
}
