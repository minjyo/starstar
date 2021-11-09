import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';

const MapPage = () => {
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log('Latitude is :', position.coords.latitude);
    console.log('Longitude is :', position.coords.longitude);

    setLng(position.coords.longitude);
    setLat(position.coords.latitude);
  });

  const MAPBOX_TOKEN =
    'pk.eyJ1IjoibWluanlvIiwiYSI6ImNrdnE1ZXpsN2RkeWMydnQ5ZzhyN3B0MzAifQ.uRsQlG6QQf2vQfFN9KA8jg';

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="50vw"
      height="50vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
};

export default MapPage;
