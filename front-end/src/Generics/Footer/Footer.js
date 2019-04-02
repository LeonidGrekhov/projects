import React, { Component } from "react";
import logo from "./banner.svg";

import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        const footerLink = ["", "About","Contact","Team","Invest","Terms of Service"]
        let linkNames = footerLink.map((linkUrl, i) => {
          var actualLink = linkUrl.split(' ').join('_');
            return (
              <div className="d-inline  m-2" key={i}> 
                
                <Link to={`/${actualLink}`}>
                <a class="text-muted">
                <bold>
                  {linkUrl}
                </bold>
                
                </a>
                </Link>
              
              </div>
            );
          });

        return (
            <div>   
              <div id="mainAppFooter" className="container-fluid mt-5 p-2 bg-dark justify-content-center">
            <div className="row flex-fill justify-content-center">
                 
           
           
            <div className="m-2">
                {linkNames}
            </div>
           

            </div>
            <div className="row mt-2 flex-fill justify-content-center">
              <div className="text-small">LitLister  ©2019</div>
            </div>

          </div>
  
  
  </div>
        );
    }
} export default Footer;