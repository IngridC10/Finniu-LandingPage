import DownloadAppComponent from "./components/Section1/DownloadAppComponent";
import FixedTermComponent from "./components/Section2/FixedTermComponent";
import HowItWorks from "./components/Section3/HowItWorks";
import InvestmentHand from "./components/GenericSectionSlider/InvestmentHand";
// import StepInvestmentGuide from "./components/Section4/StepInvestmentGuide";
// import InvestmentHand from "./components/Section4/StepInvestmentGuide";
import SimulatorInvestment from "./components/Section5/SimulatorInvestment";
import QuarterlyReportsMoney from "./components/GenericSectionSlider/QuarterlyReportsMoney";

import ProjectGoals from "./components/GenericSectionSlider/ProjectGoals";
import Wallet from "./components/GenericSectionSlider/Wallet";
import Testimonials from "./components/Section6/Testimonials";
import Register from "./components/Section7/Register";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      <DownloadAppComponent />
      <FixedTermComponent />
      <HowItWorks />
      {/* <StepInvestmentGuide /> */}
      <InvestmentHand />
      <QuarterlyReportsMoney />
      <ProjectGoals />
      <Wallet />
      <SimulatorInvestment />
      <Testimonials />
      <Register />
    </main>
  );
}
