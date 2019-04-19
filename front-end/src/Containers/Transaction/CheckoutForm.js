import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import { Transaction } from '../../api';

let debug = true;

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tid: props.tid,
      complete: false
    };
    this.submit = this.submit.bind(this);
  }

  submit = _ => {
    this.props.stripe.createToken({name: "Name"}).then( 
      ({token}) => {
        if (debug) {
          this.setState({complete: true});
        } else {
          Transaction.postTransactionInfo({tid: this.state.tid, data: token}).then( response => {
            if (response.ok) {
              this.setState({complete: true});
            } else {
              console.log(response.text().then(data => JSON.parse(data).error));
            }
          });
        }
      });
  }
  

  render = () => {
    if (this.state.complete) {
      return <h1>Purchase Complete</h1>;
    }
  
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
