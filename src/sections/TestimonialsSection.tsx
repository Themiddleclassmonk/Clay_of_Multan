import { useState } from 'react';
import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    image: '/assets/testimonial-1.jpg',
    name: 'Priya Sharma',
    text: "I've been using Clay of Multan's Multani Mitti for three months now, and my skin has never felt better. The natural glow it gives is unlike any chemical product I've tried before.",
    rating: 5,
  },
  {
    image: '/assets/testimonial-2.jpg',
    name: 'Emily Rodriguez',
    text: 'As someone with sensitive skin, finding a natural product that actually works has been a journey. This clay is incredibly gentle yet so effective. My pores are visibly smaller!',
    rating: 5,
  },
  {
    image: '/assets/testimonial-3.jpg',
    name: 'Sarah Mitchell',
    text: "At 52, I was skeptical about natural remedies. But this Multani Mitti has genuinely improved my skin texture and reduced fine lines. It's now a permanent part of my weekly routine.",
    rating: 5,
  },
  {
    image: '/assets/testimonial-4.jpg',
    name: 'James Chen',
    text: "I use the clay mask twice a week after hearing about it from my sister. It's amazing how much oil control it provides without drying out my skin. Highly recommend!",
    rating: 5,
  },
  {
    image: '/assets/testimonial-5.jpg',
    name: 'Aisha Patel',
    text: 'The purity of this product is unmatched. You can literally feel the difference compared to store-bought clay masks. My skin feels detoxified and refreshed every single time.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCycleComplete = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-[#F5F1E8] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
              Testimonials
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] text-[#4A3728]">
              What Our Customers Say
            </h2>
          </ScrollReveal>
        </div>

        {/* Marquee */}
        <ScrollReveal delay={0.2}>
          <Marquee
            speed={40}
            pauseOnHover
            autoFill={false}
            onCycleComplete={handleCycleComplete}
            className="overflow-hidden"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[400px] mx-3 md:mx-4 flex-shrink-0"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E8DFD0]/50 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#D4C5A9]"
                    />
                    <div>
                      <h4 className="font-display text-lg font-medium text-[#4A3728]">
                        {t.name}
                      </h4>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className="text-[#C4956A] fill-[#C4956A]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-sm leading-[1.7] text-[#8B7355]">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </ScrollReveal>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-[#4A3728] scale-110'
                  : 'bg-transparent border border-[#D4C5A9]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
