import axios from "axios";
// export const GET_CHARACTER = "GET_CHARACTER";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_EPISODES = "GET_EPISODES";
export const BYCREATED = "BYCREATED";
export const CLEAR_PAGE = "CLEAR_PAGE";
export const ORDER = "ORDER";
export const POST = "POST";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const GET_API_CHARACTER = "GET_API_CHARACTER";
export const FILTER_BY_SPECIE = "FILTER_BY_SPECIE";
export const FILTER_BY_GERDEN = "FILTER_BY_GERDEN";

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
export function getApiCharacter() {
  return async function (dispatch) {
    try {
      const allCharacters = [];

      let apiUrl = "https://rickandmortyapi.com/api/character";
      for (let i = 0; i < 7; i++) {
        let apiData = await axios.get(apiUrl);

        apiData.data.results?.forEach((el) => {
          return allCharacters.push({
            id: el.id,

            name: el.name,
            species: el.species,
            origin: el.origin.name,
            image: el.image,
            episode: el.episode.map((i) => i),
            characterApi: true,
            gender: el.gender,
          });
        });

        apiUrl = apiData.data.info.next;
      }
      console.log(allCharacters, "soasrasd");
      return dispatch({
        type: GET_API_CHARACTER,
        payload: allCharacters,
      });
      // return allCharacterssss;
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

export const clearPage = () => {
  return {
    type: CLEAR_PAGE,
  };
};

export function filterBySpecie(payload) {
  return {
    type: FILTER_BY_SPECIE,
    payload,
  };
}

export function filterByGerden(payload) {
  return {
    type: FILTER_BY_GERDEN,
    payload,
  };
}
