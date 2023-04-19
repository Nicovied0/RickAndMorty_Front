import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, clearDetails } from "../redux/actions/actions";
import style from "./Styles/Detail.module.css";

function Details(props) {
  const details = useSelector((i) => i.details);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetails(id));
    return function () {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);

  if (details.length === 0) {
    return <img src={details?.image} alt={details?.name} />;
  } else if (details !== [] && details.image === details.image) {
    return (
      <div className={style.container}>
        <div className={style.div_details}>
          <div className={style.div_img_details}>
            <img
              className={style.img_details}
              src={details.image}
              alt={details.name}
            />
            <h1 className={style.text_details}>{details.name}</h1>
          </div>
          <div className={style.div_div_details}>
            <h2>Origin: {details.origin?.name}</h2>
            <h2>Species: {details.species}</h2>
            <h2>Gender: {details.gender}</h2>
            <h2>Status: {details.status}</h2>
          </div>
        </div>
      </div>
    );
  } else if (!details) {
    return <h2>Error</h2>;
  }
}

export default Details;
