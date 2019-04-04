import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CashIcon from "./money_icon.svg";
import BookIcon from "./book_icon.svg";
import ChatIcon from "./chat_icon.svg";
import MapIcon from "./map_icon.svg";
import ThumbIcon from "./thumbs_up.svg";
import ShieldIcon from "./shield_icon.svg";
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
      showSideBar: false
    };
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  render() {
    const imageLinks = [
      "theIntelligentInvestor.jpeg",
      "CollegeAlgebra.jpeg",
      "CollegePhysics.jpeg",
      "Socrates.jpeg"
    ];
    let imageSlides = imageLinks.map((linkUrl, i) => {
      var relativeLink = "./SampleBookCovers/"+linkUrl;
      
      console.log(relativeLink);

      return (
        <div className="carousel-item">
        <img
          className="d-block w-100"
          src={require(relativeLink)}
          alt="Second slide"
        />
      </div>
      );
    });

    return (
      <div>
        <Generics.NavBar />

        <Generics.Header />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div id="bookGallery" className="row py-5 flex-fill">
                <div className="col-3">
                  <div
                    id="bookImage"
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
                      {imageSlides}
                    </div>
                    
                  </div>
                </div>
                <div className="col-6">
                  <div
                    id="MainBookImage"
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
                      href="#MainBookImage"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#MainBookImage"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                {/* Middle book image */}
                <div className="col-3">
                  <div
                    id="bookImage"
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
                      {imageSlides}
                    </div>
                  </div>

             
                 
                </div>
                </div>
                <div
                  id="intro1"
                  className="row flex-fill p-5 justify-content-center"
                >
                  <div className="col-1 mx-auto mr-1">
                    <img className="d-block" src={CashIcon} alt="Third slide" />
                  </div>
                  <div className="col-8 mx-auto">
                    <h2>
                      LitLister is the future of buying and selling books for
                      college students. Selling your old textbooks has never
                      been faster or easier.
                    </h2>
                  </div>
                </div>

                <div
                  id="intro2"
                  className="row flex-fill pt-3 justify-content-center"
                >
                  <h1>Safe. Fast. Easy.</h1>
                </div>
                <div
                  id="intro2"
                  className="row flex-fill mt-0 pb-2 justify-content-center"
                >
                  <div className="col-2 mx-auto  justify-content-center">
                    <img className="mx-auto" src={BookIcon} />
                    <h3>
                      List your book for sale on our site. You can either sell
                      it at a set price or sell it as an auction.
                    </h3>
                  </div>
                  <div className="col-2 mx-auto">
                    <img className="mx-auto" src={ChatIcon} />
                    <h3>
                      After your book has been bought, choose a place on campus
                      to meet.
                    </h3>
                  </div>
                  <div className="col-2 mx-auto">
                    <img className="mx-auto" src={MapIcon} />
                    <h3>
                      Exchange books and take a small convenient code given by
                      your buyer to prove they have it.
                    </h3>
                  </div>
                  <div className="col-2 mx-auto">
                    <img className="mx-auto" src={ThumbIcon} />
                    <h3>
                      Go home happy. There is no need to handle cash or
                      anything. We handle the entire payment process online to
                      make sure you get paid.
                    </h3>
                  </div>
                </div>
                
              <div
                id="intro3"
                className="row flex-fill py-3 justify-content-center"
              >
                <h1>Buying has never. been. easier.</h1>
              </div>
              <div
                id="intro3"
                className="row flex-fill p-3 justify-content-center"
              >
                <div className="col-2">
                  <img className="mx-auto" src={ShieldIcon} />
                </div>
                <div className="col-8 align-middle my-auto">
                 <h3>
                 Buy books with ease. We handle the payment process. We also
                  make sure you get the book you bought. We provide a moneyback guarantee with every purchase. 
                   </h3> 
                </div>
              </div>

              </div>

            </div>
          }
        />
        <Generics.Footer />
      </div>
    );
  }
}

export default Home;
