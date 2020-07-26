import React, { Component } from "react";
import { connect } from "react-redux";
import "./historyLog.css";
import { setAsCurrentAddress } from "../../store/actions/addressActions";

class HistoryLog extends Component {
  onSelect = (address) => {
    this.props.setAsCurrentAddress(address);
  };
  render() {
    console.log(this.props.addressLog);
    return (
      <React.Fragment>
        <div className="HistoryLog col-lg-6">
          <h4 className="table-heading d-flex justify-content-center">
            Search History
          </h4>
          <table className="table table-bordered mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Lat</th>
                <th scope="col">Long</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.addressLog.map((address, key) => (
                <tr onClick={() => this.onSelect(address)}>
                  <th scope="row">{key}</th>
                  <td>{address.title}</td>
                  <td>{address.latitude}</td>
                  <td>{address.longitude}</td>
                  <td>{address.inContainmentZone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addressLog: state.address.addressLog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAsCurrentAddress: (address) => dispatch(setAsCurrentAddress(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryLog);
