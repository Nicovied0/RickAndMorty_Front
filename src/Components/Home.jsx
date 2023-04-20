import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  byOrder,
  getApiCharacter,
  filterBySpecie,
} from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
// import Loader from "../assets/Loading.gif"
import style from "./Styles/Home.module.css";
import Filters from "./Filters";

const Home = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getApiCharacter());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  let lastItemPerPage = currentPage * itemsPerPage; // --> 4 * 5 --> 20

  let firsItemPerPage = lastItemPerPage - itemsPerPage; // 20 - 5  --> 15

  let currentPageItems = allCharacters.slice(firsItemPerPage, lastItemPerPage);
  console.log(currentPageItems);

  let pages = [];
  //                                    21       /   5
  const numOfPages = Math.ceil(allCharacters.length / itemsPerPage); // --> resultado total de paginas === 5

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }

  function pagination(e, page) {
    e.preventDefault();
    setCurrentPage(page);
  }

  //reder to paginations
  const renderPages = pages.map((page) => (
    <li key={page} style={{ display: "flex", margin: "0.2rem" }}>
      <div>
        <button
          onClick={(e) => pagination(e, page)}
          style={{
            width: "1.5rem",
            padding: "0.2rem",
            backgroundColor: "#414040",
            color: "#fff",
          }}
        >
          {page}
        </button>
      </div>
    </li>
  ));

  function handleOrder(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  function handlefilterSpecie(e) {
    dispatch(filterBySpecie(e.target.value));
  }

  console.log(allCharacters.length);
  if (!allCharacters) {
    return <div className={style.container}>Error</div>;
  } else if (allCharacters.length) {
    // console.log(currentPageItems);
    return (
      <div>
        <Nav />
        <div
          className="orders"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="FILTERS">
            <select onChange={(e) => handleOrder(e)}>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div>
            <select
              onChange={(e) => {
                handlefilterSpecie(e);
              }}
            >
              <option disabled selected defaultValue={"All"}>
                All
              </option>
              <option value={"Human"}> Human </option>
              <option value={"NoHuman"}> No Human </option>
            </select>
          </div>

          <div
            className="paginations"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* pagination */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {renderPages}
            </ul>
          </div>
        </div>
        <div className={style.container}>
          {currentPageItems?.map((e) => {
            return (
              <div key={e.id}>
                <Link
                  to={"/character/" + e.id}
                  className={style.text_container}
                >
                  <Card name={e.name} image={e.image} key={e.id} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <span className={style.loader}></span>
      </div>
    );
  }
};

export default Home;
