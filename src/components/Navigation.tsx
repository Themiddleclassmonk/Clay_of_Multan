import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ContactPopup from "../sections/Contact-form";

const navLinks = [
  { label: 'Shop', href: '#range' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const openContact = () => {
    setMobileOpen(false);
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F1E8]/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl md:text-2xl font-medium tracking-tight"
            style={{ color: scrolled ? "#4A3728" : "#FFFFFF" }}
          >
            Clay of Multan
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#D4A574]"
                style={{ color: scrolled ? "#4A3728" : "#4A3728" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={openContact}
              className="font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#D4A574]"
              style={{ color: scrolled ? "#4A3728" : "#4A3728" }}
            >
              Contact
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="#range"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#range");
              }}
              className="hidden md:inline-flex px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: scrolled ? "#4A3728" : "#FFFFFF",
                color: scrolled ? "#FFFFFF" : "#4A3728",
              }}
            >
              Explore our Products
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2"
              style={{ color: scrolled ? "#4A3728" : "#FFFFFF" }}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#F5F1E8] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#4A3728]"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-4xl font-medium text-[#4A3728] transition-colors duration-200 hover:text-[#C4956A]"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#range"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#range");
            }}
            className="mt-4 px-8 py-3 bg-[#4A3728] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#C4956A]"
          >
            Shop Now
          </a>
        </div>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}
