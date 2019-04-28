import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../header/Index';
import Nav from '../header/signedOutLinks';
import { loginRequest, updateAuthField, loginPageUnloaded } from '../../store/Actions/index';
import agent from '../../store/agent';
import ListErrors from '../listErrors';

const { Auth } = agent;

export class Signup extends Component {
  constructor(props) {
    super(props);
    const { updateSignupField, onSubmit } = this.props;
  }

  render() {
    const { errors } = this.props;
    return (
      <>
        <Navbar>
          <Nav />
        </Navbar>
        <div className="container j-c-c">
          <form method="POST" className="login-form w-100">
            <ListErrors errors={errors} />
            <h1 className="h1">Sign Up</h1>

            <div className="row">
              <div className="col mg-r">
                <input type="text" className="form-control" name="firstname" placeholder="Firstname" required />
              </div>
              <div className="col mg-l">
                <input type="text" className="form-control" name="lastname" placeholder="Lastname" required />
              </div>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" name="username" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" name="phonenumber" placeholder="Phone number" pattern="^[0]\d{10}$" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password2" placeholder="Confirm Password" required />
            </div>

            <button type="submit" className="btn primary">Sign up</button>
            <small className="block text-dark">
              Already have an account? log in
              {' '}
              <a className="underscore" href="/login">Here</a>
            </small>
          </form>
        </div>
      </>
    );
  }
}

Signup.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

Signup.defaultProps = {
  errors: [],
};

const mapDispatchToProps = dispatch => ({
  updateSignupField: (key, value) => dispatch(updateAuthField(key, value)),
  onSubmit: userData => dispatch(signupRequest(userData)),
});

const mapStateToProps = ({ auth }) => ({ ...auth });

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
