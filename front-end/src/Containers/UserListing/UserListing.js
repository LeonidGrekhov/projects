import React, { Component } from 'react';

import Generics from '../../Generics';

let debug = true;

let titleSuggestion = ['Once upon'];

let BookJson = {
  BookTitle: 'Once upon',
  Description:
    'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven’t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle—average—is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation’s economic future, it will be impossible to ignore.”',
  picture: 'alpha.png'
};

class UserListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: props.match.params.uid,
      lid: props.match.params.lid,
      showSideBar: false,
      search: '',
      searchSuggestion: <ul />,
      bookData: null,
      userDescription: '',
      listData: null
    };
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  autoCompleteSearch = event => {
    console.log(event);
  };

  onChangeSearch = event => {
    if (debug) {
      this.setState({
        search: event.target.value,
        searchSuggestion: (
          <ul>
            {titleSuggestion.map((title, i) => {
              if (
                '' !== event.target.value &&
                title.toLowerCase().includes(event.target.value.toLowerCase())
              ) {
                return (
                  <li key={i} onClick={this.onSuggestion} value={title}>
                    {title}
                  </li>
                );
              } else {
                return <div key={i} />;
              }
            })}
          </ul>
        )
      });
    } else {
      // api
    }
  };

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  onSuggestion = event => {
    event.target.getAttribute('value');
    if (debug) {
      this.setState({ bookData: BookJson });
    } else {
      // api
    }
  };

  renderSearch = () => (
    <>
      <form>
        <div className="form-group">
          <div>Search</div>
          <input
            value={this.state.search}
            onChange={this.onChangeSearch}
            name="search"
            autoComplete="off"
          />
          {this.state.searchSuggestion}
        </div>
      </form>
    </>
  );

  renderListingForm = () => (
    <>
      <div className="col-6">
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
          alt="placeholder"
        />
      </div>
      <div className="col-6">
        <div
          className="container"
          style={{
            minHeight: '68vh',
            marginTop: '12vh'
          }}
        >
          <form>
            <div className="row">
              <div className="text-default">
                Title: {BookJson.BookTitle}
                <div className="text-default">
                  Description: {BookJson.Description}
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">User description</label>
                  <input
                    type="userDescription"
                    className="form-control"
                    id="form-userDescription"
                    placeholder="Enter book description"
                    name="userDescription"
                    value={this.state.userDescription}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>

          <h1>
            {this.state.uid} {this.state.lid}
          </h1>
        </div>
      </div>
    </>
  );

  render() {
    let bodyContent = (
      <div>
        <div className="container">
          <div className="row-1">
            {this.state.bookData
              ? this.renderListingForm()
              : this.renderSearch()}
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

export default UserListing;
