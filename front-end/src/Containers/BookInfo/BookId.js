import React, { Component } from "react";
import { Link } from "react-router-dom";

import Generics from "../../Generics";

let BookJson = {
    BookTitle: "Once upon",
    Description: "this book is about",
    picture: "alpha.png",
    SellerInfo: "Seller@mail.sfsu.edu",
    SellerDescription: "used",
    SellerPrice: "$8.99"
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
            <div className="text-default">Title: {BookJson.BookTitle}</div>
            <div className="text-default">Description: {BookJson.Description}</div>
            <div className="text-default">SellerInfo: {BookJson.SellerInfo}</div>
            <div className="text-default">Book State: {BookJson.SellerDescription}</div>
              <div className="text-default">Price: {BookJson.SellerPrice}</div>
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
