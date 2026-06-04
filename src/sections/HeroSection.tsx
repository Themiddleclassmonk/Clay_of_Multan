import { useRef, useEffect, useState, type MouseEvent } from "react";
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import ContactPopup from './Contact-form';


export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef(null); // <-- NEW

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.6",
      )
      .fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.5",
      )
      .fromTo(
        contactRef.current, // <-- NEW: animate contact button
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.5",
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleExplore = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#range");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = (e) => {
    // 3. ADD handler
    e.preventDefault();
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/assets/clay-texture-reveal.jpg"
      >
        <source src="/assets/hero-background-video.mp4" type="video/mp4" />
      </video> */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/home_image.jpg"
        alt="error"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(74,55,40,0) 0%, rgba(74,55,40,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-5 max-w-[700px] mx-auto">
        <h1
          ref={headlineRef}
          className="font-display text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-light leading-[1] tracking-[-0.02em] text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
        >
          Nature's Purest Gift for Your Skin
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 font-body text-base sm:text-lg md:text-xl font-normal text-white/90 leading-relaxed max-w-[500px] mx-auto"
        >
          Discover the ancient beauty secret of Multani Mitti — 100% natural
          clay that cleanses, nourishes, and revitalizes your skin
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            ref={ctaRef}
            href="#range"
            onClick={handleExplore}
            className=" px-8 sm:px-10 py-3.5 sm:py-4 bg-[#4A3728] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#C4956A] hover:scale-[1.02] hover:shadow-lg"
          >
            Explore Our Collection
          </a>

          <a
            ref={contactRef}
            href="#contact"
            onClick={handleContact}
            className=" px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#4A3728] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#C4956A] hover:text-white hover:scale-[1.02] hover:shadow-lg hover:border-[#C4956A]"
          >
            Contact Us
          </a>
        </div>
      </div>

      <ContactPopup isOpen={isContactOpen} onClose={closeContact} />
      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] scroll-indicator"
      >
        <ChevronDown size={24} className="text-white/70" />
      </div>
    </section>
  );
}
