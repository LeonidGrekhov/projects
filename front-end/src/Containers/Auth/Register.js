import React, { Component } from 'react';

import Generics from '../../Generics';

import { Auth } from '../../api';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    Auth.getRegister().then(response => {
      if (!response.ok) {
        window.location = '/';
      }
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    Auth.postRegister(
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.password
    ).then(response => {
      if (response.ok) {
        console.log(response.text());
        console.log(this.state);
        //window.location = '/';
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
          <div
            className='container'
            style={{
              minHeight: '68vh',
              marginTop: '12vh'
            }}
          >
            <form>
              <div className='form-group'>
                <div className='form-group row'>
                  <label className='col-sm-6' htmlFor='form-first-name'>
                    First Name
                  </label>
                  <label className='col-sm-6' htmlFor='form-last-name'>
                    Last Name
                  </label>
                </div>
                <div className='form-group row'>
                  <input
                    type='text'
                    className='form-control col'
                    id='form-first-name'
                    placeholder='Enter  first name'
                    name='firstname'
                    value={this.state.name}
                    onChange={this.onChange}
                    style={{ marginLeft: '1em', marginRight: '1em' }}
                  />
                  <input
                    type='text'
                    className='form-control col'
                    id='form-last-name'
                    placeholder='Enter last name'
                    name='lastname'
                    value={this.state.name}
                    onChange={this.onChange}
                    style={{ marginLeft: '1em', marginRight: '1em' }}
                  />
                </div>
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
