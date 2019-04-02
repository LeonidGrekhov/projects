import React, { Component } from "react";
import { Link } from "react-router-dom";
import members from "../About/members";

import Generics from "../../Generics";
//import NavBar from "../../Generics/NavBar/Navbar";
//import Sidebar from "../../Generics/Sidebar/Sidebar";
//import BodyLanding from "../../Generics/Body/BodyLanding"
//import Header from "../../Generics/Header/Header";
//import Footer from "../../Generics/Footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true
    }
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  onShowOrHide = _ => this.setState({showSideBar: !this.state.showSideBar})

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

        <Generics.NavBar/>

        <Generics.Header/>
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={
            <div>
                      <div className="container text-center">
            <span>Software Engineering class SFSU</span>
          <br />
          <span>Spring 201912345</span>
          <br />
          <span>Section 4</span>
          <br />
          <span>Team 4</span>
          <br />
        <br />
        </div>
        <div className="container">
        <button type="button" className="btn btn-info" onClick={this.onShowOrHide}>
              Show/Hide
            </button>
            <br />

            <br/>
          <Link to="/about">
            <button type="button" className="btn btn-info">
              About Page
            </button>
          </Link>
          {memberButtons}
          </div>
          </div>

          }
        />
        <Generics.Footer/>
        </div>
    );
  }
}

export default Home;
