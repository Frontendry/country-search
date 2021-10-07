// Countries Action Types Definition
export const SEARCH_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const SEARCH_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

const fetchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "6365ac3d4dmsh02f138d221ee4d7p1deccajsnf02f93c75af2",
  },
};

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
      /* const response = await fetch(
        `https://api.countrylayer.com/v2/name/${name}?access_key=${process.env.REACT_APP_COUNTRIES_API}`
      ); */

      const response = await fetch(
        `https://restcountries-v1.p.rapidapi.com/name/${name}`,
        fetchOptions
      );

      const data = await response.json();

      console.log(response);
      console.log(data);

      dispatch(searchCountriesSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(searchCountriesFailure());
    }
  };
}
