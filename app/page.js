"use client";

import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WatsonContext } from "../src/context/Context";
import Layout from "../src/layout/Layout";
import { heroSlider } from "../src/sliderProps";
import { defaultPageAnimationByPageName } from "../src/utils";
import img1 from "../src/images/home/4F3A0918.jpg";
import img2 from "../src/images/home/IMG_5489.jpg";
import img3 from "../src/images/home/IMG_5495.jpg";
import img4 from "../src/images/home/Perspective_0003.jpg";
import img5 from "../src/images/home/perspective_SREELA_13_1_23_00273_n.jpg";
import img6 from "../src/images/home/Perspective_Sreela_Mukherjee_0022.jpg";
import img7 from "../src/images/home/Perspective_Sreela_Mukherjee_0089.jpg";
import img8 from "../src/images/home/Srila_20_10_21_00016.jpg";
import img9 from "../src/images/home/Srila_Mookherjee_00021.jpg";
import img10 from "../src/images/home/Srila_Mookherjee_00047.jpg";
import img11 from "../src/images/home/Srila_Mookherjee_00088.jpg";
import Image from "next/image";

const sliderImages = [
  { id: 1, src: img1, alt: "Slide 1" },
  { id: 2, src: img2, alt: "Slide 2" },
  { id: 3, src: img3, alt: "Slide 3" },
  { id: 4, src: img4, alt: "Slide 4" },
  { id: 5, src: img5, alt: "Slide 5" },
  { id: 6, src: img6, alt: "Slide 6" },
  { id: 7, src: img7, alt: "Slide 7" },
  { id: 8, src: img8, alt: "Slide 8" },
  { id: 9, src: img9, alt: "Slide 9" },
  { id: 10, src: img10, alt: "Slide 10" },
  { id: 11, src: img11, alt: "Slide 11" },
];

export default function IndexLightSliderPage() {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);

  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightSlider);
  }, []);

  return (
    <Layout>
      <section id="home" className="banner-section pt-page">
        <div className="banner-slider">
          <div id="slides">
            <Swiper {...heroSlider} className="slides-container">
              {sliderImages?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Image src={item.src} alt={item.alt} fill priority />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <BannerContent /> */}
      </section>
    </Layout>
  );
}
