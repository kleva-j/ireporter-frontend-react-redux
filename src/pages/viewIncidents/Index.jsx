/* eslint-disable react/jsx-no-bind */
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
  const [type, setType] = useState('red-flag');

  const { getIncidents,
    inProgress,
    incidents } = props;

  const linkToPath = `/create-incident/${path}`;

  const getRecord = async (newPath) => {
    const result = newPath ? await getIncidents(newPath) : await getIncidents(path);
    if (result) Toast.notify('There was an error fetching your records');
  };

  const setNewContexts = (newType, newPath) => {
    setPath(newPath);
    setType(newType);
  };

  useEffect(() => {
    getRecord();
    setPath(path);
  }, []);

  return (
    <>
      <Navbar>
        <Nav dashboard />
      </Navbar>
      <section>
        <div className="flex">
          <Sidebar changePath={setNewContexts} getRecord={getRecord} />
          <div className="right w-100">
            <div className="breadboard">
              <div className="breadboard-header j-c-sb mg-t-b flex-block-i">
                <h3 className="flex-75 t-c mg-0 f-s-2">
                  Your
                  {' '}
                  {type}
                  {' '}
                  Records
                </h3>
                <input type="search" name="searchbar" placeholder="Search here" className="search flex-25" />
              </div>

              <div className="flex">
                <div className="grow-1" />
                <span className="btn bd-create mg-b">
                  <Link to={linkToPath} className="blu">
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
