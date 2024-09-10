import { Metadata } from "next";
import localFont from "next/font/local";

export const DMSans = localFont({
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
  title: "Finniu",
};
