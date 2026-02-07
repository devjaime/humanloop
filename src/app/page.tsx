import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import MCPSection from "@/components/MCPSection";
import Scenarios from "@/components/Scenarios";
import PilotSkills from "@/components/PilotSkills";
import TechArchitecture from "@/components/TechArchitecture";
import EthicsFramework from "@/components/EthicsFramework";
import Pricing from "@/components/Pricing";
import ConceptBanner from "@/components/ConceptBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface noise-overlay">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <PilotSkills />
      <Scenarios />
      <MCPSection />
      <TechArchitecture />
      <EthicsFramework />
      <Pricing />
      <ConceptBanner />
      <Footer />
    </main>
  );
}
