import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'absolute'
    };
  }

  componentDidMount = () => {
    if (document.body.clientHeight > window.innerHeight) {
      this.setState({ position: 'relative' });
    } else {
      this.setState({ position: 'absolute' });
    }
  };

  render() {
    const footerLink = [
      '',
      'About',
      'Contact',
      'Team',
      'Invest',
      'Terms of Service'
    ];
    let linkNames = footerLink.map((linkUrl, i) => {
      var actualLink = linkUrl.split(' ').join('_');
      return (
        <div className="d-inline  m-2" key={i}>
          <Link to={`/${actualLink}`}>
            <span className="text-muted">
              <strong id="footerLink">{linkUrl}</strong>
            </span>
          </Link>
        </div>
      );
    });
    return (
      <div
        style={{
          position: this.state.position,
          right: '0',
          bottom: '0',
          left: '0'
        }}
      >
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
