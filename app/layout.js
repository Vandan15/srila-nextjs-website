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
        <meta name="google-site-verification" content="a12cXgsV0ufTvjbNdjq8B4lIP7VxYehM6PhKv8e7vSo" />
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

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLCVLC52');`}} />
        {/* End Google Tag Manager */}
      </head>
      <body className={poppins.variable}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLCVLC52"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <WatsonState>
          {loader && <PreLoader />}
          {children}
        </WatsonState>
      </body>
    </html>
  );
}
