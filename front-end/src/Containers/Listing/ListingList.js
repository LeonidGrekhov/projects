import React, { Component } from 'react';

import Generics from '../../Generics';

import { Listing } from '../../api';

let debug = true;

let bookJson = {
  data: {
    title: 'book1',
    isbn: '111-111-111',
    authors: ['Adam Bob', 'Calvin Dan'],
    rating: 2.5,
    description: 'nothing, you are on debug mode',
    pictureurl:
      'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
  }
};

let listJson = {
  data: [
    {
      lid: 1,
      name: 'Eric Fin',
      rating: 4.9,
      condition: 'brand new',
      price: 24.99
    },
    {
      lid: 2,
      name: 'George Harry',
      rating: 4.2,
      condition: 'brand new',
      price: 24.99
    },
    {
      lid: 3,
      name: 'Ivan John',
      rating: 4.2,
      condition: 'used',
      price: 34.5
    }
  ]
};

class ListingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: props.match.params.bid,
      bookData: null,
      listData: null,
      listSortBy: 'rating',
      listDirection: 'asc',
      renderReady: false
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.bookInfo = this.bookInfo.bind(this);
    this.listingListInfo = this.listingListInfo.bind(this);
    this.columnCaret = this.columnCaret.bind(this);
    this.onColumnClick = this.onColumnClick.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({
        bookData: bookJson.data,
        listData: listJson.data,
        renderReady: true
      });
    } else {
      Listing.getBookInfo(this.props.math.params.bid).then(bookData =>
        Listing.getListInfo(this.props.match.params.bid).then(listData =>
          this.setState({ bookData, listData, renderReady: true })
        )
      );
    }
  };

  bodyContent = () =>
    this.state.renderReady ? (
      <>
        {this.bookInfo()}
        {this.listingListInfo()}
      </>
    ) : (
      <>Loading Page</>
    );

  bookInfo = () => (
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
        <h5>
          author(s):{' '}
          {this.state.bookData.authors.map((author, i) => (
            <span key={i}>{(0 === i ? ' ' : ', ') + author}</span>
          ))}
        </h5>
        <span>isbn: {this.state.bookData.isbn}</span>
        <br />
        <div className="row">
            <div className="col-1">
              rating:
            </div>
            <div className="col-1">
            <Generics.Body.RatingStar rating={this.state.bookData.rating} dimension={12} />
            </div>
        </div>
        <br />
        <br />
        <h6>{this.state.bookData.description}</h6>
      </div>
    </div>
  );

  listingListInfo = () => (
    <>
      <div className="row justify-content-md-center text-white">
        <div
          className="col col-3 border"
          style={{ backgroundColor: '#9370DB', borderTopLeftRadius: '0.5em' }}
          onClick={this.onColumnClick}
          name={'name'}
        >
          <p
            className="text-white text-center mt-2"
            name={'name'}
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          >
            Name {this.columnCaret('name')}
          </p>
        </div>
        <div
          className="col col-3 border"
          style={{ backgroundColor: '#9370DB' }}
          onClick={this.onColumnClick}
          name={'rating'}
        >
          <p
            className="text-white text-center mt-2"
            name={'rating'}
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          >
            Rating {this.columnCaret('rating')}
          </p>
        </div>
        <div
          className="col col-3 border"
          style={{ backgroundColor: '#9370DB' }}
          onClick={this.onColumnClick}
          name={'condition'}
        >
          <p
            className="text-white text-center mt-2"
            name={'condition'}
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          >
            Condition {this.columnCaret('condition')}
          </p>
        </div>
        <div
          className="col col-2 border"
          style={{ backgroundColor: '#9370DB', borderTopRightRadius: '0.5em' }}
          onClick={this.onColumnClick}
          name={'price'}
        >
          <p
            className="text-white text-center mt-2"
            name={'price'}
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          >
            Price {this.columnCaret('price')}
          </p>
        </div>
      </div>
      {this.state.listData.map((list, i) => {
        return (
          <div
            className="row justify-content-md-center"
            key={i}
            onClick={_ => (window.location = `./list/${list.lid}`)}
          >
            <div className="col col-3 border">{list.name}</div>
            <div className="col col-3 border">
              <div className="row">
                <div className="col col-8" style={{margin: '0 auto'}}>
                  <Generics.Body.RatingStar rating={list.rating}/>
                </div>
              </div>
            </div>
            <div className="col col-3 border">{list.condition}</div>
            <div className="col col-2 border">{list.price}</div>
          </div>
        );
      })}
      <div className="mb-4" />
    </>
  );

  columnCaret = colName =>
    colName === this.state.listSortBy ? (
      'asc' === this.state.listDirection ? (
        <i className="fa fa-caret-up" aria-hidden="true" name={colName} />
      ) : (
        <i className="fa fa-caret-down" aria-hidden="true" name={colName} />
      )
    ) : (
      <></>
    );

  onColumnClick = event => {
    let name = event.target.getAttribute('name');
    if (name === this.state.listSortBy) {
      if ('asc' === this.state.listDirection) {
        this.setState({
          listDirection: 'dsc',
          listData: this.state.listData.sort((a, b) => a[name] < b[name])
        });
      } else {
        this.setState({
          listDirection: 'asc',
          listData: this.state.listData.sort((a, b) => a[name] > b[name])
        });
      }
    } else {
      this.setState({
        listSortBy: name,
        listDirection: 'asc',
        listData: this.state.listData.sort((a, b) => a[name] > b[name])
      });
    }
  };

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

export default ListingList;
