import ScrollReveal from '@/components/ScrollReveal';

const ingredients = [
  {
    image: '/assets/ingredient-purity.jpg',
    title: '100% Pure & Natural',
    description:
      'Our Multani Mitti is sourced directly from the ancient clay beds of Multan and undergoes minimal processing. No chemicals, no preservatives — just pure, natural Fullers Earth clay in its most authentic form.',
  },
  {
    image: '/assets/ingredient-minerals.jpg',
    title: 'Mineral-Rich Composition',
    description:
      'Packed with magnesium chloride, calcium bentonite, and natural silica, our clay delivers essential minerals that nourish and revitalize your skin from deep within.',
  },
  {
    image: '/assets/ingredient-tradition.jpg',
    title: 'Ancient Beauty Wisdom',
    description:
      'Trusted for over 3,000 years in Ayurvedic traditions, Multani Mitti has been the secret to radiant skin across generations. We honor this legacy by bringing you the same time-tested purity.',
  },
];

export default function SignatureIngredientsSection() {
  return (
    <section className="bg-[#F5F1E8] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
              Why Choose Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-display text-[42px] md:text-[56px] lg:text-[72px] font-normal leading-[1.1] tracking-[-0.01em] text-[#4A3728]">
              The Natural Difference
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="scaleReveal"
              delay={index * 0.15}
              duration={0.7}
            >
              <div className="group bg-white border border-[#E8DFD0] rounded-2xl overflow-hidden transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-[22px] lg:text-[28px] font-normal leading-[1.4] text-[#4A3728]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm lg:text-base leading-[1.7] text-[#8B7355]">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
