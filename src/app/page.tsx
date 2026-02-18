import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import MCPSection from "@/components/MCPSection";
import Scenarios from "@/components/Scenarios";
import PilotSkills from "@/components/PilotSkills";
import WebMCPServices from "@/components/WebMCPServices";
import VideoShowcase from "@/components/VideoShowcase";
import TechArchitecture from "@/components/TechArchitecture";
import EthicsFramework from "@/components/EthicsFramework";
import Pricing from "@/components/Pricing";
import PilotPayment from "@/components/PilotPayment";
import Partners from "@/components/Partners";
import RevenueModel from "@/components/RevenueModel";
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
      <WebMCPServices />
      <VideoShowcase />
      <Scenarios />
      <MCPSection />
      <TechArchitecture />
      <EthicsFramework />
      <RevenueModel />
      <Pricing />
      <Partners />
      <PilotPayment />
      
      {/* Disclaimer honesto */}
      <div className="bg-amber-900/20 border-t border-amber-500/30 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-200 text-sm">
            <strong>📋 Estado del proyecto:</strong> HumanLoop está en desarrollo. 
            Los servicios MCP (gasfitería, electricidad, etc.) son una visión de lo que queremos construir. 
            Hoy puedes unirte a la waitlist para ser de los primeros en acceder cuando lancemos. 
            ¿Te interesa ser operator? <a href="mailto:contacto@humanloop.cl" className="underline">Contáctanos</a>
          </p>
        </div>
      </div>

      <ConceptBanner />
      <Footer />
    </main>
  );
}
