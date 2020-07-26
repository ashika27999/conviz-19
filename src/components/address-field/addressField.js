import React, { Component } from "react";
import { connect } from "react-redux";
import { addAddressToSessionStorage } from "../../store/actions/addressActions";
import "./addressField.css";

class AddressField extends Component {
  state = {
    address: "",
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  handleAddressSubmit = (event) => {
    event.preventDefault();
    const queryAddress = this.state.address
      .replace(" ", "+")
      .replace(",", "%2C");
    const queryString =
      "https://geocode.search.hereapi.com/v1/geocode?q=" +
      queryAddress +
      "&apiKey=" +
      "GJ89HFLK7z65hTMwPHBzVjt_SoiOf36vFKiYd-9uMFQ";
    this.props.addAddressToSessionStorage(queryString);
  };
  render() {
    return (
      <React.Fragment>
        <div className="AddressField d-flex justify-content-center">
          <input
            placeholder="Enter Address..."
            onChange={this.handleAddressChange}
            type="text"
            className="col-lg-10"
          />
          <button
            type="submit"
            onClick={this.handleAddressSubmit}
            className="col-lg-1"
          >
            GO!
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAddressToSessionStorage: (queryString) =>
      dispatch(addAddressToSessionStorage(queryString)),
  };
};

export default connect(null, mapDispatchToProps)(AddressField);
