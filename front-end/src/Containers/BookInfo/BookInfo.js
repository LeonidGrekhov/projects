import React, { Component } from 'react';

import Generics from '../../Generics';

import { Auth, Book } from '../../api';

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: props.match.params.bid,
      bookData: null,
      guest: true,
      showSideBar: true,
      renderReady: false
    };
  }

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  componentDidMount = () => {
    Auth.getLogin().then(userInfo =>
      Book.getBook(this.state.bid).then(bookData =>
        this.setState({ bookData, guest: !!userInfo, renderReady: true })
      )
    );
  };

  onGoToListing = event => {
    event.preventDefault();
    window.location = `/book/${this.state.bookData.bid}/list`;
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
                Title: {this.state.bookData.title}
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
                Description: {this.state.bookData.description}
              </div>

              {this.state.guest && (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onGoToListing}
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

export default BookInfo;
