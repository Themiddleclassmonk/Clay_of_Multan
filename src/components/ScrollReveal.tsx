import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeUp' | 'fadeIn' | 'scaleReveal' | 'slideLeft' | 'slideRight';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  threshold?: string;
  once?: boolean;
}

const animations: Record<AnimationType, gsap.TweenVars> = {
  fadeUp: { y: 40, opacity: 0 },
  fadeIn: { opacity: 0 },
  scaleReveal: { scale: 0.95, opacity: 0 },
  slideLeft: { x: -40, opacity: 0 },
  slideRight: { x: 40, opacity: 0 },
};

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.7,
  stagger = 0,
  className = '',
  threshold = 'top 85%',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars = animations[animation];

    gsap.set(el, fromVars);

    const tween = gsap.to(el, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger: stagger > 0 ? stagger : undefined,
      ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      scrollTrigger: {
        trigger: el,
        start: threshold,
        once,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [animation, delay, duration, stagger, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
