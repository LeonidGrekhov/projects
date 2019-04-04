import React, { Component } from 'react';

import Generics from '../../Generics';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true,
      pageCount: null,
      page: parseInt(this.props.match.params.page)
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.pagination = this.pagination.bind(this);
  }

  componentDidMount = () => {};

  bodyContent = () => {
    if (null === this.state.pageCount) {
      return (
        <div className='container' style={{ minHeight: '65vw' }}>
          <div className='align-self-center'>
            <div
              className='spinner-border text-info'
              style={{ width: '10vw', height: '10vw' }}
            >
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          {this.pagination(this.state.page, this.state.pageCount)}
        </div>
      );
    }
  };

  pagination = (currentPageIndex, pageCount) => {
    if (null === pageCount) {
      return false;
    }
    let currentPage = (
      <li className='page-item active'>
        <a className='page-link' href='#'>
          {currentPageIndex}
        </a>
      </li>
    );
    let previous = currentPageIndex != 1 && (
      <li className='page-item'>
        <a className='page-link' href='#'>
          Previous
        </a>
      </li>
    );
    let next = currentPageIndex !== pageCount && (
      <li className='page-item'>
        <a className='page-link' href='#'>
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
          <a className='page-link' href='#'>
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
          <a className='page-link' href='#'>
            {currentPageIndex + i}
          </a>
        </li>
      );
    }
    return (
      <nav aria-label='Page navigation'>
        <ul className='pagination'>
          {previous}
          {previousPages}
          {currentPage}
          {nextPages}
          {next}
        </ul>
      </nav>
    );
  };

  render() {
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
  }
}

export default SearchResult;
