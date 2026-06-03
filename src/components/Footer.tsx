import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const shopLinks = ['Raw Multani Mitti', 'Face Masks', 'Hair Care', 'Soaps', 'Gift Sets'];
const companyLinks = ['Our Story', 'Ingredients', 'Sustainability', 'Blog', 'Careers'];
const helpLinks = ['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Track Order'];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-[#4A3728] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-40">
          {/* Brand + Newsletter */}
          <ScrollReveal className="lg:col-span-1 ">
            <h3 className="font-display text-2xl font-medium tracking-tight text-white">
              Clay of Multan
            </h3>
            <p className="mt-4 text-[#E8DFD0] text-sm leading-relaxed max-w-[300px]">
              Ancient beauty wisdom, delivered to your doorstep.
            </p>

            <div className="mt-16">
              <h4 className="font-display text-4xl text-white mb-3">
                Join Our Newsletter
              </h4>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#C4956A] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#C4956A] text-white text-sm font-medium rounded-lg transition-colors duration-300 hover:bg-[#D4A574] flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Shop */}
          <ScrollReveal delay={0.1}>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#E8DFD0] mb-4">
              Shop
            </h4>
            <ul className="space-y-1">
              {shopLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-[#E8DFD0] hover:text-white transition-colors duration-200 cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={0.2}>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#E8DFD0] mb-4">
              Company
            </h4>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-[#E8DFD0] hover:text-white transition-colors duration-200 cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Help */}
          <ScrollReveal delay={0.3}>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#E8DFD0] mb-4">
              Help
            </h4>
            <ul className="space-y-1">
              {helpLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-[#E8DFD0] hover:text-white transition-colors duration-200 cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#E8DFD0]/60 tracking-wide">
            &copy; 2025 Clay of Multan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              className="text-[#E8DFD0] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="text-[#E8DFD0] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="#"
              className="text-[#E8DFD0] hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="text-[#E8DFD0] hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
