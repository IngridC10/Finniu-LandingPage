import DownloadAppComponent from "./components/Section1/DownloadAppComponent";
import FixedTermComponent from "./components/Section2/FixedTermComponent";
import HowItWorks from "./components/Section3/HowItWorks";
import StepDownloadAppComponent from "./components/Section3/HowItWorks";
// import StepInvestmentGuide from "./components/Section4/StepInvestmentGuide";
// import InvestmentHand from "./components/Section4/StepInvestmentGuide";
// import SimulatorInvestment from "./components/Section5/SimulatorInvestment";
// import Testimonials from "./components/Section6/Testimonials";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between   ">
      <DownloadAppComponent />
      <FixedTermComponent />
      <HowItWorks />
      {/* <StepInvestmentGuide /> */}
      {/* <SimulatorInvestment />
      // <Testimonials /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
