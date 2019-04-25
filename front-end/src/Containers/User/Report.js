import React, { Component } from 'react';

import Generics from '../../Generics';

import { User } from '../../api';

let debug = true;

let userJson = {
  data: {
    generalInfo: {
      firstname: 'Qwerty',
      lastname: 'Asdfg',
      email: 'qwe@asd.zxc'
    },
    buyerInfo: {},
    sellerInfo: {}
  }
};

let reportJson = {
  title: 'this guy is a scammer',
  description: 'Hey, this guy scammed me on a different website.'
};

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      userInfo: null,
      targetInfo: null,
      reportTitle: null,
      reportDescription: null,
      reportStatusOpen: false,
      reportResolution: 'user Anon123 is now banned, thank you for your report',
      renderReady: false
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({
        renderReady: true,
        userInfo: userJson.data.generalInfo,
        reportTitle: reportJson.title,
        reportDescription: reportJson.description
      });
    } else {
      User.getUserConfiguration(this.props.match.params.uid).then(data =>
        this.setState({
          renderReady: true,
          firstname: data.generalInfo.firstname,
          lastname: data.generalInfo.lastname,
          email: data.generalInfo.email
        })
      );
    }
  };

  bodyContent = () =>
    this.state.renderReady ? (
      <div className="row" style={{ marginRight: '0' }}>
        <div className="col-2" />
        <div className="col">
          <form className="m-4">
            <div className="form-group">
              <h1>User Report</h1>
            </div>
            <br />
            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-6" htmlFor="form-first-name">
                  Target User
                </label>
                <label className="col-sm-6" htmlFor="form-last-name">
                  Target Listing
                </label>
              </div>
              <div className="form-group row">
                <label className="col-sm-6">Anon123</label>
                <label className="col-sm-6">-</label>
              </div>
            </div>
            <div className="form-group">
              <label>Title</label>
              <br />
              <label>{this.state.reportTitle}</label>
            </div>
            <div className="form-group">
              <label>Description</label>
              <br />
              <label>{this.state.reportDescription}</label>
            </div>
            <div className="form-group">
              <label>Report Status</label>
              <br />
              <button className="btn btn-danger">Closed</button>
            </div>
            <div className="form-group">
              <label>Report Resolution</label>
              <br />
              <label>{this.state.reportResolution}</label>
            </div>
          </form>
        </div>
        <div className="col-2" />
      </div>
    ) : (
      <Generics.Body.Loading />
    );

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    User.postUserConfiguration({
      uid: this.props.match.params.uid,
      configuration: {
        generalInfo: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.lastname
        },
        buyerInfo: {},
        sellerInfo: {}
      }
    }).then(response => {
      if (response.ok) {
        window.location = './';
      } else {
        console.log(response);
      }
    });
  };

  render = () => (
    <div>
      <Generics.NavBar />
      <Generics.Body
        noSideBar={!this.state.showSideBar}
        content={this.bodyContent()}
      />
      <Generics.Footer />
    </div>
  );
}

export default Report;
