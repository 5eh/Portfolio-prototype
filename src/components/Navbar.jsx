import React from "react";
import navbarstyles from "./navbarstyles.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <hr id="navbarhr" />
        <div className="navHeader ">
          <a href="home">
            <span className="name"> 5eh </span>
          </a>
          <ul>
            <li>
              <a href="portfolio">
                <span className="projects"> Projects </span>
              </a>
            </li>
            <li>
              <a href="blogs">
                <span className="blogs"> Blogs </span>
              </a>
            </li>
            <li>
              <a href="github">
                <span className="github"> Github </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
