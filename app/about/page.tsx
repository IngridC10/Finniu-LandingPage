import WelcomeSection from "./components/Section-1/WelcomeSection";
import SponsoredSection from "./components/Section-2/SponsoredSection";
import PurposeSection from "./components/Section-3/PurposeSection";
import SolidStrategySection from "./components/Section-4/SolidStrategySection";
import TestimonialsSection from "../components/Section-6/TestimonialsSection";
import DownloadAppSectionAbout from "./components/Section-7/DownloadAppSectionAbout";
import OurDirectorySection from "./components/Section-5/OurDirectorySection";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between ">
      <WelcomeSection />
      <SponsoredSection />
      <PurposeSection />
      <SolidStrategySection />
      <OurDirectorySection />
      <TestimonialsSection />
      <DownloadAppSectionAbout />
    </main>
  );
}
