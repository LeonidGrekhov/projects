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
            
            <div className ="row">
<div className ="col-3">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
</div>        
<div className="col-6">    
     

        <div
          id="carouselExampleControls2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls2"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls2"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        
    </div>    
        
<div className="col-3">
        <div
          id="carouselExampleControls3"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block"
                
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                alt="First slide"
                style={{
                    width:'150px',
                    height:'100px'
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
                
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
                style={{
                    width:'20vw',
                    height:'10vh'
                }}
              />
            </div>
          </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls3"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls3"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
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
