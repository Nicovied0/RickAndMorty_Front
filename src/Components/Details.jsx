import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
import style from "./Styles/Detail.module.css";

function Details(props) {
  console.log('soy props',props)
  const [loading, setLoading] = useState(false);
  const details = useSelector((i) => i.details);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetails(id));
    setLoading(true);
  }, [dispatch, id]);

  // console.log(details,'detalles')
  // console.log(loading,'cargando')
  //
  if (!details) {
    return <h1>Error</h1>;
  } else if (details.length === 0 || details.id != id) {
    console.log(details);
    return (
      <div className={style.container}>
        <span className={style.loader}></span>
      </div>
    );
  } else {
    console.log(details);
    return ( 
      <div className={style.container}>
        {loading ? (
          <div className={style.div_details}>
            <div className={style.div_img_details}>
              <img
                className={style.img_details}
                src={details?.image}
                alt={details?.name}
              />
              <h1 className={style.text_details}>{details?.name}</h1>
            </div>

            <div className={style.div_div_details}>
              <h2>Origin: {details?.origin}</h2>
              <h2>Species: {details?.species}</h2>
            </div>
          </div>
        ) : (
          <img src={details?.image} alt={details?.name} />
        )}
      </div>
    );
  }
}

export default Details;
