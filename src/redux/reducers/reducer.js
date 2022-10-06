import {
  GET_CHARACTER, GET_DETAILS, GET_EPISODES, GET_BY_NAME, BYCREATED,
  CLEAR_PAGE, ORDER, POST
} from '../actions/actions'


const initialState = {
  characters: [],
  details: [],
  filteredCharacters: [],
  episodes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload
      }

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      }

    case GET_BY_NAME:
      return {
        ...state,
        characters: action.payload
      }

    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload
      }

    case BYCREATED:
      const createdFilter = action.payload === 'Created' ? state.characters.filter(i => i.created) : state.characters.filter(i => !i.created)
      return {
        ...state,
        characters: action.payload === 'All' ? state.characters : createdFilter
      }

    case ORDER:
      const orderName = action.payload === 'A-Z' ?
        state.characters.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        }) :
        state.characters.sort(function (a, b) {
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
        characters: orderName
      }


    case POST:
      return {
        ...state
      }

    case CLEAR_PAGE:
      return {
        ...state,
        details: undefined,
      };

    default:
      return state
  }
}

export default rootReducer;