import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const mapDefaults = {
  key: process.env.REACT_APP_GOOGLE_MAPS_API, // Change Google API key here or create an.env file and set here
  options: {
    center: { lat: -1.286389, lng: 36.817223 },
    zoom: 1,
  },
  style: {
    width: "800px",
    height: "600px",
  },
};

const GoogleMap = ({ countries }) => {
  const [map, setMap] = useState("");
  useEffect(() => {
    const googleMap = new window.google.maps.Map(
      document.getElementById("map-container"),
      mapDefaults.options
    );

    setMap(googleMap);
  }, [setMap]);

  if (countries.length) {
    let markersArray = [];

    // Create new google markers based on selected country
    countries.forEach((country) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          parseFloat(country.latlng[0]),
          parseFloat(country.latlng[1])
        ),
        title: country.name,
        icon: "https://www.cre8ivedge.net/dev/imbank/ke/wp-content/themes/imbank/assets/imgs/content-images/map-markers.png",
      });

      markersArray.push(marker);

      marker.setMap(map);
    });
  }
  return <div style={mapDefaults.style} id="map-container"></div>;
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};

export default connect(mapStateToProps)(GoogleMap);
