import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import NavComponent from "./components/Navbar/NavComponent";
import FooterPageComponent from "./components/Footer/FooterPageComponent";
import FloatingWhatsappButton from "./components/Button-wsp/FloatingWhatsappButtonComponent";

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
    url: "https://www.finniu.com", // Cambia a tu URL
    siteName: "Finniu",
    images: [
      {
        url: "https://finniu-statics.s3.amazonaws.com/finniu/images/finniu-seo.png", // Cambia a la imagen que quieras mostrar cuando se comparta
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
    ], // Imagen específica para Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5G3XBV7');`,
          }}
        />
      </Head>
      <body className={DMSans.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5G3XBV7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NavComponent />
        {children}
        <FloatingWhatsappButton />
        <FooterPageComponent />
      </body>
    </html>
  );
}