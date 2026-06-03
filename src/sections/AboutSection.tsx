import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section id="about" className="bg-[#F5F1E8] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal animation="scaleReveal" duration={0.8}>
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
              <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <img
                  src="/assets/about-lifestyle.jpg"
                  alt="Multani Mitti clay in a handcrafted bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:pl-4">
            <ScrollReveal delay={0}>
              <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
                Our Story
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-display text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] text-[#4A3728]">
                Rooted in Tradition, Crafted for Today
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 font-body text-base leading-[1.7] text-[#8B7355]">
                For centuries, Multani Mitti has been treasured as nature's ultimate
                beauty secret. Sourced from the ancient beds of Multan, our clay is
                carefully extracted and minimally processed to preserve its natural
                mineral-rich composition.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 font-body text-base leading-[1.7] text-[#8B7355]">
                We believe in the power of purity — no additives, no chemicals, just
                100% natural Fuller's Earth clay as nature intended. Every batch is
                hand-selected to ensure the highest quality, bringing you a skincare
                ritual that has stood the test of time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="#"
                className="inline-block mt-8 font-body text-sm font-medium text-[#4A3728] underline underline-offset-4 transition-colors duration-200 hover:text-[#D4A574] hover:underline-offset-2"
              >
                Learn More About Us
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
