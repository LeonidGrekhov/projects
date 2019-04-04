import React, { Component } from 'react';

import { Auth } from '../../api';

import logo from './logo.svg';
import './NavBar.css';
import cartLogo from './shoppingCart.svg';

let debugUser = true;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  componentDidMount = () => {
    if (debugUser) {
      this.setState({
        user: {
          firstname: 'Rob'
        }
      });
    }
  };

  ComponentWillReceiveProps = props => {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLogin = event => {
    event.preventDefault();
    Auth.postLogin(this.state.email, this.state.password).then(response => {
      if (response.user) {
        this.setState({ user: response.user });
      } else {
        console.log(response.error);
      }
    });
  };

  onRegister = event => {
    event.preventDefault();
    window.location = '/register';
  };

  render = () => {
    let navBarSearchForm = (
      <form className='form-inline flex-fill '>
        <input
          className='form-control mr-sm-2 flex-fill'
          id='navBarSearchInput'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button
          className='btn btn-outline-success mr-2 my-2 my-sm-2'
          type='submit'
        >
          Search
        </button>
      </form>
    );
    let navBarLogInButton = (
      <div class='dropdown'>
        <button
          variant='primary'
          id='LoginButton'
          className='btn btn-outline-primary mr-2 my-2 my-sm-0 dropdown-toggle'
          type='button'
          id='dropdownLoginButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Login
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownLoginButton'>
          <div className='container'>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  name='email'
                  placeholder='  email'
                  value={this.state.email}
                  onChange={this.onChange}
                  style={{ marginBottom: '1em' }}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  placeholder='  password'
                  value={this.state.password}
                  onChange={this.onChange}
                  style={{ marginBottom: '1em' }}
                />
              </div>
              <div className='form-group'>
                <button
                  className='btn btn-block btn-outline-primary'
                  type='submit'
                  onClick={this.onLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    let navBarSignUpButton = (
      <button
        variant='primary'
        id='SignUpButton'
        className='btn btn-primary my-2 mr-2 my-sm-0'
        type='submit'
        onClick={this.onRegister}
      >
        Sign Up
      </button>
    );
    let navBarCartLogo = (
      <img
        src={cartLogo}
        className='mr-2'
        height='30'
        width='30'
        alt='banner'
      />
    );

    let navBarCartItem = (
      <button
        variant='primary'
        id='cartDiv'
        className='btn btn-primary my-2 mr-2 my-sm-0'
        type='submit'
      >
        {' '}
        0
      </button>
    );

    if (this.state.user) {
      return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' href='/'>
            <img src={logo} height='28' alt='banner' />
            {'  '} ListLister
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            {navBarSearchForm}
            <form className='form-inline my-2 my-lg-0'>
              <div className='text-light'>Hi, {this.state.user.firstname}</div>
              {navBarCartLogo}
              {navBarCartItem}
            </form>
          </div>
        </nav>
      );
    }
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          <img src={logo} height='28' alt='banner' />
          {'  '} ListLister
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav' />
          {navBarSearchForm}
          <form className='form-inline my-2 my-lg-0'>
            {navBarLogInButton}
            {navBarSignUpButton}
            {navBarCartLogo}
            {navBarCartItem}
          </form>
        </div>
      </nav>
    );
  };
}
export default Navbar;
