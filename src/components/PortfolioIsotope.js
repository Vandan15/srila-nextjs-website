import Isotope from "isotope-layout";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";

const imageData = [
  {
    id: 1,
    src: "/img/portfolio/17.jpg",
    alt: "Image 1",
    caption: "View Image",
  },
  {
    id: 2,
    src: "/img/portfolio/25.jpg",
    alt: "Image 2",
    caption: "View Image",
  },
  {
    id: 3,
    src: "/img/portfolio/2_blue_shell_pieces.jpg",
    alt: "Image 3",
    caption: "View Image",
  },
  {
    id: 4,
    src: "/img/portfolio/2_blue_vases_n_dimpled_bottle.jpg",
    alt: "Image 4",
    caption: "View Image",
  },
  {
    id: 5,
    src: "/img/portfolio/2_red_tall_bowls.jpg",
    alt: "Image 5",
    caption: "View Image",
  },
  {
    id: 6,
    src: "/img/portfolio/4F3A0858.jpg",
    alt: "Image 6",
    caption: "View Image",
  },
  {
    id: 7,
    src: "/img/portfolio/4F3A0873.jpg",
    alt: "Image 7",
    caption: "View Image",
  },
  {
    id: 8,
    src: "/img/portfolio/4F3A0893.jpg",
    alt: "Image 8",
    caption: "View Image",
  },
  {
    id: 9,
    src: "/img/portfolio/4F3A0911.jpg",
    alt: "Image 9",
    caption: "View Image",
  },
  {
    id: 10,
    src: "/img/portfolio/DSC_2368.JPG",
    alt: "Image 10",
    caption: "View Image",
  },
  {
    id: 11,
    src: "/img/portfolio/IMG_5437.jpg",
    alt: "Image 11",
    caption: "View Image",
  },
  {
    id: 12,
    src: "/img/portfolio/IMG_5480.jpg",
    alt: "Image 12",
    caption: "View Image",
  },
  {
    id: 13,
    src: "/img/portfolio/IMG_5486.jpg",
    alt: "Image 13",
    caption: "View Image",
  },
  {
    id: 14,
    src: "/img/portfolio/Perspective_4.jpg",
    alt: "Image 14",
    caption: "View Image",
  },
  {
    id: 15,
    src: "/img/portfolio/Perspective_7.jpg",
    alt: "Image 15",
    caption: "View Image",
  },
  {
    id: 16,
    src: "/img/portfolio/perspective_sreela_13_1_23_01582.jpg",
    alt: "Image 16",
    caption: "View Image",
  },
  {
    id: 17,
    src: "/img/portfolio/perspective_sreela_3_1_24_0017.jpg",
    alt: "Image 17",
    caption: "View Image",
  },
  {
    id: 18,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0026.jpg",
    alt: "Image 18",
    caption: "View Image",
  },
  {
    id: 19,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0037.jpg",
    alt: "Image 19",
    caption: "View Image",
  },
  {
    id: 20,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0049.jpg",
    alt: "Image 20",
    caption: "View Image",
  },
  {
    id: 21,
    src: "/img/portfolio/Perspective_Sreela_Mukherjee_0106.jpg",
    alt: "Image 21",
    caption: "View Image",
  },
  {
    id: 22,
    src: "/img/portfolio/perspective_srila_mookherjee_00285.jpg",
    alt: "Image 22",
    caption: "View Image",
  },
  {
    id: 23,
    src: "/img/portfolio/Srila-mookherjee_selects_07.jpg",
    alt: "Image 23",
    caption: "View Image",
  },
  {
    id: 24,
    src: "/img/portfolio/Srila_Mookherjee_00037.jpg",
    alt: "Image 24",
    caption: "View Image",
  },
  {
    id: 25,
    src: "/img/portfolio/Srila_Mookherjee_00039.jpg",
    alt: "Image 25",
    caption: "View Image",
  },
  {
    id: 26,
    src: "/img/portfolio/Srila_Mookherjee_00878.jpg",
    alt: "Image 26",
    caption: "View Image",
  },
  {
    id: 27,
    src: "/img/portfolio/yellow_dimpled_bottle_n_vase.jpg",
    alt: "Image 27",
    caption: "View Image",
  },
];

const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // commented for future use
  // const handleFilterKeyChange = useCallback(
  //   (key) => () => {
  //     setFilterKey(key);
  //   },
  //   []
  // );

  // const activeBtn = (value) => (value === filterKey ? "active" : "");

  // Context
  // const { changeSection } = useContext(WatsonContext);

  return (
    <Fragment>
      <SectionContainer
        pageId="portfolio"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Portfolio."
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
        <div className="row portfolio-items mb-50">
          {/*Portfolio Item*/}
          {imageData.map((item) => (
            <div className="item col-lg-4 col-sm-6 brand graphic" key={item.id}>
              <a className="image-link" href={item?.src}>
                <figure>
                  <img src={item?.src} alt={item?.alt} />
                  <figcaption>
                    <p>{item?.caption}</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          ))}

          {/* commented for future use */}
          {/* <div className="item col-lg-4 col-sm-6 design">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-2.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 design graphic">
            <a
              className="video-link"
              href="https://www.youtube.com/watch?v=k_okcNVZqqI"
            >
              <figure>
                <img src="img/portfolio/img-3.jpg" alt="" />
                <figcaption>
                  <h4>Creative Cup</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 design">
            <a className="image-link" href="img/portfolio/img-4.jpg">
              <figure>
                <img src="img/portfolio/img-4.jpg" alt="" />
                <figcaption>
                  <h4>Business Card</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-5.jpg" alt="" />
                <figcaption>
                  <h4>Back Pack</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 design">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-6.jpg" alt="" />
                <figcaption>
                  <h4>Door Hangar</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-7.jpg">
              <figure>
                <img src="img/portfolio/img-7.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 brand">
            <a className="image-link" href="img/portfolio/img-8.jpg">
              <figure>
                <img src="img/portfolio/img-8.jpg" alt="" />
                <figcaption>
                  <h4>Creative Flyer</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="video-link"
              href="https://www.youtube.com/watch?v=k_okcNVZqqI"
            >
              <figure>
                <img src="img/portfolio/img-9.jpg" alt="" />
                <figcaption>
                  <h4>Mobile App</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-10.jpg">
              <figure>
                <img src="img/portfolio/img-10.jpg" alt="" />
                <figcaption>
                  <h4>Cup Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-11.jpg" alt="" />
                <figcaption>
                  <h4>Creative Box</h4>
                  <p>brand</p>
                </figcaption>
              </figure>
            </a>
          </div> */}
        </div>
      </SectionContainer>
      {/* <SingleWork /> */}
    </Fragment>
  );
};
export default memo(PortfolioIsotope);
