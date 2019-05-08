import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';

const Logout = (props) => {
  const { logout, history } = props;
  useEffect(() => {
    logout();
    history.push('/');
  });
  return (<></>);
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Logout);
