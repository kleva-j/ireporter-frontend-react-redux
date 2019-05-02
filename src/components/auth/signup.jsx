/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../loaders';
import Navbar from '../header/Index';
import Nav from '../header/signedOutLinks';
import { signupAction } from '../../store/actions';
import ListErrors from '../listErrors';

const Signup = (props) => {
  const [errors, setErrors] = useState([]);
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    password2: ''
  });

  const {
    signUp, history, inProgress,
  } = props;

  const updateSignupDetails = (event) => {
    setErrors([]);
    setUserDetails({
      ...userDetails, [event.target.name]: event.target.value
    });
  };

  const {
    firstname, lastname, username, email,
    phonenumber, password, password2
  } = userDetails;

  const submitForm = async (event) => {
    event.preventDefault();
    setErrors([]);
    if (password !== password2) return setErrors(['Ensure the password and confirm password are the same']);
    const result = await signUp(userDetails);
    if (result && result.response.body.status !== 201) {
      const { response: { body: { error } } } = result;
      return setErrors([error]);
    }
    return history.push('/profile');
  };

  return (
    <>
      <Navbar>
        <Nav />
      </Navbar>
      <div className="container j-c-c">
        <form method="POST" className="login-form w-100" onSubmit={submitForm}>
          <ListErrors errors={errors} active color="red" />
          {inProgress && <Loader loading />}
          <h1 className="h1">Sign Up</h1>
          <div className="row">
            <div className="col mg-r">
              <input type="text" value={firstname} className="form-control" name="firstname" placeholder="Firstname" minLength="2" required onChange={updateSignupDetails} />
            </div>
            <div className="col mg-l">
              <input type="text" value={lastname} minLength="2" className="form-control" name="lastname" placeholder="Lastname" required onChange={updateSignupDetails} />
            </div>
          </div>

          <div className="form-group">
            <input type="text" value={username} minLength="6" className="form-control" name="username" placeholder="Username" required onChange={updateSignupDetails} />
          </div>
          <div className="form-group">
            <input type="email" value={email} className="form-control" name="email" placeholder="Email Address" required onChange={updateSignupDetails} />
          </div>
          <div className="form-group">
            <input type="tel" value={phonenumber} className="form-control" name="phonenumber" placeholder="Phone number" pattern="^[0]\d{10}$" required onChange={updateSignupDetails} />
          </div>
          <div className="form-group">
            <input type="password" value={password} minLength="6" className="form-control" name="password" placeholder="Password" required onChange={updateSignupDetails} />
          </div>
          <div className="form-group">
            <input type="password" value={password2} minLength="6" className="form-control" name="password2" placeholder="Confirm Password" required onChange={updateSignupDetails} />
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
};

const mapStateToProps = ({ authReducer }) => ({ ...authReducer });

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signupAction(userData)),
});

Signup.propTypes = {
  signUp: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
