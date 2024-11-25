import HowItWorksSection from "./components/Section-3/HowItWorksSection";
import SimulatorInvestmentSection from "./components/Section-5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./components/Section-4/StepInvestmentGuideSection";
import DownloadAppSection from "./components/Section-1/DownloadAppSection";
import FixedTermsSection from "./components/Section-2/FixedTermsSection";
import TestimonialsSection from "./components/Section-6/TestimonialsSection";
import SponsoredV2 from "./about/components/Section-2/SponsoredSevtionV2";
import ToStoresSection from "./about/components/Section-2/ToStoresSection";
import Susbcribe from "./components/Section-8/Susbcribe";
import MovilOperations from "@/components/MovilOperations";



export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadAppSection />
      <SponsoredV2 />
      <MovilOperations />
      <FixedTermsSection />
      <ToStoresSection />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
      <TestimonialsSection />
      <Susbcribe />
      {/* <RegisterSection /> */}
    </main>
  );
}
