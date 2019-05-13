import React, { Component } from 'react';

import Generics from '../../Generics';

import { BookInfo as BookInfoAPI, Listing as ListingAPI } from '../../api';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: props.match.params.bid,
      lid: props.match.params.lid,
      bookData: null,
      listData: null,
      renderReady: false
    };
  }

  componentDidMount = () => {
    BookInfoAPI.getBookInfo(this.state.bid).then(bookData =>
      ListingAPI.getListingInfo(this.state.bid, this.state.lid).then(data => {
        if (bookData && data) {
          let listData = data.list;
          listData.seller = data.seller;
          this.setState({ bookData, listData: listData, renderReady: true });
        }
      })
    );
  };

  bodyContent = () => (
    <>
      {this.state.renderReady ? (
        <>
          {this.addToCart()}
          {this.bookInfo()}
          {this.listInfo()}
        </>
      ) : (
        <Generics.Body.Loading />
      )}
    </>
  );

  addToCart = () => (
    <>
      <button className="btn btn-warning float-right mr-5">
        <h4>
          <i className="fa fa-shopping-cart" /> Add To Cart
        </h4>
      </button>
    </>
  );

  bookInfo = () => (
    <>
      <h1>Book Information</h1>
      <div className="row mt-3">
        <div className="col-3">
          <img
            className="img-fluid"
            src={this.state.bookData.pictureurl}
            alt="cover"
          />
        </div>
        <div className="col mt-3">
          <h1>{this.state.bookData.title}</h1>
          <h5>author(s): {this.state.bookData.author}</h5>
          <span>isbn: {this.state.bookData.isbn}</span>
          <br />
          <div className="row">
            <div className="col-1">rating:</div>
            <div className="col-1">
              <Generics.Body.RatingStar
                rating={this.state.bookData.rating}
                dimension={12}
              />
            </div>
          </div>
          <br />
          <br />
          <h6>{this.state.bookData.description}</h6>
        </div>
      </div>
    </>
  );

  listInfo = () => (
    <>
      <h1>Listing Information</h1>
      <div className="row my-3">
        <div className="col-1" />
        <div className="col">
          <h5>
            Seller:{' '}
            {this.state.listData.seller.firstname +
              ' ' +
              this.state.listData.seller.lastname}
          </h5>
          <div className="row">
            <div className="col-1">rating:</div>
            <div className="col-1">
              <Generics.Body.RatingStar
                rating={this.state.listData.rating}
                dimension={12}
              />
            </div>
          </div>
          <h6>condition: {this.state.listData.condition}</h6>
          <h6>price: {this.state.listData.price}</h6>
          <h6>description: {this.state.listData.description}</h6>
        </div>
        <div className="col-2" />
      </div>
    </>
  );

  render = () => {
    return (
      <div>
        <Generics.NavBar />
        <Generics.Header />
        <Generics.Body content={this.bodyContent()} />
        <Generics.Footer />
      </div>
    );
  };
}

export default Listing;
