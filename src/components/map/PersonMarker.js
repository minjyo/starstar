import React from 'react';
import { Marker } from 'react-map-gl';

const PersonMarker = ({ personInfo, setInfo }) => {
  return (
    <Marker longitude={personInfo.longitude} latitude={personInfo.latitude}>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 100,
          background: 'white',
        }}
        onClick={() => setInfo(personInfo)}
      ></div>
    </Marker>
  );
};

export default PersonMarker;
