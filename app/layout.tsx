import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavComponent from "./components/Navbar/NavComponent";
import FooterPageComponent from "./components/Footer/FooterPageComponent";
import FloatingWhatsappButton from "./components/Button-wsp/FloatingWhatsappButtonComponent";
import GTM from "./components/GTM";
import Popup from "./components/Popup/Popup";

const DMSans = localFont({
  src: [
    {
      path: "../public/fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Finniu - Inversiones fáciles y seguras",
  description:
    "Finniu te ayuda a invertir de manera simple y con bajo riesgo para crear riqueza a largo plazo.",
  openGraph: {
    title: "Finniu - Inversiones fáciles y seguras",
    description:
      "Invierte tu dinero de manera simple y segura con Finniu. Obtén ganancias mensuales con nuestras soluciones.",
    url: "https://www.finniu.com",
    siteName: "Finniu",
    images: [
      {
        url: "https://finniu-statics.s3.amazonaws.com/finniu/images/finniu-seo.png",
        width: 1200,
        height: 630,
        alt: "Finniu - Personal Money App",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finniu - Inversiones fáciles y seguras",
    description:
      "Invierte tu dinero de manera simple y segura con Finniu. Obtén ganancias mensuales con nuestras soluciones.",
    images: [
      "https://finniu-statics.s3.amazonaws.com/finniu/images/finniu-seo.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <GTM />
    </head>
      <body className={DMSans.className}>
        <NavComponent />
        {children}

        <FloatingWhatsappButton />
        <FooterPageComponent />
      </body>
    </html>
  );
}