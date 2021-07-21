import * as actions from "../actions/countriesActions";

const initialState = {
  countries: [],
  loading: false,
  hasErrors: false,
};

const searchedCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_COUNTRIES:
      return { ...state, loading: true };
    case actions.SEARCH_COUNTRIES_SUCCESS:
      return { countries: action.payload, loading: false, hasErrors: false };
    case actions.SEARCH_COUNTRIES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default searchedCountriesReducer;
