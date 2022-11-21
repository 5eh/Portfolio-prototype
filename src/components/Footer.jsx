import React from "react";
import footerstyles from "./footerstyles.css";

const Footer = () => {
  return (
    <>
      <hr id="footerhr" />
      <div className="footer">
        <div className="navFooter ">
          <div className="left">
            <a href="resume">
              <span className="resume"> RESUME </span>
            </a>
            <a href="contact">
              <span className="contact"> CONTACT </span>
            </a>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="poaps">
                  <span className="poaps"> POAPS </span>
                </a>
              </li>
              <li>
                <a href="blogs">
                  <span className="hackathons"> HACKATHONS </span>
                </a>
              </li>
              <li>
                <a href="nfts">
                  <span className="nfts"> NFTs </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
