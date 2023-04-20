import React from "react";

const Filters = ({filterBySpecie}) => {
  return (
    <div>
      <div>
        <select
        onChange={(e) => {
          filterBySpecie(e);
        }}
        >
          <option disabled selected defaultValue={"All"}>
            All
          </option>
          <option value={"Human"}> Human </option>
          <option value={"NoHuman"}> No Human </option>
        </select>

        {/* <select
        // onChange={(e) => {
        //   nameSort(e);
        // }}
        >
          <option disabled selected defaultValue={null}>
            Gender
          </option>
          <option value={"Male"}> Male </option>
          <option value={"Female"}> Female </option>
        </select>

        <select
        // onChange={(e) => {
        //   nameSort(e);
        // }}
        >
          <option disabled selected defaultValue={null}>
            Status
          </option>
          <option value={"Alive"}> Alive </option>
          <option value={"unknown"}> Unknown </option>
        </select> */}
      </div>
    </div>
  );
};

export default Filters;
