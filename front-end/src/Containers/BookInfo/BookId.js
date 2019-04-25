import React, { Component } from 'react';

import Generics from '../../Generics';

let BookJson = {
  BookTitle: 'Once upon',
  Description:
    'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven’t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle—average—is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation’s economic future, it will be impossible to ignore.”',
  picture: 'alpha.png',
  SellerInfo: 'Seller@mail.sfsu.edu',
  SellerDescription: 'used',
  SellerPrice: '$8.99',
  pictureurl: 'https://rheasupdo.files.wordpress.com/2015/08/img_5998.jpg'
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
        <br />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className="d-block w-100"
                src="https://rheasupdo.files.wordpress.com/2015/08/img_5998.jpg"
                alt="placeholder"
              />
            </div>
            <div className="col-6">
              <div className="text-default">Title: {BookJson.BookTitle}</div>
              <br />
              <div className="text-default">
                Description: {BookJson.Description}
              </div>
              <br />
              <div className="text-default">
                SellerInfo: {BookJson.SellerInfo}
              </div>
              <br />
              <div className="text-default">
                Book State: {BookJson.SellerDescription}
              </div>
              <br />
              <div className="text-default">Price: {BookJson.SellerPrice}</div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmit}
              >
                Buy
              </button>
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
