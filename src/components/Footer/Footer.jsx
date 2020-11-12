import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Github from "../../assets/github.svg";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="names">
        <span>Hecho con &#128153; por: &nbsp;
          <a 
            href="https://github.com/fazd" 
            target="_blank"
            rel="noreferrer">
              Fabio Zapata
          </a>, &nbsp;
          <a 
            href="http://github.com/javillarreal"
            target="_blank"
            rel="noreferrer">
              Jorge Villareal
          </a> y &nbsp; 
          <a 
            href="https://github.com/jdtejeda"
            target="_blank"
            rel="noreferrer">
              José Tejeda
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
