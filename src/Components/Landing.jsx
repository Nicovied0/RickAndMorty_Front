import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Landing.css";

const Landing = () => {
  return (
    <div className="backLanding">
      <div className="containerLanding">
        <h2 className="textLanding">Bienvendio A Ricardo y Martin</h2>
        <Link to="/Home">
          <button className="btnLanding">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
