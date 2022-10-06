import React from "react";
import style from "./Styles/Nav.module.css";
import Search from "./Search";
import icon from "../assets/log.jpg";
// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.nav_container}>
      <img src={icon} alt="logo" className={style.nav_img} />
      <Search />
      {/* <Link to="/addPj">
        <button>Add Character</button>
      </Link> */}
    </div>
  );
};

export default Nav;
