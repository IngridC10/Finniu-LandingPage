import DownloadAppSection from "./components/Section1/DownloadAppSection";
import FixedTermSection from "./components/Section2/FixedTermSection";
import HowItWorksSection from "./components/Section3/HowItWorksSection";
import SimulatorInvestmentSection from "./components/Section5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./components/Section4/StepInvestmentGuideSection";
import TestimonialsSection from "./components/Section6/TestimonialsSection";
import RegisterSection from "./components/Section7/RegisterSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadAppSection />
      <FixedTermSection />
      <HowItWorksSection />
      <StepInvestmentGuideSection />

      <SimulatorInvestmentSection />
      <TestimonialsSection />
      <RegisterSection />
    </main>
  );
}
