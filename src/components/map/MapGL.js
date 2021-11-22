import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, Popup } from 'react-map-gl';
import PopupView from 'components/map/PopupView';

const MapGL = ({ PersonMarkers, popupInfo, setPopupInfo }) => {
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
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {PersonMarkers}
      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="bottom"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <PopupView popupInfo={popupInfo} />
        </Popup>
      )}
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
};

export default MapGL;
