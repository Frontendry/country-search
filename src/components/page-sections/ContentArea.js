// External Imports
import React from "react";

// Map Component
import Map from "../page-elements/Map";

// Data Visualization Component
import ChartDisplay from "../page-elements/ChartDisplay";

const ContentArea = () => {
  return (
    <div className="content-section mt-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <Map />
            <ChartDisplay className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
