"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import WatsonState from "../src/context/Context";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "../styles/contact-cards.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Srila Mookherjee</title>
        <meta name="description" content="Srila Mookherjee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="shreela mookherjee" />
        <meta property="og:image" content="/img/sm-og-image.jpeg" />
        <meta property="og:image:alt" content="Srila Mookherjee Logo" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style-dark.css" />
        <link rel="stylesheet" href="/css/style-light.css" />
        <link rel="stylesheet" href="/css/style-demo.css" />
        <link rel="stylesheet" href="/css/theme-color.css" />
      </head>
      <body className={poppins.variable}>
        <WatsonState>
          {loader && <PreLoader />}
          {children}
        </WatsonState>
      </body>
    </html>
  );
}
