import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Landing.css";

const Landing = () => {
  return (
    <div className="backLanding">
      <div className="containerLanding">
        <Link to="/Home">
          <button className="btnLanding">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
