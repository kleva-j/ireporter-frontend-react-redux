/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../loaders';
import Navbar from '../header/Index';
import Nav from '../header/signedOutLinks';
import { loginAction } from '../../store/actions';
import ListErrors from '../listErrors';

const Login = (props) => {
  const [errors, setErrors] = useState([]);
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });

  const {
    logIn, history, inProgress,
  } = props;

  const submitForm = async (event) => {
    event.preventDefault();
    setErrors([]);
    const result = await logIn(userDetails);
    if (result && result.response.body.status !== 200) {
      const { response: { body: { error } } } = result;
      return setErrors([error]);
    }
    return history.push('/profile');
  };

  const updateLoginDetails = (event) => {
    setErrors([]);
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
          <ListErrors errors={errors} active color="red" />
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
            <a className="underscore" href="/signup"> Here</a>
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
