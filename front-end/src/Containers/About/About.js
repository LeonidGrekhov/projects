import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div>Placeholder About Page</div>
        <br />
        <Link to="/">
          <button type="button" className="btn btn-info">
            Home Page
          </button>
        </Link>
      </div>
    );
  }
}

export default About;
