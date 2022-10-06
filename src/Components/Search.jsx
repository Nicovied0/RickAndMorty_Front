import React, { useState } from "react";
import style from "./Styles/Search.module.css";
import { getByName } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [searchPj, setSearchPj] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchPj(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchPj));
  };
console.log(searchPj)
  return (
    <div className={style.searchbar_container}>
      <input
        className={`${style.searchbar}`}
        type="text"
        onChange={handleInput}
        placeholder="Search..."
      />
      <button
        className={`${style.searchbar_button}`}
        type="submit"
        onClick={handleSubmit}
      >
        Go
      </button>
    </div>
  );
};

export default Search;
