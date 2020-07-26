import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import AddressField from "../components/address-field/addressField";
import HistoryLog from "../components/historyLog/historyLog";
import MapVisual from "../components/mapVisual/mapVisual";
import "./homePage.css";

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Navbar />
        <AddressField />
        <div className="row d-flex justify-content-center">
          <HistoryLog />
          <MapVisual />
        </div>
      </div>
    );
  }
}

export default HomePage;
