// Extrenal Imports
import React, { useState } from "react";
import { connect } from "react-redux";

// Material UI Themed Assets
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// Local Imports
import styles from "../../assets/jss/components/page-elements/searchCountriesFieldStyle.js";
import { fetchCountries } from "../../actions/countriesActions";

const useStyles = makeStyles(styles);

const SearchCountriesField = ({ submitSearchTerm }) => {
  const classes = useStyles();

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
    <form className={classes.search} noValidate onSubmit={onSubmit}>
      <IconButton
        aria-label="search country"
        type="submit"
        className={classes.searchIcon}
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={onChange}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitSearchTerm: (searchTerm) => {
    dispatch(fetchCountries(searchTerm));
  },
});

export default connect(null, mapDispatchToProps)(SearchCountriesField);
