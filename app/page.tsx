import { Coverage } from "./components/coverage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Services />
      <Coverage />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
