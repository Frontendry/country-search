// Extrenal Imports
import React, { useState } from "react";
import { connect } from "react-redux";

// Material UI Themed Assets
import { TextField, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// Local Imports
import { fetchCountries } from "../../actions/countriesActions";

const SearchCountriesField = ({ submitSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(searchTerm === "")) {
      submitSearchTerm(searchTerm);
    }
  };
  return (
    <form noValidate onSubmit={onSubmit}>
      {/* Text Input based on Material UI */}
      <TextField
        id="search-country"
        name="search-country"
        label="Search Country"
        value={searchTerm}
        onChange={onChange}
      />

      {/* Submit Button based on Material UI */}
      <IconButton color="primary" aria-label="search country" type="submit">
        <SearchOutlinedIcon />
      </IconButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitSearchTerm: (searchTerm) => {
    dispatch(fetchCountries(searchTerm));
  },
});

export default connect(null, mapDispatchToProps)(SearchCountriesField);
