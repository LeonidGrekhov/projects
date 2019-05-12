import React, { Component } from 'react';

import Generics from '../../Generics';

import { Auth, BookInfo } from '../../api';

let debug = true;

let BookJson = {
  id: 1,
  BookTitle: 'Once upon',
  Description:
    'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven’t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle—average—is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation’s economic future, it will be impossible to ignore.”',
  author: 'James May',
  isbn: '12321332223232',
  SellerInfo: 'Seller@mail.sfsu.edu',
  SellerDescription: 'used',
  SellerPrice: '$8.99',
  pictureurl: 'https://rheasupdo.files.wordpress.com/2015/08/img_5998.jpg'
};

class BookId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: props.match.params.bid,
      bookData: null,
      guest: true,
      showSideBar: true,
      renderReady: false
    };
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  componentDidMount = () => {
    if (debug) {
      this.setState({ bookData: BookJson, renderReady: true });
    } else {
      Auth.getLogin().then(guest =>
        BookInfo.getBookInfo(this.state.bid).then(bookData =>
          this.setState({ bookData, guest })
        )
      );
    }
  };
  onSubmit = event => {
    event.preventDefault();
    window.location = `/book/${this.state.bookData.id}/list`;
  };
  render() {
    let bodyContent = this.state.renderReady ? (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className="d-block w-100"
                style={{ paddingBottom: '20px' }}
                src={this.state.bookData.pictureurl}
                alt="placeholder"
              />
            </div>
            <div className="col-6">
              <div className="text-default">
                Title: {this.state.bookData.BookTitle}
              </div>
              <br />
              <div className="text-default">
                Author: {this.state.bookData.author}
              </div>
              <br />
              <div className="text-default">
                Isbn: {this.state.bookData.isbn}
              </div>
              <br />

              <div className="text-default">
                Description: {this.state.bookData.Description}
              </div>

              {this.state.guest && (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                >
                  Go to Listings
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Generics.Body.Loading />
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
