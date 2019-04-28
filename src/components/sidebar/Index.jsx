import React from 'react';
import profileImage from '../../assets/images/profile-pic.png';

const Sidebar = () => {
  return (
    <div className="left">

      <div className="profile">

        <div className="user item">
          <a href=""><i className="fas fa-user-circle" title="user profile"></i></a>
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
            <a href="/api/v1/redflag"><i className="hic fas fa-flag-checkered" title="red-flags"></i></a>
            <a href="/api/v1/redflag" className="sd">Red-Flags <b>124</b></a>
          </li>

          <li className="item">
            <a href="/api/v1/intervention"><i className="hic fas fa-headset"  title="interventions"></i></a>
            <a href="/api/v1/intervention" className="sd">Interventions <b>75</b></a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;