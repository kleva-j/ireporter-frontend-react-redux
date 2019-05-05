import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import profileImage from '../../assets/images/profile-pic.png';

const Sidebar = (props) => {
  const { profile: { firstname, lastname, username, email, phonenumber },
    redFlag, intervention } = props;
  return (
    <div className="left">

      <div className="profile">

        <div className="user item">
          <Link to=""><i className="fas fa-user-circle" title="user profile" /></Link>
        </div>
        <div className="close">
          <div className="mg-t">
            <img id="profile-img" src={profileImage} alt="Profile" />
          </div>
          <div className="h-50">
            <h4 className="crop mg-t bolder" id="name">{`${firstname || ''} ${lastname || ''}`}</h4>
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
            <a href="/incidents/red-flag"><i className="hic fas fa-flag-checkered" title="red-flags" /></a>
            <a href="/incidents/red-flag" className="sd">
              Red-Flags
              {' '}
              <b>{redFlag}</b>
            </a>
          </li>

          <li className="item">
            <a href="/incidents/intervention"><i className="hic fas fa-headset" title="interventions" /></a>
            <a href="/incidents/intervention" className="sd">
              Interventions
              {' '}
              <b>{intervention}</b>
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ profileReducer: { profile } }) => ({ profile });

Sidebar.propTypes = {
  profile: PropTypes.object.isRequired,
  redFlag: PropTypes.object.isRequired,
  intervention: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Sidebar);
