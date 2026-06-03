import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MediaRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const image = imageRef.current;
    if (!section || !mask || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(mask, { yPercent: -100, ease: 'none' }, 0).to(
      image,
      { yPercent: 15, ease: 'none' },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] overflow-hidden"
    >
      <img
        ref={imageRef}
        src="/assets/clay-texture-reveal.jpg"
        alt="Raw Multani Mitti clay powder texture"
        className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
      />
      <div
        ref={maskRef}
        className="absolute inset-0 bg-[#F5F1E8] z-10"
      />
    </section>
  );
}
