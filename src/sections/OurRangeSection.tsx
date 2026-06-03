import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger, Draggable);

const products = [
  {
    id: 'rose-water',
    name: 'Rose Water Toner',
    price: 18.99,
    image: '/assets/product-rose-water.jpg',
  },
  {
    id: 'face-mask',
    name: 'Multani Mitti Face Mask',
    price: 22.99,
    image: '/assets/product-face-mask.jpg',
  },
  {
    id: 'clay-soap',
    name: 'Multani Mitti Clay Soap',
    price: 12.99,
    image: '/assets/product-clay-soap.jpg',
  },
  {
    id: 'body-scrub',
    name: 'Clay Body Scrub',
    price: 28.99,
    image: '/assets/product-body-scrub.jpg',
  },
  {
    id: 'hair-pack',
    name: 'Hair Nourishing Clay Pack',
    price: 26.99,
    image: '/assets/product-hair-pack.jpg',
  },
];

export default function OurRangeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.parentElement!.clientWidth;
    const currentX = gsap.getProperty(track, 'x') as number;
    setCanPrev(currentX < -5);
    setCanNext(currentX > -(maxScroll - 5));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const maxScroll = track.scrollWidth - container.clientWidth;

    const drag = Draggable.create(track, {
      type: 'x',
      bounds: { minX: -maxScroll, maxX: 0 },
      inertia: true,
      edgeResistance: 0.8,
      onDrag: updateArrows,
      onThrowUpdate: updateArrows,
      snap: {
        x: (value: number) => {
          const cardWidth = 316; // 300 + 16 gap
          return Math.round(value / cardWidth) * cardWidth;
        },
      },
    })[0];

    draggableRef.current = drag;

    return () => {
      drag.kill();
    };
  }, [updateArrows]);

  const scroll = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 316;
    const currentX = gsap.getProperty(track, 'x') as number;
    const targetX =
      direction === 'next'
        ? Math.max(currentX - cardWidth, -(track.scrollWidth - track.parentElement!.clientWidth))
        : Math.min(currentX + cardWidth, 0);

    gsap.to(track, {
      x: targetX,
      duration: 0.5,
      ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      onUpdate: updateArrows,
    });
  };

  return (
    <section id="range" className="bg-[#F5F1E8] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <ScrollReveal>
              <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
                Our Collection
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-3 font-display text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] text-[#4A3728]">
                Explore Our Range
              </h2>
            </ScrollReveal>
          </div>

          {/* Arrows */}
          <ScrollReveal delay={0.2} className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('prev')}
              disabled={!canPrev}
              className={`w-12 h-12 rounded-full border border-[#D4C5A9] bg-white flex items-center justify-center transition-all duration-300 ${
                canPrev
                  ? 'hover:bg-[#4A3728] hover:text-white hover:border-[#4A3728] text-[#4A3728]'
                  : 'opacity-30 cursor-not-allowed text-[#8B7355]'
              }`}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('next')}
              disabled={!canNext}
              className={`w-12 h-12 rounded-full border border-[#D4C5A9] bg-white flex items-center justify-center transition-all duration-300 ${
                canNext
                  ? 'hover:bg-[#4A3728] hover:text-white hover:border-[#4A3728] text-[#4A3728]'
                  : 'opacity-30 cursor-not-allowed text-[#8B7355]'
              }`}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </ScrollReveal>
        </div>

        {/* Slider */}
        <ScrollReveal delay={0.2}>
          <div ref={containerRef} className="overflow-hidden -mx-5 md:-mx-0">
            <div
              ref={trackRef}
              className="flex gap-4 md:gap-6 px-5 md:px-0 cursor-grab active:cursor-grabbing"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[280px] md:w-[300px] group"
                >
                  <div className="bg-white rounded-xl p-4 transition-all duration-400 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
                    <div className="aspect-square rounded-lg bg-[#F5F1E8] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-normal text-[#4A3728]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-body text-base font-semibold text-[#4A3728]">
                        ${product.price.toFixed(2)}
                      </span>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* View All */}
        <ScrollReveal delay={0.3} className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#4A3728] underline underline-offset-4 transition-colors duration-200 hover:text-[#D4A574] hover:underline-offset-2"
          >
            View All Products
            <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
