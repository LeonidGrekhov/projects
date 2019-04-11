import React, { Component } from 'react';

import Generics from '../../Generics';

let debug = true;

let bookJson = {
  data: {
    title: 'book1',
    isbn: '111-111-111',
    authors: ['Adam Bob', 'Calvin Dan'],
    description: 'nothing',
    pictureurl:
      'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
  }
};

let listJson = {
  data: [
    {
      name: 'Eric Fin',
      rating: 4.9,
      condition: 'brand new',
      price: 24.99
    },
    {
      name: 'George Harry',
      rating: 4.2,
      condition: 'brand new',
      price: 24.99
    },
    {
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
      listData: null
    };
    this.bodyContent = this.bodyContent.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({ bookData: bookJson.data, listData: listJson.data });
    } else {
    }
  };

  bodyContent = () => <>ListingList</>;

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
