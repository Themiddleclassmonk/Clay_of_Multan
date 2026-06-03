import { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '@/context/CartContext';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  sway: number;
  swaySpeed: number;
  time: number;
}

export default function ProductSpotlightSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const { addItem } = useCart();

  const productImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#E8DFD0', '#D4C5A9', '#F5F1E8', '#C4956A'];

    const resize = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    const count = 50;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.3,
        sway: 10 + Math.random() * 20,
        swaySpeed: 0.01 + Math.random() * 0.02,
        time: Math.random() * Math.PI * 2,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    section.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.time += p.swaySpeed;
        p.y -= p.speed;
        const swayOffset = Math.sin(p.time) * p.sway;

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        // Respawn
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x + swayOffset, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Product image float animation entrance
  useEffect(() => {
    const el = productImageRef.current;
    if (!el) return;

    gsap.set(el, { scale: 0.9, opacity: 0 });

    const tween = gsap.to(el, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onComplete: () => {
        gsap.to(el, {
          y: -8,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleAddToCart = () => {
    addItem({
      id: 'raw-multani-mitti',
      name: 'Raw Multani Mitti Powder',
      price: 24.99,
      image: '/assets/product-hero-raw-powder.jpg',
    });
  };

  const features = [
    '200g premium quality powder',
    'Finely sieved for smooth application',
    'Suitable for all skin types',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#E8DFD0] py-20 md:py-28 lg:py-40 overflow-hidden"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-[1] max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollReveal delay={0}>
              <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
                Featured Product
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-display text-[42px] md:text-[56px] lg:text-[72px] font-normal leading-[1.1] tracking-[-0.01em] text-[#4A3728]">
                Raw Multani Mitti Powder
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 font-body text-base md:text-lg lg:text-xl leading-[1.6] text-[#8B7355]">
                Our signature product — 100% pure, finely-sieved Multani Mitti
                powder ready to transform your skincare routine. Mix with water,
                rose water, or yogurt to create a luxurious face mask that
                deep-cleanses, exfoliates, and brightens your skin naturally.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#C4956A] flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="font-body text-base text-[#4A3728]">{f}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-8 font-body text-[28px] md:text-[36px] font-semibold text-[#4A3728]">
                $24.99
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <button
                onClick={handleAddToCart}
                className="mt-6 px-10 py-4 bg-[#4A3728] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#C4956A] hover:scale-[1.02] hover:shadow-lg"
              >
                Add to Cart
              </button>
            </ScrollReveal>
          </div>

          {/* Product Image */}
          <div ref={productImageRef} className="flex justify-center lg:justify-end">
            <img
              src="/assets/product-hero-raw-powder.jpg"
              alt="Raw Multani Mitti Powder packaging"
              className="w-full max-w-[450px] lg:max-w-[500px] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,241,232,0) 0%, rgba(245,241,232,1) 100%)',
        }}
      />
    </section>
  );
}
