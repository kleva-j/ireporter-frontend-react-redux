/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoia2FzbWlja2xldmEiLCJhIjoiY2pscDUwYnp5MjE5MjNybjMzeXV2cjN3eiJ9.FsWFFeDKlZTDmzzBkZjZhg"
});

const RenderMap = ({ lng, lat }) => (
  <Map
    style="mapbox://styles/mapbox/streets-v9"
    center={[lng, lat]}
    zoom={[13]}
    containerStyle={{
      height: "300px",
      width: "100%"
    }}>
    <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[lng, lat]} />
    </Layer>
  </Map>
);

RenderMap.propTypes = {
  lng: PropTypes.node,
  lat: PropTypes.node,
};

RenderMap.defaultProps = {
  lng: 0,
  lat: 0
};

export default RenderMap;
