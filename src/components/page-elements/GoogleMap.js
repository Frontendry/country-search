import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

// HTML Marker
import { createHTMLMapMarker } from "../../scripts/html-marker";

const GoogleMap = ({ countries }) => {
  const mapRef = useRef(null);
  const prevMarkersRef = useRef([]);

  // Add Markers
  function addMarker(position, title, map, icon, html) {
    /*  const marker = new window.google.maps.Marker({
      position: position,
      title: title,
      map: map,
      icon: "https://www.cre8ivedge.net/dev/imbank/ke/wp-content/themes/imbank/assets/imgs/content-images/map-markers.png",
    }); */

    const marker = createHTMLMapMarker({
      position: position,
      title: title,
      map: map,
      html: html,
    });

    prevMarkersRef.current.push(marker);

    return marker;
  }

  function deleteMarkers(markers) {
    markers.forEach((marker) => {
      marker.setMap(null);
    });

    markers = [];
  }

  useEffect(() => {
    const googleMap = new window.google.maps.Map(
      document.getElementById("map-container"),
      {
        center: { lat: -1.286389, lng: 36.817223 },
        zoom: 1,
        scrollwheel: true,
      }
    );
    mapRef.current = googleMap;
  }, []);

  useEffect(() => {
    // If country(ies) is(are) selected
    if (countries.length) {
      // Delete markers before inserting new
      deleteMarkers(prevMarkersRef.current);

      // Create new google markers based on selected country
      countries.forEach((country) => {
        addMarker(
          {
            lat: parseFloat(country.latlng[0]),
            lng: parseFloat(country.latlng[1]),
          },
          country.name,
          mapRef.current,
          null,
          `<div class="custom-marker-label-holder"><span class="custom-marker-label-icon-wrap"><img class="custom-marker-label-icon" src="${country.flag}"/></span><span class="custom-marker-label-name">${country.name}</span></div>`
        );
      });
    }
  });

  return (
    <div
      style={{
        width: "800px",
        height: "600px",
      }}
      id="map-container"
    ></div>
  );
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};

export default connect(mapStateToProps)(GoogleMap);
