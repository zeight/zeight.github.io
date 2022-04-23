import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <nav
      className={`${styles.navigation} container d-flex flex-row justify-content-end p-0`}
    >
      <Link className="p-2" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navigation;
