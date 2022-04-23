import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import config from "../../siteconfig";

//Styles
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} container py-4`}>
      <div className="row">
        <div className="col-8 col-md-6 p-2">
          <Link to="/">
            <h1 className={styles.logo} data-text={config.AUTHOR}>{config.AUTHOR}</h1>
          </Link>
        </div>
        <div className="col-4 col-md-6 d-flex flex-column justify-content-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
