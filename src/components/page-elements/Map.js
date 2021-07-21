// External Import
import React, { useEffect, useState } from "react";

// Module  to add Google Maps
import loadGMaps from "../../scripts/loadGmap";

import GoogleMap from "./GoogleMap";

const Map = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadGMaps(() => {
      setLoaded(true);
    });
  });
  return <div className="maps-component">{loaded ? <GoogleMap /> : ""}</div>;
};

export default Map;
