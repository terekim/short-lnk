import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long'});
    }
    Accounts.createUser({
      email,
      password
    }, (err) => {
      if (err) {
        this.setState({error: err.reason});
      }
      else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Signup to Short Link</h1>
          {this.state.error
            ? <p>{this.state.error}</p> : undefined}
          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create an account</button>
          </form>
          <Link to="/">Have an account?</Link>
        </div>
      </div>
    )
  }
}
