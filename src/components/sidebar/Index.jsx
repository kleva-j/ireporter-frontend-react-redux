import React from 'react';
import profileImage from '../../assets/images/profile-pic.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="left">

      <div className="profile">

        <div className="user item">
          <Link to=""><i className="fas fa-user-circle" title="user profile"></i></Link>
        </div>
        <div className="close">
          <div className="mg-t">
            <img id="profile-img" src={profileImage} alt="Profile Image" />
          </div>
          <div className="h-50">
            <h4 className="crop mg-t bolder" id="name"></h4>
            <h4 className="crop mg-t"><i id="uname"></i></h4>
            <h4 className="crop mg-t bold" id="email"></h4>
            <h4 className="crop mg-t bold" id="phone"></h4>
          </div>
        </div>
      </div>

      <div className="details">
        <ul className="list-item">
          <li className="item">
            <Link to="/incidents/redflag"><i className="hic fas fa-flag-checkered" title="red-flags"></i></Link>
            <Link to="/incidents/redflag" className="sd">Red-Flags <b>124</b></Link>
          </li>

          <li className="item">
            <Link to="/incidents/intervention"><i className="hic fas fa-headset"  title="interventions"></i></Link>
            <Link to="/incidents/intervention" className="sd">Interventions <b>75</b></Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;