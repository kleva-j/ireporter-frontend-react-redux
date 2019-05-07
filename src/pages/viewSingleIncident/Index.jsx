import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';
import getIncident from '../../store/actions/viewSingleActions';

const SingleIncident = (props) => {
  const { record, match, getSingleRecord } = props;

  const fetchRecord = async () => {
    const { url } = match;
    const [, , type, id] = url.split('/');
    const newType = `${type}s`;
    await getSingleRecord(newType, id);
  };
  const { comment, createdon, location, status, images } = record;
  const [day, month, date, year] = createdon ? new Date(createdon).toDateString().split(' ') : [];
  const [lng, lat] = location ? location.split(',') : [];
  const [title, rest] = comment ? comment.split('>>') : [];

  useEffect(() => {
    fetchRecord();
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

              <div className="top">
                <div className="container pd-b">
                  <h1 className="pd-t t-c"><b id="title_t">{title}</b></h1>
                  <div id="date" className="">
                    <b>Date of submission :</b>
                    {' '}
                    {day}
                    {' '}
                    {month}
                    {' '}
                    {date}
                    {' '}
                    {year}
                  </div>
                  <div className="imageEvidence">
                    {(images && images.length > 0) && (<img src={images[0]} alt="" />)}
                  </div>
                  <div>
                    <b>Status:</b>
                    {status}
                  </div>
                  <div>
                    <b>
                      Location(Geo-coord):
                      {' '}
                    </b>
                    Lng=
                    {' '}
                    {lng}
                    , Lat=
                    {lat}
                  </div>
                  <p id="comment">{rest}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div />
    </>
  );
};

const mapStateToProps = ({ viewSingleReducer }) => ({ ...viewSingleReducer });
const mapDispatchToProps = () => dispatch => ({
  getSingleRecord: (type, id) => dispatch(getIncident(type, id)),
});

SingleIncident.propTypes = {
  record: PropTypes.object.isRequired,
  getSingleRecord: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleIncident);
