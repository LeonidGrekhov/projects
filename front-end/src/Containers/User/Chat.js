import React, { Component } from 'react';

import Generics from '../../Generics';
import ChatLog from './ChatLog';

import { User, socket } from '../../api';

import './Chat.css';

let debug = true;

let json = {
  bookData: {
    title: 'book1',
    isbn: '111-111-111',
    authors: ['Adam Bob', 'Calvin Dan'],
    rating: 2.5,
    description: 'nothing, you are on debug mode',
    pictureurl:
      'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
  },
  listData: {
    seller: 'charlie',
    rating: 5.0,
    condition: 'new',
    price: 11.09,
    description: 'I bought the wrong book, and I missed the return deadline.'
  },
  logData: [
    'bob: Hi, Im interested in buying your listing.',
    'charlie: thank you for your interest. Do you have any questions regarding to my listing?',
    'bob: ya, you listed the textbook as 80, but I only have 40.',
    "charlie: oh I'm sry. The price is firm.",
    'bob: could you lower it a bit?',
    'charlie: I bought the book at 240 and I hardly use it. tbf 80 is already a steal',
    'bob: im a single parent, and balancing between education, job, and parenting has been taking a huge toll on both my mental and physical stability, could you lower the price a bit? please?',
    'charlie: I guess I can lower it to 75, but no more lower than that as 80 already was a steal',
    'bob: only 5 bucks? Please lower it more! My son has cancer!',
    'charlie: iM sOrrY thAt yOuR sOn HaS cANcEr, bUT iCAnT loWeR iT aNyMoRe tHan 75',
    'bob: why are you typing like that? Is this a joke to you?',
    'charlie: no, ofc not, my keyboard broke and iT MirAcuLoUSly fiXEd iTself, oh gdi',
    'bob: get f-ed'
  ]
};

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: props.match.params.uid,
      cid: props.match.params.cid,
      bookData: null,
      listData: null,
      logData: [],
      message: '',
      renderReady: false
    };
    socket.on(`${this.state.cid}:messageReceived`, this.onMessageReceived);
  }

  componentDidMount = () => {
    if (debug) {
      let { bookData, listData, logData } = json;
      this.setState({ bookData, listData, logData, renderReady: true });
    } else {
      let { uid, cid } = this.state;
      User.getUserChatLog({ uid, cid }).then(
        ({ bookData, listData, logData }) =>
          this.setState({ bookData, listData, logData, renderReady: true })
      );
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onMessageReceived = message => {
    let { logData } = this.state;
    logData.push(message);
    this.setState({ logData });
  };

  onSubmit = event => {
    event.preventDefault();
    if (debug) {
      let { logData, message } = this.state;
      logData.push(message);
      this.setState({ logData, message: '' });
    } else {
      let { uid, cid, message } = this.state;
      User.postUserChatLog({ uid, cid, message });
      this.setState({ message: '' });
    }
  };

  bodyContent = () => (
    <>
      {this.state.renderReady ? (
        <>
          {this.itemInfo()}
          {this.chatContainer()}
        </>
      ) : (
        <Generics.Body.Loading />
      )}
    </>
  );

  itemInfo = () => (
    <div className="row my-4">
      <div className="col-1" />
      <div className="col">
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
            <h5>
              author(s):{' '}
              {this.state.bookData.authors.map((author, i) => (
                <span key={i}>{(0 === i ? ' ' : ', ') + author}</span>
              ))}
            </h5>
            <span>isbn: {this.state.bookData.isbn}</span>
            <br />
            <div className="row">
              <div className="col-2">rating:</div>
              <div className="col-2">
                <Generics.Body.RatingStar
                  rating={this.state.bookData.rating}
                  dimension={12}
                />
              </div>
            </div>
            <h6>{this.state.bookData.description}</h6>
          </div>
        </div>
      </div>
      <div className="col">
        <h1>Listing Information</h1>
        <div className="row my-3">
          <div className="col-1" />
          <div className="col">
            <h5>Seller: {this.state.listData.seller}</h5>
            <div className="row">
              <div className="col-2">rating:</div>
              <div className="col-2">
                <Generics.Body.RatingStar
                  rating={this.state.listData.rating}
                  dimension={12}
                />
              </div>
            </div>
            <br />
            <h6>condition: {this.state.listData.condition}</h6>
            <h6>price: {this.state.listData.price}</h6>
            <h6>description: {this.state.listData.description}</h6>
          </div>
          <div className="col-2" />
        </div>
      </div>
      <div className="col-1" />
    </div>
  );

  chatContainer = () => (
    <>
      <div className="row m-4">
        <div className="col-1" />
        <div className="col">
          <h1>ChatLog</h1>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-1" />
        <div className="col">
          <ChatLog logData={this.state.logData} />
        </div>
        <div className="col-1" />
      </div>
      <div className="row m-4">
        <div className="col-1" />
        <div className="col">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control litlister-remove-focus-outline"
                placeholder="type your message here"
                name="message"
                value={this.state.message}
                onChange={this.onChange}
              />
              <div className="input-group-append">
                <button
                  className="input-group-text bg-success text-light"
                  onClick={this.onSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-1" />
      </div>
    </>
  );

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

export default Chat;
