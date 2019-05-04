import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toast from 'toasted-notes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/loaders';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';
import IncidentList from '../../components/incidentWrapper/wrapper';
import viewAllAction from '../../store/actions/viewAllActions';

const ViewIncident = (props) => {
  const [path, setPath] = useState('red-flags');

  const { getIncidents, match: { path: index }, inProgress, incidents } = props;

  const getPath = async () => {
    const splitedPath = index.split('/');
    const type = (splitedPath[splitedPath.length - 1] === 'red-flag') ? 'red-flags' : 'interventions';
    setPath(type);
    const result = await getIncidents(type);
    if (result) Toast.notify(`There was an error fetching your ${type}`);
  };

  useEffect(() => {
    getPath();
  }, []);

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
                <h3 className="flex-75 t-c mg-0 f-s-2">
                  Your
                  {' '}
                  {path}
                  {' '}
                  Records
                </h3>
                <input type="search" name="searchbar" placeholder="Search here" className="search flex-25" />
              </div>

              <div className="flex">
                <div className="grow-1" />
                <span className="btn bd-create mg-b">
                  <Link to="/create-incident" className="blu">
                    + Create
                    {' '}
                    {path}
                  </Link>

                </span>
              </div>

              <div className="dip">
                {inProgress && <Loader loading />}
                <ul className="list-item">
                  <IncidentList incidents={incidents} />
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ViewIncident.propTypes = {
  match: PropTypes.object.isRequired,
  getIncidents: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  incidents: PropTypes.object.isRequired,
};

const mapStateToProps = ({ viewAllReducer: { inProgress, records } }) => ({
  inProgress, incidents: records,
});

const mapDispatchToProps = () => dispatch => ({
  getIncidents: type => dispatch(viewAllAction(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIncident);
