'use client'

import { useContext, useEffect } from "react";
import BannerContent from "../../src/components/BannerContent";
import { WatsonContext } from "../../src/context/Context";
import Layout from "../../src/layout/Layout";
import { defaultPageAnimationByPageName } from "../../src/utils";

export default function IndexLightPage() {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLight);
  }, []);

  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <BannerContent />
      </section>
    </Layout>
  );
}