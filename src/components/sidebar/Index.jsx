/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfile } from '../../store/actions/profileActions';

const Sidebar = (props) => {
  const { profile, changePath, getUserProfile, getRecord } = props;

  const setIntervention = () => {
    changePath('intervention', 'interventions');
    if (getRecord) getRecord('interventions');
  };

  const getUserProfiles = async () => {
    await getUserProfile();
  };

  useEffect(() => {
    getUserProfiles();
  }, []);

  const setRedFlag = () => {
    changePath('red-flag', 'red-flags');
    if (getRecord) getRecord('red-flags');
  };

  const { firstname, lastname, username, email, phonenumber } = profile || '';

  return (
    <div className="left">

      <div className="profile">

        <div className="user item">
          <Link to="/profile"><i className="fas fa-user-circle" title="user profile" /></Link>
        </div>
        <div className="close">
          <div className="mg-t">
            <img id="profile-img" src="https://img.icons8.com/material-sharp/100/000000/gender-neutral-user.png" alt="Profile" />
          </div>
          <div className="h-50">
            <h4 className="crop mg-t bolder" id="name">
              {firstname}
              {' '}
              {lastname}
            </h4>
            <h4 className="crop mg-t">
              <i id="uname">{username}</i>
            </h4>
            <h4 className="crop mg-t bold" id="email">{email}</h4>
            <h4 className="crop mg-t bold" id="phone">{phonenumber}</h4>
          </div>
        </div>
      </div>

      <div className="details">
        <ul className="list-item">
          <li className="item">
            <Link to="/incidents/red-flag" onClick={setRedFlag}><i className="hic fas fa-flag-checkered" title="red-flags" /></Link>
            <Link to="/incidents/red-flag" onClick={setRedFlag} className="sd">
              Red-Flags
            </Link>
          </li>

          <li className="item">
            <Link to="/incidents/intervention" onClick={setIntervention}><i className="hic fas fa-headset" title="interventions" /></Link>
            <Link to="/incidents/intervention" onClick={setIntervention} className="sd">
              Interventions
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ profileReducer: { profile } }) => ({ profile });
const mapDispatchToProps = () => dispatch => ({
  getUserProfile: () => dispatch(getProfile()),
});

Sidebar.propTypes = {
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  changePath: PropTypes.func,
  getRecord: PropTypes.func,
};

Sidebar.defaultProps = {
  getRecord: () => {},
  changePath: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
