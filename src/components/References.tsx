import { useEffect, useRef, useState } from "react";

const VISIBLE = 6;
const ITEM_PX = 128;
const GAP_PX = 40;
const STEP_PX = ITEM_PX + GAP_PX;
const CONTAINER_PX = VISIBLE * ITEM_PX + (VISIBLE - 1) * GAP_PX; // 544px

const logos = [
  "/assets/logos/common-purpose-logo.webp",
  "/assets/logos/encentive-logo.webp",
  "/assets/logos/newpay-logo.webp",
  "/assets/logos/r3-robotics-logo.webp",
  "/assets/logos/synera-logo.webp",
  "/assets/logos/tomorrow_logo.svg",
  "/assets/logos/whera-logo.webp",
];

const isCarousel = logos.length > VISIBLE;
// Append first VISIBLE items so the loop can snap back seamlessly
const track = isCarousel ? [...logos, ...logos.slice(0, VISIBLE)] : logos;

export default function References() {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const raf = useRef<number | null>(null);

  // Advance one step every 2.8 s
  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // When we've slid through all original items, snap back to 0 without animation
  useEffect(() => {
    if (index >= logos.length) {
      const timeout = setTimeout(() => {
        setAnimated(false);
        setIndex(0);
      }, 650); // wait for slide-out transition to finish
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Re-enable animation one frame after the silent snap
  useEffect(() => {
    if (!animated) {
      raf.current = requestAnimationFrame(() => {
        raf.current = requestAnimationFrame(() => setAnimated(true));
      });
      return () => {
        if (raf.current !== null) cancelAnimationFrame(raf.current);
      };
    }
  }, [animated]);

  return (
    <section className="bg-[var(--color-brand-gray)] py-16">
      <div className="text-center mt-8">
        <p className="text-[var(--color-brand-text)]">
          Trusted by the world's best companies:
        </p>
      </div>

      <div
        style={{ width: CONTAINER_PX, overflow: "hidden", margin: "0 auto" }}
      >
        {isCarousel ? (
          <div
            style={{
              display: "flex",
              gap: GAP_PX,
              transform: `translateX(-${index * STEP_PX}px)`,
              transition: animated ? "transform 0.65s ease-in-out" : "none",
            }}
          >
            {/* Carousel */}
            {track.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{ flexShrink: 0, width: ITEM_PX, height: ITEM_PX }}
                className="object-contain opacity-70 grayscale"
              />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", gap: GAP_PX }}>
            {/* Static (falls ≤ VISIBLE) */}
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{ width: ITEM_PX, height: ITEM_PX }}
                className="object-contain opacity-70 grayscale"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
