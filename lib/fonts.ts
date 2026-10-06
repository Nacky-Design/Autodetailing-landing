import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";

/**
 * Gotham Pro — display/headings.
 * Explicit CSS weights: several TTF files report incorrect usWeightClass
 * (e.g. Medium/Light/Black as 400). Map by filename, not OS/2 metadata.
 * font-synthesis is disabled globally to prevent fake bold/italic.
 */
export const gothamPro = localFont({
  src: [
    {
      path: "../public/fonts/gotham-pro/gothampro_light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_lightitalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_mediumitalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_bolditalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham-pro/gothampro_blackitalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-gotham-pro",
  display: "swap",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

/** Golos Text — body / UI */
export const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-golos-text",
  display: "swap",
});
