import HowItWorksSection from "./Section-3/HowItWorksSection";
import SimulatorInvestmentSection from "./Section-5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./Section-4/StepInvestmentGuideSection";
import RegisterSection from "./Section-7/RegisterSection";
import DownloadAppSection from "./Section-1/DownloadAppSection";
import FixedTermsSection from "./Section-2/FixedTermsSection";
import TestimonialsSection from "./Section-6/TestimonialsSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadAppSection />
      <FixedTermsSection />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
      <TestimonialsSection />
      <RegisterSection />
    </main>
  );
}
