import Isotope from "isotope-layout";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";

const Exhibitions = () => {
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
        pageId="exhibitions"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Exhibitions."
      >
        <div className="row portfolio-items mb-50">
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a
              className="image-link"
              href="img/exhibitions/exhibitions_combo.jpg"
            >
              <figure>
                <img src="img/exhibitions/exhibitions_combo.jpg" alt="" />
                <figcaption>
                  <p>View Image</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a
              className="image-link"
              href="img/exhibitions/exhibitions_Selects_05.jpg"
            >
              <figure>
                <img src="img/exhibitions/exhibitions_Selects_05.jpg" alt="" />
                <figcaption>
                  <p>View Image</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default memo(Exhibitions);
