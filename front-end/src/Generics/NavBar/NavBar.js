import React, { Component } from "react";
import logo from "./logo.svg";
import "./NavBar.css";
class Navbar extends Component {
  ComponentWillReceiveProps = props => {};

  render() {
    if (this.props.authenticated) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} height="28" alt="banner" />
          {"  "} ListLister
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Email"
              aria-label="Email"
            />
            <input
              className="form-control mr-sm-2"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              className="btn btn-success my-2 my-sm-0"
              style={{ marginRight: ".5rem" }}
              type="submit"
            >
              Login
            </button>
            <button className="btn btn-warning my-2 my-sm-0" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </nav>
         
      );
    }
    return <div>not authenticated</div>;
  }
}
export default Navbar;
