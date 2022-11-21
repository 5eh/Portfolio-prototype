import React from "react";
import navbarstyles from "./navbarstyles.css";

// insert Minecraft 5eh head

const Navbar = () => {
  return (
    <div className="navHeader ">
      <h1>
        <span className="name"> 5eh </span> the builder
      </h1>
      <ul>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#github">Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
