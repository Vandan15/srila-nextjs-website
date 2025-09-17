import { Fragment, memo, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionContainer from "../layout/SectionContainer";
import { FolderIcon, FoldersIcon } from "@phosphor-icons/react";

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
    alt: "Exhibition Select 05",
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
