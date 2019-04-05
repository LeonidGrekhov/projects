import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const footerLink = [
      "",
      "About",
      "Contact",
      "Team",
      "Invest",
      "Terms of Service"
    ];
    let linkNames = footerLink.map((linkUrl, i) => {
      var actualLink = linkUrl.split(" ").join("_");
      return (
        <div className="d-inline  m-2" key={i} >
          <Link  to={`/${actualLink}`}>
            <span  class="text-muted">
              <strong id="footerLink">{linkUrl}</strong>
            </span>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div
          id="mainAppFooter"
          className="container-fluid p-2 bg-dark justify-content-center"
        >
          <div className="row mx-auto justify-content-center">
            <div className="m-2">{linkNames}</div>
          </div>
          <div className="row mt-2 mx-auto justify-content-center">
            <div className="text-small">LitLister ©2019</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
