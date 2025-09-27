"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
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

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

const sliderImages = [
  {
    id: 1,
    src: img1,
    alt: "Ceramic Art Collection",
    title: "Handcrafted Ceramics",
    description:
      "Exquisite pottery pieces that blend traditional techniques with contemporary design.",
  },
  {
    id: 2,
    src: img2,
    alt: "Artistic Pottery",
    title: "Artistic Expression",
    description:
      "Each piece tells a unique story through form, texture, and artistic vision.",
  },
  {
    id: 3,
    src: img3,
    alt: "Clay Mastery",
    title: "Mastery in Clay",
    description:
      "Years of dedication and skill captured in every handcrafted ceramic creation.",
  },
  {
    id: 4,
    src: img4,
    alt: "Contemporary Design",
    title: "Contemporary Forms",
    description:
      "Modern interpretations of classical pottery traditions and techniques.",
  },
  {
    id: 5,
    src: img5,
    alt: "Artisan Heritage",
    title: "Artisan Heritage",
    description:
      "Preserving and celebrating the rich heritage of ceramic arts and craftsmanship.",
  },
  {
    id: 6,
    src: img6,
    alt: "Elegant Vessels",
    title: "Elegant Vessels",
    description:
      "Functional art pieces that bring beauty and elegance to everyday life.",
  },
  {
    id: 7,
    src: img7,
    alt: "Creative Vision",
    title: "Creative Vision",
    description:
      "Innovative designs that push the boundaries of traditional ceramic art.",
  },
  {
    id: 8,
    src: img8,
    alt: "Handmade Excellence",
    title: "Handmade Excellence",
    description:
      "Premium quality ceramics crafted with attention to every detail.",
  },
  {
    id: 9,
    src: img9,
    alt: "Ceramic Innovation",
    title: "Ceramic Innovation",
    description:
      "Exploring new possibilities in ceramic art through experimentation and creativity.",
  },
  {
    id: 10,
    src: img10,
    alt: "Timeless Beauty",
    title: "Timeless Beauty",
    description:
      "Classic designs that transcend trends and celebrate enduring beauty.",
  },
  {
    id: 11,
    src: img11,
    alt: "Artistic Legacy",
    title: "Artistic Legacy",
    description:
      "Building a lasting legacy through exceptional ceramic artistry and craftsmanship.",
  },
];

export default function IndexLightSliderPage() {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightSlider);
  }, []);

  const handleSlideClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <Layout>
      <section id="home" className="banner-section pt-page">
        <div className="banner-slider">
          <div id="slides">
            <Swiper
              {...heroSlider}
              ref={swiperRef}
              onSwiper={setSwiperInstance}
              className="slides-container"
            >
              {sliderImages?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onClick={handleSlideClick}
                  >
                    <Image src={item.src} alt={item.alt} fill priority />
                    {/* <div className="slide-overlay">
                      <div className="slide-content">
                        <h1 className="slide-title">{item.title}</h1>
                        <div className="slide-hint">
                          <span>{item.title}</span>
                        </div>
                        <p className="slide-description">{item.description}</p>
                      </div>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons - Outside Swiper */}
            {/* <button
              className="swiper-button-prev custom-nav-btn"
              onClick={handlePrevClick}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <button
              className="swiper-button-next custom-nav-btn"
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button> */}
          </div>
        </div>
        {/* <BannerContent /> */}
      </section>
    </Layout>
  );
}
