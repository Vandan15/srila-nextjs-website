import { useContext, useState } from "react";
import { WatsonContext } from "../context/Context";
import useClickOutside from "../useClickOutside";
import {
  BriefcaseIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FoldersIcon,
  HouseLineIcon,
  LineSegmentIcon,
  ListIcon,
  SidebarIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { TwitterLogoIcon } from "@phosphor-icons/react";
import { YoutubeLogoIcon } from "@phosphor-icons/react";
import { DribbbleLogoIcon } from "@phosphor-icons/react";

const menus = [
  { id: 1, icon: <HouseLineIcon size={20} />, name: "Home", href: "home" },
  
  {
    id: 4,
    icon: <BriefcaseIcon size={20} />,
    name: "Portfolio",
    href: "portfolio",
  },
  {
    id: 2,
    icon: <FoldersIcon size={20} />,
    name: "Exhibitions",
    href: "exhibitions",
  },
  { id: 3, icon: <UserIcon size={20} />, name: "About Me", href: "about" },
  { 
    id: 6,
    icon: <EnvelopeSimpleIcon size={20} />,
    name: "Contact",
    href: "contact",
  },
];

const Sidebar = () => {
  const { changeSection, section } = useContext(WatsonContext);
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  const currentYear = new Date().getFullYear();

  return (
    <header>
      <div className={`header-content ${toggle ? "on" : ""}`}>
        {/*Mobile Header*/}
        <div className="header-mobile">
          <a className="header-toggle" onClick={() => setToggle(!toggle)}>
            <ListIcon color="white" size={20}/>
          </a>
          <h2>Srila Mookherjee</h2>
        </div>
        {/*Main Header*/}
        <div className="header-main" data-simplebar="" ref={domNode}>
          <div className="image-container">
            {/* <h2 className="header-name">Srila Mookherjee</h2> */}
            <img src="img/srila_logo.jpg" alt="profile-pic" />
          </div>
          {/*Nav Menus*/}
          <nav className="nav-menu">
            <ul>
              {menus.map((menu, i) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => {
                      changeSection(menu.href);
                        setToggle(false);
                    }}
                    className={`pt-link ${
                      menu.href === section ? "active" : ""
                    }`}
                  >
                    <span className="nav-menu-icon">{menu.icon}</span>
                    {menu.name}{" "}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </nav>
          {/*Nav Footer*/}
          <div className="nav-footer">
            {/*Social Links*/}
            <ul className="social">
              <li>
                <a href="#">
                  <FacebookLogoIcon size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterLogoIcon size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <YoutubeLogoIcon size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <DribbbleLogoIcon size={20} />
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <BehanceLogoIco size={20} />
                </a>
              </li> */}
            </ul>
            {/*Copyright Text*/}
            <div className="copy">
              <p>
                {currentYear} © Srila Mookherjee.
                <br />
                All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Sidebar;
