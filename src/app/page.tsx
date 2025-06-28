import Header from '@/components/Header'
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import WhyUs from '@/components/WhyUs';
import CoreTeam from '@/components/CoreTeam';
import Footer from '@/components/Footer'
import OurExpertise from '@/components/OurExpertise';
import Locations from '@/components/Locations';
import BusinessLine from '@/components/BusinessLine';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CTA />
      <Locations />
      <OurExpertise />
      <CoreTeam />
      <BusinessLine />
      <WhyUs />
      <Footer />
    </div>
  );
}