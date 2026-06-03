import { CartProvider } from '@/context/CartContext';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import CartDrawer from '@/components/CartDrawer';
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
    <CartProvider>
      <CustomCursor />
      <Navigation />
      <CartDrawer />

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
    </CartProvider>
  );
}

export default App;
