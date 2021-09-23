import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faTwitter,
    faGithub,
    faMedium
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Created by A Dalao</h3>
        <a href="https://www.linkedin.com/in/dalao/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/dalao" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/dalao" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://medium.com/@dalao" className="medium social">
            <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
    </div>
  );
}