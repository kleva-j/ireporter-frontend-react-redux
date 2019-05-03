import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile-pic.png';

const Sidebar = () => (
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
          <h4 className="crop mg-t bolder" id="name">Name</h4>
          <h4 className="crop mg-t">
            <i id="uname">Username</i>
          </h4>
          <h4 className="crop mg-t bold" id="email">Email</h4>
          <h4 className="crop mg-t bold" id="phone">PhoneNumber</h4>
        </div>
      </div>
    </div>

    <div className="details">
      <ul className="list-item">
        <li className="item">
          <Link to="/incidents/red-flag"><i className="hic fas fa-flag-checkered" title="red-flags" /></Link>
          <Link to="/incidents/red-flag" className="sd">
            Red-Flags
            {' '}
            <b>124</b>
          </Link>
        </li>

        <li className="item">
          <Link to="/incidents/intervention"><i className="hic fas fa-headset" title="interventions" /></Link>
          <Link to="/incidents/intervention" className="sd">
            Interventions
            {' '}
            <b>75</b>
          </Link>
        </li>

      </ul>
    </div>
  </div>
);

export default Sidebar;
