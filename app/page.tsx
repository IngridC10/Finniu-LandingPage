import DownloadAppSection from "./components/Section-1/DownloadAppSection";
import FixedTermSection from "./components/Section-2/FixedTermSection";
import HowItWorksSection from "./components/Section-3/HowItWorksSection";
import SimulatorInvestmentSection from "./components/Section-5/SimulatorInvestmentSection";
import StepInvestmentGuideSection from "./components/Section-4/StepInvestmentGuideSection";
import TestimonialsSection from "./components/Section-6/TestimonialsSection";
import RegisterSection from "./components/Section-7/RegisterSection";
import DownloadAppResponsiveSection from "./components/Section-1/DownloadAppResponsiveSection";
import DownloadApp from "./components/Section-1/DownloadApp";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between  bg-blueDarkColor  ">
      <DownloadApp />
      {/* <DownloadAppResponsiveSection /> */}
      {/* <DownloadAppSection /> */}
      <FixedTermSection />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
      <TestimonialsSection />
      <RegisterSection />
    </main>
  );
}
