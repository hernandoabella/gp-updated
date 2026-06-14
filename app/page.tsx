import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { PromiseBand } from "./components/PromiseBand";
import { Services } from "./components/Services";
import { BrandStatement } from "./components/BrandStatement";
import { AboutCEO } from "./components/AboutCEO";
import { Coverage } from "./components/coverage";
import { Ports } from "./components/Ports";
import { ContactSection } from "./components/ContactSection";
import { EventsGallery } from "./components/EventsGallery";
import { ClientsCarousel } from "./components/ClientsCarousel";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <StatsBar />
      <PromiseBand />
      <Services />
      <BrandStatement />
      <AboutCEO />
      <Coverage />
      <Ports />
      <EventsGallery />
      <ClientsCarousel />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
