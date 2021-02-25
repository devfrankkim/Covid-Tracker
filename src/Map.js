import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";

import "./Map.css";
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  return (
    <div className="map">
      {" "}
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
