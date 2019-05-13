import React, { Component } from 'react';

import Generics from '../../Generics';
import './UserListing.css';

import { BookInfo, Search, UserListing as UserListingAPI } from '../../api';

class CreateUserListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: props.match.params.uid,
      bid: null,
      showSideBar: false,
      search: '',
      searchSuggestion: <ul />,
      bookData: null,
      userDescription: '',
      userPrice: 0,
      listData: null,
      bookCondition: 'Book Condition',
      listerImages: [],
      listerImageDisplayIndex: null,
      listerImageCapacity: 5,
      renderReady: false
    };
  }

  componentDidMount = () => {
    this.setState({ renderReady: true });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onChangeSearch = event => {
    let search = event.target.value;
    Search.getSearchByTitle(search).then(({ data: books }) => {
      this.setState({
        search,
        searchSuggestion: (
          <ul>
            {books.map((book, i) => {
              if (
                '' !== search &&
                book.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return (
                  <li
                    key={i}
                    onClick={this.onSuggestion}
                    value={book.title}
                    bookid={book.bid}
                  >
                    {book.title}
                  </li>
                );
              } else {
                return <div key={i} />;
              }
            })}
          </ul>
        )
      });
    });
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
  onImageRemove = _ => {
    let { listerImages, listerImageDisplayIndex } = this.state;
    let images = listerImages;
    if (0 < images.length) {
      images.pop();
      if (0 === images.length) {
        this.setState({ listerImages: images, listerImageDisplayIndex: null });
      } else if (listerImageDisplayIndex === images.length) {
        this.setState({
          listerImages: images,
          listerImageDisplayIndex: listerImageDisplayIndex - 1
        });
      } else {
        this.setState({ listerImages: images });
      }
    }
  };
  onSubmit = event => {
    event.preventDefault();
    UserListingAPI.putListing(
      this.state.uid,
      this.state.bookData.bid,
      this.state.userPrice,
      this.state.bookCondition
    ).then(({ bid, lid }) => {
      window.location = `/book/${bid}/list/${lid}`;
    });
  };

  onShowOrHide = _ => this.setState({ showSideBar: !this.state.showSideBar });

  onSuggestion = event => {
    let bid = event.target.getAttribute('bookid');
    BookInfo.getBookInfo(bid).then(bookData => this.setState({ bookData }));
  };

  renderSearch = () => (
    <>
      <form>
        <div className="form-group">
          <div>Type in the book title you want to sell</div>
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
      <br />
      <div className="row">
        <div className="col-6">
          <img
            className="d-block w-100"
            src={this.state.bookData.pictureurl}
            alt="placeholder"
          />
          <br />
          <div className="row">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <p>Upload up to 5 images of the book you wish to sell.</p>
                  <label
                    htmlFor="file-upload"
                    className="img-btn-plus"
                    style={{ display: 'inline-block' }}
                  >
                    +
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={this.onImageUpload}
                    style={{ display: 'none' }}
                  />
                  <button
                    className="img-btn-minus"
                    onClick={this.onImageRemove}
                    style={{ marginRight: '15px', display: 'inline-block' }}
                  >
                    -
                  </button>
                  current image:
                  {
                    <img
                      alt="cover"
                      className="img-fluid"
                      src={
                        this.state.listerImages[
                          this.state.listerImageDisplayIndex
                        ]
                      }
                    />
                  }
                </div>

                <div className="col-6">
                  <div className="row">
                    {this.state.listerImages.map((image, i) => (
                      <div className="UploadedImage" key={i}>
                        <img alt="cover" className="img-fluid" src={image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <form>
              <div className="col">
                <div className="text-default">
                  Title: {this.state.bookData.title}
                </div>
                <br />
                <div className="text-default">
                  Description: {this.state.bookData.description}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="form">User description:</label>
                  <textarea
                    rows="4"
                    type="userDescription"
                    className="form-control"
                    id="form-userDescription"
                    placeholder="Enter book description"
                    name="userDescription"
                    value={this.state.userDescription}
                    onChange={this.onChange}
                  />
                </div>
                Book Condition:
                <select
                  className="custom-select"
                  name="bookCondition"
                  value={this.state.bookCondition}
                  onChange={this.onChange}
                >
                  <option value="Book Condition">Book Condition</option>
                  <option value="New">New</option>
                  <option value="Fair">Fair</option>
                  <option value="Used(no missing pages)">
                    Used(no missing pages)
                  </option>
                  <option value="Missing pages">Missing pages</option>
                  <option value="Bad">Bad</option>
                </select>
                <div className="form-group">
                  Price:
                  <textarea
                    rows="1"
                    type="userPrice"
                    className="form-control"
                    id="form-userPrice"
                    placeholder="Enter price"
                    name="userPrice"
                    value={this.state.userPrice}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Sell
            </button>
          </div>
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

export default CreateUserListing;
