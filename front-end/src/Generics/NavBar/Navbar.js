import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./NavBar.css";
import cartLogo from "./shoppingCart.svg";

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
          
            <button
            variant="primary"
            id="LoginButton"
              className="btn btn-outline-primary mr-2 my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
            <button variant="primary" id="SignUpButton" className="btn btn-primary my-2 mr-2 my-sm-0" type="submit">
              Sign Up
            </button>   
            <img src={cartLogo} class="mr-2" height="30" width="30" alt="banner" />
            <button variant="primary" id="cartDiv" className="btn btn-primary my-2 mr-2 my-sm-0" type="submit">
              {" "}0
            </button>   
          </form>

        </div>
      </nav>
         
      );
    }
    return  (
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
        
          <button
          variant="primary"
          id="LoginButton"
            className="btn btn-outline-primary mr-2 my-2 my-sm-0"
            type="submit"
          >
            Login
          </button>
          <button variant="primary" id="SignUpButton" className="btn btn-primary my-2 mr-2 my-sm-0" type="submit">
            Sign Up
          </button>   
          <img src={cartLogo} class="mr-2" height="30" width="30" alt="banner" />
          <button variant="primary" id="cartDiv" className="btn btn-primary my-2 mr-2 my-sm-0" type="submit">
            {" "}0
          </button>   
        </form>

      </div>
    </nav>
       
    );
    
    ;
  }
}
export default Navbar;
