import React, { Component } from 'react';

import SideBar from './Sidebar/Sidebar';
import Loading from './Loading/Loading';
import RatingStar from './RatingStar/RatingStar';

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
      <div className="container-fluid height-100">
        <div className="row h-100">
          {this.state.showSideBar && (
            <div className="col-2">
              <SideBar />
            </div>
          )}
          <div className="col  p-0">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

BodyLanding.Loading = Loading;
BodyLanding.RatingStar = RatingStar;

export default BodyLanding;
