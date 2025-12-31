import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import ServicesPreview from '@/components/ServicesPreview';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <Testimonials />
    </div>
  );
}
