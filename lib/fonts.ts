import localFont from "next/font/local";

export const modernEra = localFont({
  src: [
    {
      path: "../assets/fonts/ModernEra/ModernEra-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModernEra/ModernEra-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModernEra/ModernEra-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModernEra/ModernEra-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
