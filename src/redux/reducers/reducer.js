import {
  // GET_CHARACTER,
  GET_DETAILS,
  GET_EPISODES,
  GET_BY_NAME,
  CLEAR_PAGE,
  ORDER,
  POST,
  CLEAR_DETAILS,
  GET_API_CHARACTER,
  FILTER_BY_SPECIE,
} from "../actions/actions";

const initialState = {
  characters: [],
  details: [],
  allCharacters: [],
  episodes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_API_CHARACTER:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        details: [],
      };

    case GET_BY_NAME:
      let characters = state.characters;
      let allCharacters = state.allCharacters;
      if (characters.length !== []) {
        return {
          ...state,
          characters: action.payload,
        };
      } else {
        return {
          ...state,
          characters: allCharacters,
        };
      }

    case ORDER:
      const orderName =
        action.payload === "A-Z"
          ? state.characters.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.characters.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        characters: orderName,
      };

    case FILTER_BY_SPECIE:
      const filtredBySpecies = state.allCharacters;
      let speciesFilteredBC =
        action.payload === "All"
          ? filtredBySpecies
          : filtredBySpecies.filter((el) => el.species === action.payload);

      console.log(action.payload);
      return {
        ...state,
        characters: speciesFilteredBC,
      };

    case CLEAR_PAGE:
      return {
        ...state,
        details: undefined,
      };

    default:
      return state;
  }
}

export default rootReducer;
