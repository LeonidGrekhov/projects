import React, { Component } from 'react';
import Generics from '../../Generics';
import '../../Containers/Contact/Contact.css';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false
    };
  }

  render() {
    return (
      <div>
        <Generics.NavBar />

        <Generics.Header />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={
            <div className="container-fluid h-100 main-Page">
              <div className="row text-center justify-content-center">
                <div className="big-Text mt-4">Have Any Questions?</div>
                <p className="m-4">
                  If you have any questions or suggestions for us feel free to
                  shoot us an email at
                  <b> contact@litlister.com</b>
                  <br />
                  We will get back to you as soon as we can.
                </p>
              </div>
            </div>
          }
        />
        <Generics.Footer />
      </div>
    );
  }
}
export default Contact;
