import React, { Component } from 'react';

import Generics from '../../Generics';
import './UserListing.css';
let debug = true;

let titleSuggestion = ['Once upon'];

let BookJson = {
  BookTitle: 'Once upon',
  Description:
    'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven’t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle—average—is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation’s economic future, it will be impossible to ignore.”',
  pictureurl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
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
      listData: null,
      listerImages: [],
      listerImageDisplayIndex: null,
      listerImageCapacity: 5,
      renderReady: false
    };
    this.onShowOrHide = this.onShowOrHide.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({ renderReady: true });
    }
  };

  autoCompleteSearch = event => {
    console.log(event);
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

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

  onImageUpload = event => {
    let { listerImages, listerImageCapacity } = this.state;
    let images = listerImages;
    let index = 0;
    if (images.length < listerImageCapacity) {
      images.push(URL.createObjectURL(event.target.files[0]));
      index = images.length - 1;
    }
    this.setState({
      listerImages: images,
      listerImageDisplayIndex: index
    });
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
          src={this.state.bookData.pictureurl}
          alt="placeholder"
        />
      </div>
      <div className="col-6">
        <div>
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
                <div className="form-group">
                  <div className="row">
                    {this.state.listerImages.map((image, i) => (
                      <div className="col" key={i}>
                        <img className="img-fuild" src={image} />
                      </div>
                    ))}
                  </div>
                  <div class="upload-btn-wrapper">
                    <button class="img-btn">+</button>
                    <input type="file" onChange={this.onImageUpload} />
                    {this.state.listerImageDisplayIndex && (
                      <img
                        className="img-fluid"
                        src={
                          this.state.listerImages[
                            this.state.listerImageDisplayIndex
                          ]
                        }
                      />
                    )}
                  </div>
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
      <>
        {this.state.renderReady ? (
          <div>
            <div className="container">
              <div className="row-1">
                {this.state.bookData
                  ? this.renderListingForm()
                  : this.renderSearch()}
              </div>
            </div>
          </div>
        ) : (
          <Generics.Body.Loading />
        )}
      </>
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
