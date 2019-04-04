import React, { Component } from 'react';

import SideBar from './Sidebar/Sidebar';
import Loading from './Loading/Loading';

class BodyLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: !props.noSideBar
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      showSideBar: !props.noSideBar
    });
  }

  render() {
    return (
      <div className='row'>
        {this.state.showSideBar && (
          <div className='col-2'>
            <SideBar />
          </div>
        )}
        <div className='col'>{this.props.content}</div>
      </div>
    );
  }
}

BodyLanding.Loading = Loading;

export default BodyLanding;
