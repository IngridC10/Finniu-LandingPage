import DownloadAppComponent from "./components/DownloadAppComponent";
import FixedTermComponent from "./components/FixedTermComponent";
import SavedInvestment from "./components/SafeInvestment";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between  bg-blueDarkColor  ">
      <DownloadAppComponent />
      <FixedTermComponent />
    </main>
  );
}
