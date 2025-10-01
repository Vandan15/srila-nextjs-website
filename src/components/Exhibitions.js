import { Fragment, memo, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { FoldersIcon, MapPin, CalendarBlank } from "@phosphor-icons/react";

const exhibitionSections = [
  {
    title: "FANTASTICAL CREATURES",
    date: "August 2025",
    location: "Tejas Gallery, Kolkata",
    description: [
      "Fantastical Jellyfish",
      "The fantastical jellyfish are creatures from a dream, with vibrant, otherworldly colours and patterns. The bell-shaped bodies gleam with hues not found in nature and their tendrils twist and glow creating an ethereal, dreamlike presence.",
      "As a fantastical or spirited animal the jellyfish is a symbol that inspires us to glide through life with grace, faith, strength and a readiness to adapt to whatever comes our way.",
    ],
    images: [
      {
        src: "/img/exhibitions/srilamookherjee_fantastical.jpeg",
        alt: "Srila Mookherjee Fantastical",
      },
      {
        src: "/img/exhibitions/srilamookherjee_art.jpeg",
        alt: "Srila Mookherjee Art",
      },
      {
        src: "/img/exhibitions/srilamookherjee_newspaper.jpeg",
        alt: "Srila Mookherjee Newspaper",
      },
    ],
  },
  {
    title: "THE HOURGLASS",
    date: "December 2023",
    location: "Bikaner House",
    description: [
      "A Contemporary Interpretation of the Historical Glass Perfume Bottle.",
      "These vibrant coloured bottles are made through the glass blowing process. Each is a one-of-a-kind piece inspired by the ancient glass perfume bottles.",
    ],
    images: [
      {
        src: "/img/exhibitions/hourglass-invitation2.jpeg",
        alt: "Hourglass Invitation 2 Artwork",
      },
      {
        src: "/img/exhibitions/srilamookherjee-art3.jpeg",
        alt: "Srila Mookherjee Art",
      },
      {
        src: "/img/exhibitions/srilaglass-art4.jpeg",
        alt: "Srila Glass Art 4",
      },
    ],
  },
  {
    title: "BEYOND THE FURNACE",
    date: "March 2023",
    location: "Gallery Art Motif",
    description: [
      "Srila Mookherjee's artistic odyssey provides a glimpse into the transformative power of creativity and the ever-evolving nature of artistic expression.",
      "This exhibition is a narrative that beautifully captures the evolution of her personal journey as an artist in the realm of glass.",
      "It's a testament to more than three decades of dedication showcasing signature forms and techniques developed over the years.",
    ],
    images: [
      {
        src: "/img/exhibitions/srilamookherjee_beyond_furnace.jpeg",
        alt: "Srila Mookherjee Beyond Furnace",
      },
    ],
  },
  {
    title: "GLASS MENAGERIE",
    date: "January 2023",
    location: "Bikaner House",
    description: [
      "Indian art, both performance and visual based, is centred on the ancient theory of Rasa which means essence which in turn are created by bhavas or the states of mind which evoke the emotions.  Each emotion is represented by a colour and it is through this association that a work of art is crafted by the maker and that evokes a response from the viewer. So, whether it's the ancient Rasa, or the modern mood board, colour represents and arouses emotion both in the creator and in the viewer.",
      "This collection shows that the artist's perception and viewer's interpretation could be diametrically opposite and yet exist in harmony.",
    ],
    images: [
      {
        src: "/img/exhibitions/hourglass-save-date.jpeg",
        alt: "Hourglass Save the Date Artwork",
      },
      {
        src: "/img/exhibitions/hourglass-club.jpeg",
        alt: "Hourglass Club Artwork",
      },
      {
        src: "/img/exhibitions/srilamookherjee-art5.jpeg",
        alt: "Srila Mookherjee Art",
      },
      {
        src: "/img/exhibitions/srilamookherjee-art6.jpeg",
        alt: "Srila Mookherjee Art",
      },
    ],
  },
  {
    title: "SERENDIPITY",
    date: "2019",
    location: "Goa",
    description: [
      "The Glass Galaxy",
      "'The Glass Galaxy' is a tribute to the many dreamers, thinkers, scientists and artists who have brought us closer to the universe we live in.",
      "The shapes, textures and colours of celestial bodies are a glassblower's dream and the perfect expression of the spectacle that is our cosmic universe. Furthermore, the ethereal and mysterious quality of planets and stars are mirrored in the medium of glass.",
    ],
    images: [
      {
        src: "/img/exhibitions/exhibitions_combo.jpg",
        alt: "Exhibition Combo",
      },
    ],
  },
];

const Exhibitions = () => {
  return (
    <Fragment>
      <SectionContainer
        pageId="exhibitions"
        pageIcon={<FoldersIcon />}
        pageTitle="Exhibitions"
      >
        <div className="portfolio-items mb-50">
          {exhibitionSections.map((section, idx) => (
            <div className="exhibition-section" key={idx}>
              <div className="exhibition-section-title">{section.title}</div>
              <div className="exhibition-section-meta">
                <span className="exhibition-section-location">
                  <MapPin size={18} weight="bold" />
                  {section.location}
                </span>
                <span className="exhibition-section-date-row">
                  <CalendarBlank size={18} weight="bold" />
                  <span className="exhibition-section-date">
                    {section.date}
                  </span>
                </span>
              </div>
              <div className="exhibition-section-description">
                {Array.isArray(section.description) ? (
                  section.description.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{section.description}</p>
                )}
              </div>
              <div className="exhibition-image-grid">
                {section.images.map((img, i) => (
                  <div className="exhibition-image-card" key={i}>
                    <a href={img.src} className="exhibition-image-link">
                      <div className="exhibition-image-wrapper">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="exhibition-img"
                          loading="lazy"
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Fragment>
  );
};

export default memo(Exhibitions);
