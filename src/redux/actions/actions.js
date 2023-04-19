import axios from "axios";
export const GET_CHARACTER = "GET_CHARACTER";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_EPISODES = "GET_EPISODES";
export const BYCREATED = "BYCREATED";
export const CLEAR_PAGE = "CLEAR_PAGE";
export const ORDER = "ORDER";
export const POST = "POST";
export const CLEAR_DETAILS = "CLEAR_DETAILS"
// export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";

export const getCharacters = () => {
  return async (dispatch) => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    return dispatch({
      type: GET_CHARACTER,
      payload: res.data.results,
    });
  };
};

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log(res.data, "de action");
      return dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    } catch {
      console.log("error en get detils o no");
    }
  };
}
export function clearDetails() {
  return {
    type: CLEAR_DETAILS,
  };
}

export function getByName(payload) {
  return async function (dispatch) {
    console.log(payload,"soy este")
    //Dispatch que podemos usar gracias a la asincronia provista por el middleware
    try {
      var res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${payload}`
      );
      return dispatch({
        type: GET_BY_NAME,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getEpisodes() {
  return async function (dispatch) {
    const res = await axios.get("https://rickandmortyapi.com/api/episode");
    return dispatch({
      type: GET_EPISODES,
      payload: res.data.results,
    });
  };
}

export function byCreated(payload) {
  return {
    type: BYCREATED,
    payload,
  };
}

export function byOrder(payload) {
  return {
    type: ORDER,
    payload,
  };
}

// export function postCharacter(payload) {
//   return async function (dispatch) {
//     const res = await axios.post(
//       "https://rickmortyap.herokuapp.com/character",
//       payload
//     );
//     return {
//       type: POST,
//       res,
//     };
//   };
// }
export const clearPage = () => {
  return {
    type: CLEAR_PAGE,
  };
};
