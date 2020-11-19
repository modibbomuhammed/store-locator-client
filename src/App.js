import React from "react";
import "./App.css";
import SearchComponent from "./components/Search-component";
import StoreList from "./components/Store-list";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

/**
1. Make the backend server  to serve the static frontend build
2. The storeList component still need some styling
3. Load the stores in the map
*/

const MapWrapper = () => {
  return (
    <>
      {/* <img src="/map.png" alt="" /> */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
function App() {
  return (
    <div className="main-container">
      <div className="header">
        <SearchComponent />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StoreList />
        <MapWrapper />
      </div>
    </div>
  );
}

export default App;
