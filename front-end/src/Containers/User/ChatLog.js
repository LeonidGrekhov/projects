import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

class ChatLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatLogData: props.chatLogs
    };
  }

  componentWillReceiveProps = props => {
    this.setState({ chatLogData: props.chatLogs });
  };

  componentDidMount = () => {
    this.ps = new PerfectScrollbar(ReactDOM.findDOMNode(this));
    let height = ReactDOM.findDOMNode(this).clientHeight;
    ReactDOM.findDOMNode(this).scrollTop = height;
    this.ps.update();
    ReactDOM.findDOMNode(this).scrollTo(0, height);
  };

  componentDidUpdate = _ => {
    ReactDOM.findDOMNode(this).scrollTop = ReactDOM.findDOMNode(
      this
    ).scrollHeight;
    this.ps.update();
  };

  render = () => {
    return (
      <div className="border">
        {this.state.logData.map(({ message }, i) => (
          <p className="text-dark mx-4" key={i}>
            {' '}
            {message}{' '}
          </p>
        ))}
      </div>
    );
  };
}

export default ChatLog;
