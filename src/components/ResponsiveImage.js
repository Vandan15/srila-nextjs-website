"use client";

import React, { useEffect, useState } from "react";

export default function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt = "",
  className = "",
  imgProps = {},
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const resolveSrc = (src) => {
    if (!src) return undefined;
    return typeof src === "string" ? src : src.src;
  };

  const desktopUrl = resolveSrc(desktopSrc);
  const mobileUrl = resolveSrc(mobileSrc);
  const selectedUrl = isMobile && mobileUrl ? mobileUrl : desktopUrl;

  if (!selectedUrl) return null;

  return (
    <img
      src={selectedUrl}
      alt={alt}
      className={className}
      {...imgProps}
    />
  );
}
