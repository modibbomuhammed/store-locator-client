import React from "react";
import "./App.css";
import SearchComponent from "./components/Search-component";
import StoreList from "./components/Store-list";

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <SearchComponent />
      </div>
      <StoreList />
      <div
        className="map-container"
        // style={{ marginTop: "-126px", marginLeft: "268px" }}
      >
        <img src="/map.png" alt="" />
      </div>
    </div>
  );
}

export default App;
