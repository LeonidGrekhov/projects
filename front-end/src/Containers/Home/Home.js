import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Placeholder Home Page</div>
        <br />
        <Link to="/about">
          <button type="button" className="btn btn-info">
            About Page
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
