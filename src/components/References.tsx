import { useState, useEffect } from "react";

const logos = [
  // Platzhalter: Schwarze Kreise
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
];

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCarousel = logos.length > 6; 

  useEffect(() => {
    if (isCarousel) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }, 3000); // Alle 3 Sekunden wechseln
      return () => clearInterval(interval);
    }
  }, [isCarousel]);

  return (
    <section className="bg-[var(--color-brand-gray)] py-16">
      <div className="text-center mb-8">
        <p className="text-[var(--color-brand-text)]">
          Trusted by the world's best companies
        </p>
      </div>
      <div className="flex justify-center items-center overflow-hidden">
        {isCarousel ? (
          <div className="flex gap-8" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
            {logos.map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-black rounded-full"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-8">
            {logos.map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-black rounded-full"
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}