"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-48 md:py-64 bg-[#F7F2EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image: Slides into place on the left */}
        <div 
          className="flex justify-center md:justify-end transition-all duration-700 ease-out will-change-transform"
          style={{
            transform: inView ? "translateX(0)" : "translateX(160px)",
            opacity: inView ? 1 : 0
          }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
              alt="About Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text: Slides out from behind image to the right into its clear grid column */}
        <div 
          className="text-left max-w-lg transition-all duration-700 delay-150 ease-out will-change-transform"
          style={{
            transform: inView ? "translateX(0)" : "translateX(-160px)",
            opacity: inView ? 1 : 0
          }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-2">TryyY</h2>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 tracking-tight">A Bit About Me</h3>
          <div className="space-y-4 text-[#444444] text-base leading-relaxed font-sans">
            <p>I am a designer and developer based in Indonesia, specializing in building clean, functional, and aesthetic digital products.</p>
            <p>My approach combines technical precision with a deep understanding of user needs, ensuring every project performs exceptionally.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
