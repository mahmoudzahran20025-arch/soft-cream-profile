import Hero from "@/components/Hero";
import TheDisruption from "@/components/TheDisruption";
import FusionCarriers from "@/components/FusionCarriers";
import Quality from "@/components/Quality";
import FinancialHighlights from "@/components/FinancialHighlights";
import Footer from "@/components/Footer";
import MarketValidation from "@/components/MarketValidation";
import InvestmentUpside from "@/components/InvestmentUpside";
import FlavorUniverse from "@/components/FlavorUniverse";
import ManufacturingExcellence from "@/components/ManufacturingExcellence";
import StrategicLocations from "@/components/StrategicLocations";
import { BackgroundElements } from "@/components/BackgroundElements";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SignatureGallery from "@/components/SignatureGallery";
import LiquidGoldLab from "@/components/LiquidGoldLab";
import VisionMission from "@/components/VisionMission";
import Artisans from "@/components/Artisans";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <BackgroundElements />
      <Hero />
      <TheDisruption />
      <div id="flavors">
        <FlavorUniverse />
      </div>
      <SignatureGallery />
      <LiquidGoldLab />
      <FusionCarriers />
      <StrategicLocations />
      <div id="manufacturing">
        <ManufacturingExcellence />
      </div>
      <InvestmentUpside />
      <MarketValidation />
      <div id="financials">
        <FinancialHighlights />
      </div>
      <VisionMission />
      <Artisans />
      <Quality />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
