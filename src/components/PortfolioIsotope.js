import { Fragment, memo, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionContainer from "../layout/SectionContainer";

const imageData = [
  {
    id: 1,
    src: "/img/portfolio/17.jpg",
    alt: "Image 1",
    caption: "Click to View",
  },
  {
    id: 2,
    src: "/img/portfolio/25.jpg",
    alt: "Image 2",
    caption: "Click to View",
  },
  {
    id: 3,
    src: "/img/portfolio/2_blue_shell_pieces.jpg",
    alt: "Image 3",
    caption: "Click to View",
  },
  {
    id: 4,
    src: "/img/portfolio/2_blue_vases_n_dimpled_bottle.jpg",
    alt: "Image 4",
    caption: "Click to View",
  },
  {
    id: 5,
    src: "/img/portfolio/2_red_tall_bowls.jpg",
    alt: "Image 5",
    caption: "Click to View",
  },
  {
    id: 6,
    src: "/img/portfolio/4F3A0858.jpg",
    alt: "Image 6",
    caption: "Click to View",
  },
  {
    id: 7,
    src: "/img/portfolio/4F3A0873.jpg",
    alt: "Image 7",
    caption: "Click to View",
  },
  {
    id: 8,
    src: "/img/portfolio/4F3A0893.jpg",
    alt: "Image 8",
    caption: "Click to View",
  },
  {
    id: 9,
    src: "/img/portfolio/4F3A0911.jpg",
    alt: "Image 9",
    caption: "Click to View",
  },
  {
    id: 10,
    src: "/img/portfolio/DSC_2368.JPG",
    alt: "Image 10",
    caption: "Click to View",
  },
  {
    id: 11,
    src: "/img/portfolio/IMG_5437.jpg",
    alt: "Image 11",
    caption: "Click to View",
  },
  {
    id: 12,
    src: "/img/portfolio/IMG_5480.jpg",
    alt: "Image 12",
    caption: "Click to View",
  },
  {
    id: 13,
    src: "/img/portfolio/IMG_5486.jpg",
    alt: "Image 13",
    caption: "Click to View",
  },
  {
    id: 14,
    src: "/img/portfolio/Perspective_4.jpg",
    alt: "Image 14",
    caption: "Click to View",
  },
  {
    id: 15,
    src: "/img/portfolio/Perspective_7.jpg",
    alt: "Image 15",
    caption: "Click to View",
  },
  {
    id: 16,
    src: "/img/portfolio/perspective_sreela_13_1_23_01582.jpg",
    alt: "Image 16",
    caption: "Click to View",
  },
  {
    id: 17,
    src: "/img/portfolio/perspective_sreela_3_1_24_0017.jpg",
    alt: "Image 17",
    caption: "Click to View",
  },
  {
    id: 18,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0026.jpg",
    alt: "Image 18",
    caption: "Click to View",
  },
  {
    id: 19,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0037.jpg",
    alt: "Image 19",
    caption: "Click to View",
  },
  {
    id: 20,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0049.jpg",
    alt: "Image 20",
    caption: "Click to View",
  },
  {
    id: 21,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0106.jpg",
    alt: "Image 21",
    caption: "Click to View",
  },
  {
    id: 22,
    src: "/img/portfolio/perspective_srila_mookherjee_00285.jpg",
    alt: "Image 22",
    caption: "Click to View",
  },
  {
    id: 23,
    src: "/img/portfolio/Srila-mookherjee_selects_07.jpg",
    alt: "Image 23",
    caption: "Click to View",
  },
  {
    id: 24,
    src: "/img/portfolio/Srila_Mookherjee_00037.jpg",
    alt: "Image 24",
    caption: "Click to View",
  },
  {
    id: 25,
    src: "/img/portfolio/Srila_Mookherjee_00039.jpg",
    alt: "Image 25",
    caption: "Click to View",
  },
  {
    id: 26,
    src: "/img/portfolio/Srila_Mookherjee_00878.jpg",
    alt: "Image 26",
    caption: "Click to View",
  },
  {
    id: 27,
    src: "/img/portfolio/yellow_dimpled_bottle_n_vase.jpg",
    alt: "Image 27",
    caption: "Click to View",
  },
];

const PortfolioIsotope = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <Fragment>
      <SectionContainer
        pageId="portfolio"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Portfolio"
      >
        {/*Portfolio Filter*/}
        {/* <div className="row">
          <div className="col-md-12 portfolio-filter text-center">
            <ul>
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                All
              </li>
              <li
                className={`c-pointer ${activeBtn("brand")}`}
                onClick={handleFilterKeyChange("brand")}
                data-filter=".brand"
              >
                Brand
              </li>
              <li
                className={`c-pointer ${activeBtn("design")}`}
                onClick={handleFilterKeyChange("design")}
                data-filter=".design"
              >
                Design
              </li>
              <li
                className={`c-pointer ${activeBtn("graphic")}`}
                onClick={handleFilterKeyChange("graphic")}
                data-filter=".graphic"
              >
                Graphic
              </li>
            </ul>
          </div>
        </div> */}
        {/*Portfolio Items*/}
        <div className="portfolio-items mb-50">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry gutter="15px">
              {imageData.map((item) => (
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
      {/* <SingleWork /> */}
    </Fragment>
  );
};
export default memo(PortfolioIsotope);
