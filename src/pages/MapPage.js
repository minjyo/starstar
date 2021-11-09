import React, { useState, useMemo, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';

const MapPage = () => {
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);

      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    });
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

  // 임시 마커용 데이터 (다른 유저들 위치)
  const data = [
    { name: 'user1', longitude: lng - 0.001, latitude: lat - 0.001 },
    { name: 'user2', longitude: lng + 0.001, latitude: lat + 0.001 },
  ];

  const [showPopup, togglePopup] = useState(false);
  // Only rerender markers if props.data has changed
  const markers = useMemo(
    () =>
      data.map((user) => (
        <Marker
          key={user.name}
          longitude={user.longitude}
          latitude={user.latitude}
          onClick={() => togglePopup(true)}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              background: 'white',
            }}
          ></div>
        </Marker>
      )),
    [data],
  );

  return (
    <ReactMapGL
      {...viewport}
      width="50vw"
      height="50vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {markers}
      {showPopup && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={data[0].longitude + 0.0001}
          latitude={data[0].latitude - 0.0005}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
        >
          응애
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

export default MapPage;
