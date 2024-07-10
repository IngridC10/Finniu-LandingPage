import HowItWorksSection from "./components/Section-3/HowItWorksSection";
import SimulatorInvestmentSection from "./components/Section-5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./components/Section-4/StepInvestmentGuideSection";
import RegisterSection from "./components/Section-7/RegisterSection";
import DownloadApp from "./components/Section-1/DownloadApp";
import FixedTerms from "./components/Section-2/FixedTerms";
import Testimonials from "./components/Section-6/Testimonials";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadApp />
      <FixedTerms />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
      <Testimonials />
      <RegisterSection />
    </main>
  );
}
