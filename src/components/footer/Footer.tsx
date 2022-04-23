import React from "react";
import config from "../../siteconfig";

//Styles
import styles from './Footer.module.scss';

const Footer: React.FC = () => {

  let currentDate = new Date();
  return (
    <footer className={`${styles.footer} container mt-5 py-5`}>
      <div className="d-flex flex-wrap justify-content-md-start justify-content-center">
        <div>
          <span className={`p-2 ${styles.copyright}`}>©</span>
          <span className="p-2">{config.AUTHOR}</span>
          <span className="p-2">{currentDate.getFullYear()}</span>
          <span className="p-2 d-none d-md-inline">-</span>                 
        </div>
        <div>
          <span className="p-2">Say HI on</span>
        </div>
        <div>
          <a href={config.LINKEDIN_URL} target="_blank" rel="noreferrer noopener"className="p-2">Linkedin</a>
          <a href={config.GITHUB_URL} target="_blank" rel="noreferrer noopener"className="p-2">Github</a>
          <a href={config.INSTAGRAM_URL} target="_blank" rel="noreferrer noopener"className="p-2">Instagram</a>   
        </div>
      </div>
    </footer>
  );
};

export default Footer;
