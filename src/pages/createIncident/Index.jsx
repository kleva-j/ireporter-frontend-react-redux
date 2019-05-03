/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toast from 'toasted-notes';
import Evidence from '../../components/evidence';
import Map from '../../components/Map/map';
import Loader from '../../components/loaders';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';
import createAction from '../../store/actions/createActions';

const CreateIncident = (props) => {
  const [coord, setCoord] = useState({ lat: '', lng: '' });
  const [recordType, setRecordType] = useState('');
  const [state, setState] = useState({
    subject: '',
    comment: '',
    evidence: '',
    location: '',
    type: recordType ? 'red-flag' : 'intervention'
  });

  const updateState = (event) => {
    setState({
      ...state, [event.target.name]: event.target.value
    });
  };

  const setEvidence = evidence => setState({ ...state, evidence });

  const { history, match: { path }, inProgress, create } = props;

  const submitIncident = async (event) => {
    event.preventDefault();
    const result = await create(state, recordType);
    if (result && result.response.body.status !== 201) {
      const { response: { body: { message } } } = result;
      return Toast.notify(message);
    }
    return history.push(`/incidents/${recordType}`);
  };

  const getPath = () => {
    const splitedPath = path.split('/');
    const type = splitedPath[splitedPath.length - 1];
    setRecordType(type);
  };

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoord({ ...coord, lng: longitude, lat: latitude });
      setState({ ...state, location: `${longitude}, ${latitude}` });
    });
  };

  const findLocation = (event) => {
    event.preventDefault();
    const newCoords = state.location.split(',').map(item => item.trim());
    const joinedCoord = newCoords.join(',');
    const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    const isValidCoord = regex.test(joinedCoord);
    if (isValidCoord) {
      const [lng, lat] = newCoords;
      setCoord({ ...coord, lng, lat });
    } else {
      Toast.notify('Ensure you enter valid coordinates');
    }
  };

  useEffect(() => getPath(), []);

  const { lng, lat } = coord;
  const { subject, comment, location } = state;

  return (
    <>
      <Navbar>
        <Nav />
      </Navbar>
      <section>
        {getCoordinates()}
        <div className="flex">
          <Sidebar />
          <div className="right w-100">
            <div className="breadboard">
              <div className="breadboard-header j-c-sb mg-t-b">
                <h3 className="mg-auto f-s-2">
                  Create Record of
                  {' '}
                  {recordType === 'red-flags' ? ' a Redflag' : 'an Intervention'}
                </h3>
              </div>

              <div className="top">
                <div className="heading mg-b" />
                <form className="container createRecord" onSubmit={submitIncident}>
                  {inProgress && <Loader loading />}
                  <div className="mg-b-lg">
                    <label htmlFor="id" className="bold">Subject: </label>
                    <input type="text" name="subject" id="title" className="form-control mg-t" placeholder="Enter a heading" value={subject} minLength="5" required onChange={updateState} />
                  </div>
                  <div className="mg-b-lg">
                    <label htmlFor="textarea" className="bold">Comment: </label>
                    <textarea className="form-control mg-t" name="comment" id="textarea" placeholder="Description / Story" rows="3" value={comment} minLength="5" required onChange={updateState} />
                  </div>
                  <Evidence setEvidence={setEvidence} />

                  <div id="displayEvidence" className="mg-b-lg" />

                  <div className="form-group">
                    <label htmlFor="address" className="bold">Location: </label>
                    <input type="text" name="location" value={location} placeholder="Enter location e.g 1.2222, 3.4444" className="form-control w-260 mg-t" id="address" onChange={updateState} />
                    <div>
                      <small className="f-s-sm">To make use of your current location leave the input field empty</small>
                    </div>
                    <button className="btn default address" onClick={findLocation}>Find Location</button>
                  </div>
                  <Map lng={lng} lat={lat} />
                  <button type="submit" className="btn primary mg-lg-t-b">Create</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = () => dispatch => ({
  create: (data, type) => dispatch(createAction(data, type))
});

const mapStateToProps = ({ createReducer }) => ({ ...createReducer });

CreateIncident.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateIncident);
