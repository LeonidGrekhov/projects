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

class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      userInfo: null,
      targetInfo: null,
      reportTitle: null,
      reportDescription: null,
      renderReady: false
    };
    this.bodyContent = this.bodyContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    if (debug) {
      this.setState({
        renderReady: true,
        userInfo: userJson.data.generalInfo
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
                <input
                  type="text"
                  className="form-control col"
                  id="form-first-name"
                  placeholder="Enter target user id"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  style={{ marginLeft: '1em', marginRight: '1em' }}
                />
                <input
                  type="text"
                  className="form-control col"
                  id="form-last-name"
                  placeholder="Enter target listing id"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  style={{ marginLeft: '1em', marginRight: '1em' }}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter report title"
                name="reportTitle"
                value={this.state.reportTitle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                row="3"
                type="text"
                className="form-control"
                placeholder="Enter report description"
                name="reportDescription"
                value={this.state.reportDescription}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.onSubmit}
            >
              Submit User Report
            </button>
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

export default ReportForm;
