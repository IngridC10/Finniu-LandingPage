import DownloadAppComponent from "./components/Section1/DownloadAppComponent";
import FixedTermComponent from "./components/Section2/FixedTermComponent";
import StepDownloadAppComponent from "./components/Section3/StepDownloadAppComponent";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between  bg-blueDarkColor  ">
      <DownloadAppComponent />
      <FixedTermComponent />
      <StepDownloadAppComponent />
    </main>
  );
}
