import { Fragment, memo, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { FoldersIcon } from "@phosphor-icons/react";

const exhibitionData = [
  {
    id: 1,
    src: "/img/exhibitions/exhibitions_combo.jpg",
    alt: "Exhibition Combo",
    caption: "Click to View",
  },
  {
    id: 2,
    src: "/img/exhibitions/exhibitions_Selects_05.jpg",
    alt: "Exhibition Selects 05",
    caption: "Click to View",
  },
  {
    id: 3,
    src: "/img/exhibitions/srilamookherjee_art_2.jpeg",
    alt: "Srila Mookherjee Art 2",
    caption: "Click to View",
  },
  {
    id: 4,
    src: "/img/exhibitions/srilamookherjee_art.jpeg",
    alt: "Srila Mookherjee Art",
    caption: "Click to View",
  },
  {
    id: 5,
    src: "/img/exhibitions/srilamookherjee_beyond_furnace.jpeg",
    alt: "Srila Mookherjee Beyond Furnace",
    caption: "Click to View",
  },
  {
    id: 6,
    src: "/img/exhibitions/srilamookherjee_fantastical.jpeg",
    alt: "Srila Mookherjee Fantastical",
    caption: "Click to View",
  },
  {
    id: 7,
    src: "/img/exhibitions/srilamookherjee_newspaper.jpeg",
    alt: "Srila Mookherjee Newspaper",
    caption: "Click to View",
  },
  {
    id: 8,
    src: "/img/exhibitions/glass-menargie.jpeg",
    alt: "Glass Menagerie Artwork",
    caption: "Click to View",
  },
  {
    id: 9,
    src: "/img/exhibitions/hourglass-anchor.jpeg",
    alt: "Hourglass Anchor Artwork",
    caption: "Click to View",
  },
  {
    id: 10,
    src: "/img/exhibitions/hourglass-club.jpeg",
    alt: "Hourglass Club Artwork",
    caption: "Click to View",
  },
  {
    id: 11,
    src: "/img/exhibitions/hourglass-event.jpeg",
    alt: "Hourglass Event Artwork",
    caption: "Click to View",
  },
  {
    id: 12,
    src: "/img/exhibitions/hourglass-invitation.jpeg",
    alt: "Hourglass Invitation Artwork",
    caption: "Click to View",
  },
  {
    id: 13,
    src: "/img/exhibitions/hourglass-invitation2.jpeg",
    alt: "Hourglass Invitation 2 Artwork",
    caption: "Click to View",
  },
  {
    id: 14,
    src: "/img/exhibitions/hourglass-save-date.jpeg",
    alt: "Hourglass Save the Date Artwork",
    caption: "Click to View",
  },
  {
    id: 15,
    src: "/img/exhibitions/srilaglass-art4.jpeg",
    alt: "Srila Glass Art 4",
    caption: "Click to View",
  },
  {
    id: 16,
    src: "/img/exhibitions/srilamookherjee-art3.jpeg",
    alt: "Srila Mookherjee Art 3",
    caption: "Click to View",
  },
  {
    id: 17,
    src: "/img/exhibitions/srilamookherjee-art5.jpeg",
    alt: "Srila Mookherjee Art 5",
    caption: "Click to View",
  },
  {
    id: 18,
    src: "/img/exhibitions/srilamookherjee-art6.jpeg",
    alt: "Srila Mookherjee Art 6",
    caption: "Click to View",
  },
];

const Exhibitions = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Fragment>
      <SectionContainer
        pageId="exhibitions"
        pageIcon={<FoldersIcon />}
        pageTitle="Exhibitions"
      >
        <div className="portfolio-items mb-50">
          {exhibitionData.map((item) => (
            <div className="item exhibition-image-item" key={item.id}>
              <a className="image-link exhibition-image-link" href={item?.src}>
                <img
                  src={item?.src}
                  alt={item?.alt}
                  className="exhibition-img"
                  onLoad={() => handleImageLoad(item.id)}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default memo(Exhibitions);
