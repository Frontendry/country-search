// External Imports
import React from "react";

// Local Imports
import SearchCountriesField from "../page-elements/SearchCountriesField";

const Header = () => {
  return (
    <header className="page-header position-fixed start-0 top-0 w-100 py-3">
      <div className="container">
        <div className="row">
          <div className="col d-flex">
            <h1 className="app-title">Country Search</h1>
            <div className="ms-auto search ">
              <SearchCountriesField />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
