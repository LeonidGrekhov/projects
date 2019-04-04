import React, { Component } from "react";
import { Link } from "react-router-dom";

import Generics from "../../Generics";

let BookJson = {
  name: "Leonid Grekhov",
  role: "front-end engineer",
  picture: "alpha.png",
  email: "lgrekhov@mail.sfsu.edu",
  website: "none",
  description: "I'm a senior student, majoring in computer science at SFSU."
};

class BookId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true
    };
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  render() {
    let bodyContent = (
      <div>
        <div className="container">
          <div className="row-1">
            <div className="col-6">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                
              />
            </div>
            <div className="col-6">
              <div className="text-default">Description: </div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <Generics.NavBar />

        <Generics.Header />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={bodyContent}
        />
        <Generics.Footer />
      </div>
    );
  }
}

export default BookId;
