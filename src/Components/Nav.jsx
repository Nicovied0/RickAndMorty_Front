import React from "react";
import style from "./Styles/Nav.module.css";
import Search from "./Search";
import favicon from "../assets/favicon.png"
// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.nav_container}>
      <img src={favicon} alt="logo" className={style.nav_img} />
      <Search className={style.nav_searchBar} />
      <div></div>

    </div>
  );
};

export default Nav;
