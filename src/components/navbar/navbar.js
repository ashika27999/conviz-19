import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  COVID-19 Zone Status
                </a>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
