import React from "react";
import "./Links.css";

import linkedin_icon from "../../../assets/images/icons/linkedin_icon.png";
import github_icon from "../../../assets/images/icons/github_icon.png";
import resume from "../../../assets/images/icons/resume.png";

import Adam_Gawish_Resume_Web from "../../../assets/images/resources/Adam_Gawish_Resume_Web.pdf";

const Links = props => {
  return (
    <div className="links-wrapper">
      <ul className="links-list">
        <li>
          <a
            href="https://www.linkedin.com/in/adamgawish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links-img-wrapper">
              <img alt="LinkedIn" src={linkedin_icon} />
            </div>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={Adam_Gawish_Resume_Web}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links-img-wrapper">
              <img alt="Resume" src={resume} className="resume-image" />
            </div>
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DangerOK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links-img-wrapper">
              <img alt="Github" src={github_icon} />
            </div>
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
