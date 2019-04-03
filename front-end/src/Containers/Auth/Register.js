import React, { Component } from 'react';

import Generics from '../../Generics';

import { Auth } from '../../api';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      name: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    Auth.getRegister().then(response => {
      if (!response.ok) {
        window.location = '/';
      }
    });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    Auth.postRegister(
      this.state.name,
      this.state.email,
      this.state.password
    ).then(response => {
      if (response.ok) {
        window.location = '/';
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
        content={
          <div className='container'>
            <form>
              <div className='form-group'>
                <label htmlFor='form-name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='form-name'
                  placeholder='Enter name'
                  name='name'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='form-email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='form-email'
                  placeholder='Enter email'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='form-password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='form-password'
                  placeholder='Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={this.onSubmit}
              >
                Register
              </button>
            </form>
          </div>
        }
      />
      <Generics.Footer />
    </div>
  );
}

export default Register;
