import React from "react";
import style from "./Styles/Card.module.css";

const Card = ({ name, image, origin, species, id }) => {
  return (
    <div className={style.main_card}>
      <div className={style.form_card}>
        <img src={image} alt={name} className={style.img_card}/>
        <h2 className={style.text_card}>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
