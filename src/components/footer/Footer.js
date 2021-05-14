import React from "react";
import "./Footer.css";
import { NavLink, HashRouter } from "react-router-dom";
import AdamG from "../../assets/images/resources/AdamG.png";
import linkedin_icon from "../../assets/images/icons/linkedin_icon.png";
import github_icon from "../../assets/images/icons/github_icon.png";
import mail_icon from "../../assets/images/icons/mail_icon.png";
import upwork_icon from "../../assets/images/icons/upwork_icon.png";
import Adam_Gawish_Resume_Web from "../../assets/images/resources/Adam_Gawish_Resume_Web.pdf";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-wrapper">
      <div className="menu-wrapper">
        <ul className="menu">
          <HashRouter>
          <p>Menu</p>

          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
          <li>
            <a
              href={Adam_Gawish_Resume_Web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </HashRouter>
        </ul>
      </div>
      <ul className="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/adamgawish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Linkedin" src={linkedin_icon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DangerOK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Github" src={github_icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.upwork.com/freelancers/~01006e7a77f7dfa32a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ maxHeight: "52px" }}>
              <img
                alt="Upwork"
                style={{ maxHeight: "100%" }}
                src={upwork_icon}
              />
            </div>
          </a>
        </li>
        <li>
          <NavLink to={"/Contact"}>
            <img alt="Email" src={mail_icon} />
          </NavLink>
        </li>
      </ul>
      <div className="footer-img">
        <div className="img-wrapper">
          <img src={AdamG} alt="site thumbnail" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
