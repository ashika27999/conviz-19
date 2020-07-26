import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./mapVisual.css";
import { connect } from "react-redux";

class MapVisual extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MapVisual col-lg-5">
          <Map
            center={[
              this.props.currentAddress.latitude,
              this.props.currentAddress.longitude,
            ]}
            zoom={12}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[
                this.props.currentAddress.latitude,
                this.props.currentAddress.longitude,
              ]}
            >
              <Popup>
                District: {this.props.currentAddress.district}
                <br />
                Current Active Cases:{" "}
                {this.props.currentAddress.districtCurrentActive}
                <br />
                Total Confirmed Cases:{" "}
                {this.props.currentAddress.districtTotalConfirmed}
                <br />
              </Popup>
            </Marker>
          </Map>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentAddress: state.address.currentAddress,
  };
};

export default connect(mapStateToProps)(MapVisual);
