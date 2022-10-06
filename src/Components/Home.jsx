import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, byOrder } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
// import Loader from "../assets/Loading.gif"
import style from "./Styles/Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  // function handleClick(e){
  //   e.preventDefault();
  //   dispatch(getCharacters())
  // }

  //un estado que nos tome la pagina actual
  //un estado que nos tome la cantidad de cards por pagina
  //estado con arreglo de paginas

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  //necesito 3 variables para saber cuantos items tengo y saber cuantas paginas voy a necesitar
  let lastItemPerPage = currentPage * itemsPerPage; // --> 4 * 5 --> 20

  let firsItemPerPage = lastItemPerPage - itemsPerPage; // 20 - 5  --> 15

  let currentPageItems = allCharacters?.slice(firsItemPerPage, lastItemPerPage);

  let pages = [];
  //                                    21       /   5
  const numOfPages = Math.ceil(allCharacters.length / itemsPerPage); // --> resultado total de paginas === 5

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }

  //with the button e preventdefault  i go to the page of the pressed button
  function pagination(e, page) {
    // console.log(page - 1, "soy page ");
    e.preventDefault();
    setCurrentPage(page);
  }

  //reder to paginations
  const renderPages = pages.map((page) => (
    <li key={page} style={{ display: "flex", margin: "0.2rem" }}>
      <div >
        <button
          onClick={(e) => pagination(e, page)}
          style={{width:"1.5rem",padding:"0.2rem", backgroundColor: "#414040",color:'#fff' }}
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

  // function handleCreated(e) {
  //   dispatch(byCreated(e.target.value));
  //   {console.log(e.target.value)}
  // }

  console.log(allCharacters.length);
  if (!allCharacters) {
    return <div className={style.container}>Error</div>;
  } else if (allCharacters.length) {
    // console.log(currentPageItems);
    return (
      <div>
        <Nav />
        {/* order */}
        <div className="orders" style={{display:"flex",alignItems:"center", justifyContent:"center",flexWrap:"wrap"}}>
          <div className="FILTERS">
            <select onChange={(e) => handleOrder(e)}>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            {/* <select onChange={(e) => handleCreated(e)}>
              <option value="All">All</option>
              <option value="Created">Created </option>
              <option value="api">Api</option>
            </select> */}
            
          </div>

          <div className="paginations" style={{display:"flex",alignItems:"center", justifyContent:"center",flexWrap:"wrap"}}>
            {/* pagination */}
            <ul style={{ display:"flex",alignItems:"center", justifyContent:"center",flexWrap:"wrap"}}>
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
