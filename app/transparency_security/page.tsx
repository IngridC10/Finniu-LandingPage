
import DownloadAppSectionAbout from "../about/components/Section-7/DownloadAppSectionAbout";
import TransparencyBody from "../components/Transparency/TransparencyBody";

export default function Transparency() {
    return (
        <main className=" flex min-h-screen flex-col items-center  justify-between   ">
            <TransparencyBody />
            <DownloadAppSectionAbout />
        </main>
    );
}