import React, { Component } from 'react';

import Generics from '../../Generics';

import { Search } from '../../api';

let debug = false;
let json = {
  data: [
    {
      title: 'book1',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book2',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book3',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book4',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book5',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book6',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book7',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book8',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book9',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    },
    {
      title: 'book10',
      description: 'nothing',
      pictureurl:
        'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
    }
  ]
};

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true,
      data: null,
      page: parseInt(this.props.match.params.page),
      pageCount: null
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.pagination = this.pagination.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.result = this.result.bind(this);
  }

  componentDidMount = () => {
    if (this.props.match.params.author) {
      Search.getSearchByAuthor(
        this.props.match.params.author,
        this.props.match.params.page
      ).then(response => {
        response.text().then(result => {
          result = JSON.parse(result);
          this.setState({
            data: result.data,
            pageCount: result.pageCount
          });
        });
      });
    } else if (this.props.match.params.isbn) {
      Search.getSearchByIsbn(
        this.props.match.params.isbn,
        this.props.match.params.page
      ).then(response => {
        response.text().then(result => {
          result = JSON.parse(result);
          this.setState({
            data: result.data,
            pageCount: result.pageCount
          });
        });
      });
    } else if (this.props.match.params.title) {
      Search.getSearchByTitle(
        this.props.match.params.title,
        this.props.match.params.page
      ).then(response => {
        response.text().then(result => {
          result = JSON.parse(result);
          this.setState({
            data: result.data,
            pageCount: result.pageCount
          });
        });
      });
    }
  };

  bodyContent = () => {
    if (debug) {
      return (
        <div className='container'>
          {this.pagination(this.state.page, 9)}
          {this.result(json.data)}
          {this.pagination(this.state.page, 9)}
        </div>
      );
    } else {
      if (null === this.state.pageCount) {
        return <Generics.Body.Loading />;
      } else {
        return (
          <div className='container'>
            {this.pagination(this.state.page, this.state.pageCount)}
            {this.result(this.state.data)}
            {this.pagination(this.state.page, this.state.pageCount)}
          </div>
        );
      }
    }
  };

  pagination = (currentPageIndex, pageCount) => {
    if (null === pageCount) {
      return false;
    }
    let currentPage = (
      <li className='page-item active'>
        <a className='page-link' href='# '>
          {currentPageIndex}
        </a>
      </li>
    );
    let previous = currentPageIndex !== 1 && (
      <li className='page-item'>
        <a
          className='page-link'
          href='# '
          name={currentPageIndex - 1}
          onClick={this.onPageChange}
        >
          Previous
        </a>
      </li>
    );
    let next = currentPageIndex !== pageCount && (
      <li className='page-item'>
        <a
          className='page-link'
          href='# '
          name={currentPageIndex + 1}
          onClick={this.onPageChange}
        >
          Next
        </a>
      </li>
    );
    let previousPageCount = currentPageIndex - 1;
    let nextPageCount = pageCount - currentPageIndex;
    let previousPages = [];
    let nextPages = [];
    for (let i = -3; i < 0; i++) {
      if (previousPageCount + i < 0) {
        continue;
      }
      previousPages.push(
        <li key={currentPageIndex + i} className='page-item'>
          <a
            className='page-link'
            href='# '
            name={currentPageIndex + i}
            onClick={this.onPageChange}
          >
            {currentPageIndex + i}
          </a>
        </li>
      );
    }
    for (let i = 1; i < 5; i++) {
      if (nextPageCount - i < 0) {
        continue;
      }
      nextPages.push(
        <li key={currentPageIndex + i} className='page-item'>
          <a
            className='page-link'
            href='# '
            name={currentPageIndex + i}
            onClick={this.onPageChange}
          >
            {currentPageIndex + i}
          </a>
        </li>
      );
    }
    return (
      <nav aria-label='Page navigation'>
        <ul className='pagination justify-content-center'>
          {previous}
          {previousPages}
          {currentPage}
          {nextPages}
          {next}
        </ul>
      </nav>
    );
  };

  onPageChange = event => {
    event.preventDefault();
    if (debug) {
      this.setState({ page: parseInt(event.target.name) });
      window.history.pushState(
        {
          html: document.innerHTML,
          pageTitle: document.title
        },
        '',
        `./${event.target.name}`
      );
    } else {
      if (this.props.match.params.author) {
        Search.getSearchByAuthor(
          this.props.match.params.author,
          this.props.match.params.page
        ).then(response => {
          response.text().then(result => {
            result = JSON.parse(result);
            this.setState({
              data: result.data,
              pageCount: result.pageCount
            });
          });
        });
      } else if (this.props.match.params.isbn) {
        Search.getSearchByIsbn(
          this.props.match.params.isbn,
          this.props.match.params.page
        ).then(response => {
          response.text().then(result => {
            result = JSON.parse(result);
            this.setState({
              data: result.data,
              pageCount: result.pageCount
            });
          });
        });
      } else if (this.props.match.params.title) {
        Search.getSearchByTitle(
          this.props.match.params.title,
          this.props.match.params.page
        ).then(response => {
          response.text().then(result => {
            result = JSON.parse(result);
            this.setState({
              data: result.data,
              pageCount: result.pageCount
            });
          });
        });
      }
    }
  };

  result = data =>
    data ? (
      data.map((book, i) => (
        <div className='container' key={i}>
          <div className='row mt-3'>
            <div className='col-3 text-center'>
              <img src={book.pictureurl} className='img-fluid' alt='fluid' />
            </div>
            <div className='col'>
              <h3>{book.title}</h3>
              <h4>{book.description}</h4>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className='container mt-3'>no result :(</div>
    );

  render = () => {
    return (
      <div>
        <Generics.NavBar />
        <Generics.Header />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={this.bodyContent()}
        />
        <Generics.Footer />
      </div>
    );
  };
}

export default SearchResult;
