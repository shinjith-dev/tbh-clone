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

export const recoletta = localFont({
  src: [
    {
      path: "../assets/fonts/Recoletta/Recoleta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Recoletta/Recoleta-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const guthenBloots = localFont({
  src: "../assets/fonts/GuthenBloots.woff2",
  display: "swap",
});
