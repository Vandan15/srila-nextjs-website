"use client";

import { useEffect, useState } from "react";
import WatsonState from "../src/context/Context";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

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
        <meta
          name="keywords"
          content="vcard, resume, personal, portfolio, cv, card, responsive"
        />
        <meta name="author" content="cosmos-themes" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style-dark.css" />
        <link rel="stylesheet" href="/css/style-light.css" />
        <link rel="stylesheet" href="/css/style-demo.css" />
        <link rel="stylesheet" href="/css/theme-color.css" />
        <link
          rel="shortcut icon"
          href="/img/srila_logo.jpg"
          type="image/x-icon"
        />
      </head>
      <body>
        <WatsonState>
          {loader && <PreLoader />}
          {children}
        </WatsonState>
      </body>
    </html>
  );
}
