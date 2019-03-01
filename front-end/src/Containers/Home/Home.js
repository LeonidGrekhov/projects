import React, { Component } from "react";
import { Link } from "react-router-dom";
import members from "../About/members";
class Home extends Component {
  render() {
    let memberButtons = members.map((memberName, i) => {
      return (
        <div key={i}>
          <br />
          <Link to={`/about/${memberName}`}>
            <button type="button" className="btn btn-info">
              {memberName}
            </button>
          </Link>
          <br />
        </div>
      );
    });
    return (
      <div>
        <div className="container text-center">
          <span>Software Engineering class SFSU</span>
          <br />
          <span>Spring 2019</span>
          <br />
          <span>Section 4</span>
          <br />
          <span>Team 4</span>
          <br />
        </div>
        <br />
        <div className="container">
          <Link to="/about">
            <button type="button" className="btn btn-info">
              About Page
            </button>
          </Link>
          {memberButtons}
        </div>
      </div>
    );
  }
}

export default Home;
