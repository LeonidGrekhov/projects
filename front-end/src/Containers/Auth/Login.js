import React, { Component } from 'react';
import { Auth as api } from '../../api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      log: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLogin() {
    api
      .postLogin(this.state.email, this.state.password)
      .then(log => this.setState({ log: JSON.stringify(log) }));
  }

  render() {
    return (
      <div>
        <div>Placeholder Log In</div>
        <br />
        Email:
        <br />
        <input
          name="email"
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <br />
        Password:
        <br />
        <input
          name="password"
          type="text"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <br />
        <br />
        <button type="button" className="btn btn-info" onClick={this.onLogin}>
          Log In
        </button>
        <br />
        API log:
        <br />
        {this.state.log}
      </div>
    );
  }
}

export default Login;
