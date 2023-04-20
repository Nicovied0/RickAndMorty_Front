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
          </div>
          <div className={style.div_div_details}>
            <h1 className={style.text_details}>{details.name}</h1>
            <div className={style.div_text_details}>
              <div className={style.div_text}>
                <h2 className={style.h2Text}>Origin: </h2>
                <h3>{details.origin?.name}</h3>
              </div>
              <div className={style.div_text}>
                <h2 className={style.h2Text}>Species: </h2>
                <h3>{details.species}</h3>
              </div>
              <div className={style.div_text}>
                <h2 className={style.h2Text}>Gender: </h2>
                <h3>{details.gender}</h3>
              </div>
              <div className={style.div_text}>
                <h2 className={style.h2Text}>Status: </h2>
                {details.status === "Alive" ? (
                  <span className={style.span} />
                ) : (
                  <span className={style.spanDead} />
                )}
                <h3> {details.status} </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!details) {
    return <h2>Error</h2>;
  }
}

export default Details;
