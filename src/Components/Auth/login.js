/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest, updateAuthField, loginPageUnloaded } from '../../Store/Actions';
import agent from '../../Store/agent';
import ListErrors from '../ListErrors';

const { Auth } = agent;

class Login extends Component {
  constructor(props) {
    super(props);
    const { updateLoginField, onSubmit } = this.props;
    this.successLogin = this.successLogin.bind(this);
    this.updateLoginField = ev => updateLoginField(ev.target.name, ev.target.value);
    this.submitForm = (username, password) => (ev) => {
      ev.preventDefault();
      onSubmit({ username, password }, this.successLogin);
    };
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  successLogin() {
    const { currentUser, history, redirectTo } = this.props;
    const isUser = (currentUser.constructor === Object && Object.keys(currentUser).length === 0);
    if (isUser) return;
    history.push(redirectTo);
  }

  render() {
    const { username, password, errors } = this.props;
    return (
      <div className="container j-c-c">
        <form method="POST" className="login-form w-100">
          <ListErrors errors={errors} />
          <h1 className="h1">Log In</h1>
          <div className="form-group">
            <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={this.updateLoginField} />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={this.updateLoginField} />
          </div>
          <button type="submit" className="btn primary" onClick={this.submitForm(username, password)}>Log in</button>
          <small className="block text-dark">
          Don't have an account? sign up
            <a className="underscore" href="/signup"> Here</a>
          </small>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ ...auth });

const mapDispatchToProps = dispatch => ({
  updateLoginField: (key, value) => dispatch(updateAuthField(key, value)),
  onSubmit: ({ username, password }, callback) => dispatch(
    loginRequest(Auth.login(username, password), callback),
  ),
  onUnload: () => dispatch(loginPageUnloaded()),
});

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  updateLoginField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  currentUser: PropTypes.instanceOf(Object),
  history: ReactRouterPropTypes.history.isRequired,
  redirectTo: PropTypes.node,
};

Login.defaultProps = {
  errors: [],
  currentUser: {},
  redirectTo: null,
  username: '',
  password: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
