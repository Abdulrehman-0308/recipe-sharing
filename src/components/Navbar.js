import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      Path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      Path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      Path: "/settings",
      icon: faCog,
    },
  ];

  function CloseSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          RecipeHub
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.Path ? "active" : ""}
              to={link.Path}
              key={Link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <Sidebar close={CloseSidebar} links={links} show={showSidebar} />
    </>
  );
}
