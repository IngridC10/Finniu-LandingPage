import DownloadAppSection from "./components/Section-7/DownloadAppFinniuSection";
import TestimonialsDesktop from "../components/Section-6/TestimonialsDesktop";
import WelcomeSection from "./components/Section-1/WelcomeSection";
import SponsoredSection from "./components/Section-2/SponsoredSection";
import PurposeSection from "./components/Section-3/PurposeSection";
import SolidStrategySection from "./components/Section-4/SolidStrategySection";
import OurDirectorySection from "./components/Section-5/OurDirectorySection";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between ">
      <WelcomeSection />
      <SponsoredSection />
      <PurposeSection />
      <SolidStrategySection />
      <OurDirectorySection />
      <TestimonialsDesktop />
      <DownloadAppSection />
    </main>
  );
}
