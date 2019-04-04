import React, { Component } from "react";
import logo from "./banner.svg";
import "./Footer.css";

import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        const footerLink = ["", "About","Contact","Team","Invest","Terms of Service"]
        let linkNames = footerLink.map((linkUrl, i) => {
          var actualLink = linkUrl.split(' ').join('_');
            return (
              <div className="d-inline  m-2" key={i}> 
                
                <Link id="footerLink" to={`/${actualLink}`}>
                <a >
                  {linkUrl}
               
                </a>
                </Link>
              
              </div>
            );
          });

        return (
              
              <div  id="entireFooter" className="container-fluid mt-5 p-3 bg-dark justify-content-center">
            <div className="row w-100 justify-content-center">
            <div className="">
                {linkNames}
            </div>
           

            </div>
            <div className="row mt-2  justify-content-center">
              <div className="text-muted">LitLister  ©2019</div>
            </div>

          </div>
  
  
  
        );
    }
} export default Footer;