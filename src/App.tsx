import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import MediaRevealSection from '@/sections/MediaRevealSection';
import AboutSection from '@/sections/AboutSection';
import SignatureIngredientsSection from '@/sections/SignatureIngredientsSection';
import ProductSpotlightSection from '@/sections/ProductSpotlightSection';
import OurRangeSection from '@/sections/OurRangeSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import DiyRecipesSection from '@/sections/DiyRecipesSection';

function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      

      <main>
        <HeroSection />
        <MediaRevealSection />
        <AboutSection />
        <SignatureIngredientsSection />
        <ProductSpotlightSection />
        <OurRangeSection />
        <TestimonialsSection />
        <DiyRecipesSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
