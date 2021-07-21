// Countries Action Types Definition
export const SEARCH_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const SEARCH_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

// Countries Action Creators
export const searchCountries = () => ({
  type: SEARCH_COUNTRIES,
});

export const searchCountriesSuccess = (countries) => ({
  type: SEARCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const searchCountriesFailure = () => ({
  type: SEARCH_COUNTRIES_FAILURE,
});

// Countries Middleware
export function fetchCountries(name) {
  return async (dispatch) => {
    dispatch(searchCountries());

    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );

      const data = await response.json();

      dispatch(searchCountriesSuccess(data));
    } catch (error) {
      dispatch(searchCountriesFailure());
    }
  };
}