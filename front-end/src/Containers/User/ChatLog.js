import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

class ChatLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logData: props.logData
    };
  }

  componentWillReceiveProps = props => {
    this.setState({ logData: props.logData });
  };

  componentDidMount = () => {
    this.ps = new PerfectScrollbar(ReactDOM.findDOMNode(this));
  };

  componentDidUpdate = _ => {
    ReactDOM.findDOMNode(this).scrollTop = ReactDOM.findDOMNode(
      this
    ).scrollHeight;
    this.ps.update();
  };

  render = () => {
    return (
      <p className="border">
        {this.state.logData.map((message, i) => (
          <p className="text-dark mx-4" key={i}>
            {' '}
            {message}{' '}
          </p>
        ))}
      </p>
    );
  };
}

export default ChatLog;
