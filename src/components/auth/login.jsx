/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from 'toasted-notes';
import Loader from '../loaders';
import Navbar from '../header/Index';
import Nav from '../header/signedOutLinks';
import { loginAction } from '../../store/actions/authActions';

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });

  const {
    logIn, history, inProgress,
  } = props;

  const submitForm = async (event) => {
    event.preventDefault();
    const result = await logIn(userDetails);
    if (result && result.response.body.status !== 200) {
      return Toast.notify('This is a wrong username or password');
    }
    return history.push('/incidents/red-flag');
  };

  const updateLoginDetails = (event) => {
    setUserDetails({
      ...userDetails, [event.target.name]: event.target.value
    });
  };

  const { username, password } = userDetails;

  return (
    <>
      <Navbar>
        <Nav />
      </Navbar>
      <div className="container j-c-c">
        <form method="POST" className="login-form w-100" onSubmit={submitForm}>
          {inProgress && <Loader loading />}
          <h1 className="h1">Log In</h1>
          <div className="form-group">
            <input type="text" name="username" className="form-control" placeholder="Username" value={username} required onChange={updateLoginDetails} />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" value={password} required onChange={updateLoginDetails} />
          </div>
          <button type="submit" className="btn primary">Log in</button>
          <small className="block text-dark">
          Don't have an account? sign up
            <Link className="underscore" to="/signup"> Here</Link>
          </small>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = ({ authReducer }) => ({ ...authReducer });

const mapDispatchToProps = {
  logIn: loginAction
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
