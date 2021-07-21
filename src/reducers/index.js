// Extenal Imports
import { combineReducers } from "redux";

// Local Imports
import searchedCountriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
  searchedCountries: searchedCountriesReducer,
});

export default rootReducer;
