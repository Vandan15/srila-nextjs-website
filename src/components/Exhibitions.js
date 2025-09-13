import { Fragment, memo, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionContainer from "../layout/SectionContainer";

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
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <Fragment>
      <SectionContainer
        pageId="exhibitions"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Exhibitions."
      >
        <div className="portfolio-items mb-50">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry gutter="15px">
              {exhibitionData.map((item) => (
                <div className="item" key={item.id} style={{
                  breakInside: "avoid",
                  marginBottom: "15px"
                }}>
                  <a className="image-link" href={item?.src} style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }} onMouseEnter={(e) => {
                    const figcaption = e.currentTarget.querySelector('figcaption');
                    if (figcaption) figcaption.style.opacity = '1';
                  }} onMouseLeave={(e) => {
                    const figcaption = e.currentTarget.querySelector('figcaption');
                    if (figcaption) figcaption.style.opacity = '0';
                  }}>
                    <figure style={{position: "relative", margin: 0}}>
                      <img
                        src={item?.src}
                        alt={item?.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          verticalAlign: "top"
                        }}
                        onLoad={() => handleImageLoad(item.id)}
                        loading="lazy"
                      />
                      <figcaption style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        margin: 0,
                        opacity: 0,
                        transition: "opacity 0.3s ease"
                      }}>
                        <p style={{
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: "500",
                          whiteSpace: "nowrap"
                        }}>{item?.caption}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default memo(Exhibitions);
