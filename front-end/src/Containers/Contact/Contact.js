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
            <div className="container-fluid h-100 flex-fill w-100 main-Page">
              <div className="row">
                <h1>Have Any Questions?</h1>
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
