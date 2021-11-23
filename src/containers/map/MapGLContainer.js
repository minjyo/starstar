import React, { useState, useEffect } from 'react';
import MapGL from 'components/map/MapGL';
import PersonMarker from 'components/map/PersonMarker';

const MapGLContainer = () => {
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

  // 임시 마커용 데이터 (다른 유저들 위치)
  const data = [
    { name: 'user1', longitude: lng - 0.001, latitude: lat - 0.001 },
    { name: 'user2', longitude: lng + 0.001, latitude: lat + 0.001 },
  ];

  const [popupInfo, setPopupInfo] = useState(null);

  const personMarkers = data.map((user) => (
    <PersonMarker personInfo={user} setInfo={setPopupInfo}></PersonMarker>
  ));

  return (
    <MapGL
      PersonMarkers={personMarkers}
      popupInfo={popupInfo}
      setPopupInfo={setPopupInfo}
    ></MapGL>
  );
};

export default MapGLContainer;
