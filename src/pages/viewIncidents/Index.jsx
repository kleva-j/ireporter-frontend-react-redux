import React from 'react';
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';
import IncidentList from '../../components/incidentWrapper/wrapper';

const ViewIncident = props => {
  const { type, isAdmin } = props;
  return (
    <>
      <Navbar>
        <Nav dashboard />
      </Navbar>
      <section>
        <div className="flex">
          <Sidebar />
          <div className="right w-100">
            <div className="breadboard">
              <div className="breadboard-header j-c-sb mg-t-b flex-block-i">
                <h3 className="flex-75 t-c mg-0 f-s-2">Your {type} Records</h3>
                <input type="search" name="searchbar" placeholder="Search here" className="search flex-25" />
              </div>

              <div className="flex">
                  <div className="grow-1"></div>
                  <span className="btn bd-create mg-b"><Link to="/create-incident" className="blu">+ Create Intervention</Link></span>
                </div>

              <div className="dip">
                <ul className="list-item">
                  <IncidentList />
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewIncident;
