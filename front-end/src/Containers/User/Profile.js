import React, { Component } from 'react';

import Generics from '../../Generics';

import { User } from '../../api';

let debug = true;
let json = {
  profileData: {
    firstname: 'Bob',
    lastname: 'Ross',
    email: 'fake@email.domain',
    rating: 4.3,
    pictureurl:
      'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    description:
      'this is a placeholder account. Turn off debug to switch to an actual profile.'
  },
  chatListData: [
    {
      cid: 24,
      sender: 'jimmy99',
      lastMessage: 'Hi',
      time: '14:22 24-03-2019'
    },
    {
      cid: 12,
      sender: 'looking4FreeBooks',
      lastMessage: 'Heyy',
      time: '10:02 22-03-2019'
    },
    {
      cid: 16,
      sender: 'yourDad',
      lastMessage: 'Hello',
      time: '06:12 16-03-2019'
    },
    {
      cid: 39,
      sender: 'xXxpageDestroyerxXx',
      lastMessage: 'Yo',
      time: '23:57 01-03-2019'
    }
  ]
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: true,
      chatListData: [],
      profileData: null,
      display: null,
      onUserNavigation: {
        Profile: this.onProfile,
        Message: this.onMessage,
        Review: this.onReview,
        Listing: this.onListing
      },
      renderReady: false
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.profileSideBar = this.profileSideBar.bind(this);
    this.userNavigation = this.userNavigation.bind(this);
    this.userContent = this.userContent.bind(this);
    this.displayRating = this.displayRating.bind(this);
    this.onUserNavigation = this.onUserNavigation.bind(this);
    this.onProfile = this.onProfile.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onReview = this.onReview.bind(this);
    this.onListing = this.onListing.bind(this);
    this.onReport = this.onReport.bind(this);
    this.onConfigure = this.onConfigure.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({
        chatListData: json.chatListData,
        profileData: json.profileData,
        display: 'Profile'
      });
    } else {
      let { uid } = this.state;
      User.getUserProfile(uid).then(profileData => {
        if (profileData.error) {
          window.location = '/404';
        } else {
          User.getUserChatList(uid).then(chatListData =>
            this.setState({ chatListData, profileData, display: 'Profile' })
          );
        }
      });
    }
  };

  bodyContent = () => {
    let guest = this.state.guest;
    return (
      <div>
        {this.state.display ? (
          <div
            className="container"
            style={{
              minHeight: '68vh',
              marginTop: '8vh',
              paddingBottom: '8vh'
            }}
          >
            <div className="row">
              {this.profileSideBar({ guest })}
              <div
                className="col"
                style={{
                  marginLeft: '2em  '
                }}
              >
                {this.userNavigation()}
                {this.userContent({ guest })}
              </div>
            </div>
          </div>
        ) : (
          <Generics.Body.Loading />
        )}
      </div>
    );
  };

  profileSideBar = ({ guest }) => (
    <div
      className="col-3"
      style={{
        marginTop: '2em'
      }}
    >
      <img
        src={this.state.profileData.pictureurl}
        className="img-fluid img-thumbnail"
        alt="profile"
        style={{
          borderBottomWidth: '0',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0'
        }}
      />
      <ul className="list-group">
        <li
          className="list-group-item text-center"
          style={{
            borderTopWidth: '0',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0'
          }}
        >
          <h3>
            {this.state.profileData.firstname} {this.state.profileData.lastname}
          </h3>
          {this.state.profileData.rating &&
            this.displayRating(this.state.profileData.rating)}
        </li>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          name="Message"
          onClick={this.onMessage}
        >
          <i className="fa fa-envelope" /> Message
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          name="Review"
          onClick={this.onReview}
        >
          <i className="fa fa-star" /> Review
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          name="Listing"
          onClick={this.onListing}
        >
          <i className="fa fa-list" /> Listing
        </button>
        {guest ? (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.onReport}
          >
            <i className="fa fa-flag" /> Report
          </button>
        ) : (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.onConfigure}
          >
            <i className="fa fa-cogs" /> Configure
          </button>
        )}
      </ul>
    </div>
  );

  userNavigation = () => (
    <ul className="nav justify-content-center nav-tabs">
      {['Profile', 'Message', 'Review', 'Listing'].map((tab, i) => {
        if (this.state.display === tab) {
          return (
            <li key={i} className="nav-item">
              <a
                className="nav-link active"
                href="# "
                name={tab}
                onClick={this.onUserNavigation}
              >
                {tab}
              </a>
            </li>
          );
        } else {
          return (
            <li key={i} className="nav-item">
              <a
                className="nav-link"
                href="# "
                name={tab}
                onClick={this.onUserNavigation}
              >
                {tab}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );

  userContent = ({ guest }) => {
    let { display, profileData, chatListData, uid } = this.state;
    if ('Profile' === display) {
      return (
        <>
          <br />
          <h2>Profile</h2>
          <div>{profileData.description}</div>
        </>
      );
    } else if ('Message' === display) {
      return (
        <div>
          <br />
          {chatListData.map((chat, i) => (
            <div className="row" key={i}>
              <div class="col">
                <div
                  className="card"
                  onClick={_ => (window.location = `./${uid}/chat/${chat.cid}`)}
                >
                  <div className="card-body">
                    <h5 className="card-title">{chat.sender}</h5>
                    <p className="card-text text-dark">{chat.time}</p>
                    <p className="card-text">{chat.lastMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if ('Review' === display) {
      return (
        <div>
          <br />
          to do
        </div>
      );
    } else if ('Listing' === display) {
      return (
        <div>
          <br />
          to do
        </div>
      );
    }
  };

  displayRating = rating => {
    return (
      <span>
        <br />
        <Generics.Body.RatingStar rating={rating} />
      </span>
    );
  };

  onUserNavigation = event => {
    this.state.onUserNavigation[event.target.name](event);
  };

  onProfile = event => {
    event.preventDefault();
    this.setState({ display: event.target.name });
  };

  onMessage = event => {
    event.preventDefault();
    this.setState({ display: event.target.name });
  };

  onReview = event => {
    event.preventDefault();
    this.setState({ display: event.target.name });
  };

  onListing = event => {
    event.preventDefault();
    this.setState({ display: event.target.name });
  };

  onReport = event => {
    event.preventDefault();
  };

  onConfigure = event => {
    event.preventDefault();
  };

  render = () => {
    return (
      <div>
        <Generics.NavBar />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={this.bodyContent()}
        />
        <Generics.Footer />
      </div>
    );
  };
}

export default Profile;
