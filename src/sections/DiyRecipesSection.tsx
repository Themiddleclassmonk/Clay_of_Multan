import ScrollReveal from '@/components/ScrollReveal';

const recipes = [
  {
    image: '/assets/recipe-brightening.jpg',
    title: 'Brightening Turmeric Mask',
    benefit: 'For: Dull Skin',
    steps: [
      'Mix 2 tbsp Multani Mitti with 1 tsp turmeric powder',
      'Add rose water to form a smooth paste',
      'Apply to face and neck, leave for 15 minutes',
      'Rinse with normal water and pat dry',
    ],
  },
  {
    image: '/assets/recipe-cleansing.jpg',
    title: 'Deep Cleansing Neem Mask',
    benefit: 'For: Oily & Acne-Prone Skin',
    steps: [
      'Blend 2 tbsp Multani Mitti with neem powder',
      'Add plain water to make a thick paste',
      'Apply on cleansed face, avoid eye area',
      'Rinse after 20 minutes, feel the freshness',
    ],
  },
  {
    image: '/assets/recipe-hydrating.jpg',
    title: 'Hydrating Yogurt Mask',
    benefit: 'For: Dry & Sensitive Skin',
    steps: [
      'Mix 2 tbsp Multani Mitti with 1 tbsp yogurt',
      'Add 1 tsp honey for extra moisture',
      'Apply evenly on face and neck',
      'Leave for 15 minutes, rinse with cool water',
    ],
  },
];

export default function DiyRecipesSection() {
  return (
    <section className="bg-[#E8DFD0] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#C4956A]">
              DIY Recipes
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-display text-[42px] md:text-[56px] lg:text-[72px] font-normal leading-[1.1] tracking-[-0.01em] text-[#4A3728]">
              Create Your Perfect Mask
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recipes.map((recipe, index) => (
            <ScrollReveal
              key={recipe.title}
              delay={index * 0.15}
              duration={0.7}
            >
              <div className="bg-white border border-[#D4C5A9] rounded-2xl overflow-hidden h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 bg-[#C4956A] text-white text-xs font-medium rounded-full">
                    {recipe.benefit}
                  </span>
                  <h3 className="mt-4 font-display text-[22px] lg:text-[28px] font-normal leading-[1.4] text-[#4A3728]">
                    {recipe.title}
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {recipe.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A3728] text-white text-xs font-medium flex items-center justify-center mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="font-body text-sm leading-[1.6] text-[#8B7355]">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
