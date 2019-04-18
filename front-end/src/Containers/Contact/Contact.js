import React, { Component } from 'react';
import Generics from '../../Generics';

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
          content={<div className="container-fluid h-100 w-100">Hello</div>}
        />
        <Generics.Footer />
      </div>
    );
  }
}
export default Contact;
