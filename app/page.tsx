import HowItWorksSection from "./components/Section-3/HowItWorksSection";
import SimulatorInvestmentSection from "./components/Section-5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./components/Section-4/StepInvestmentGuideSection";
import RegisterSection from "./components/Section-7/RegisterSection";
import DownloadAppSection from "./components/Section-1/DownloadAppSection";
import FixedTermsSection from "./components/Section-2/FixedTermsSection";
import TestimonialsSection from "./components/Section-6/TestimonialsSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadAppSection />
      <FixedTermsSection />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
      <TestimonialsSection />
      {/* <RegisterSection /> */}
    </main>
  );
}
