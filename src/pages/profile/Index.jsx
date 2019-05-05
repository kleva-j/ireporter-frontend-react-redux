/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';
import { getProfile, getRecordCount } from '../../store/actions/profileActions';

const Profile = (props) => {
  const { getUserProfile, getRecord, profile, intervention } = props;
  const redFlag = props['red-flag'];
  const { Resolved: intRes, Rejected: intRej, Draft: intDra } = intervention;
  const { Resolved: redRes, Rejected: redRej, Draft: redDra } = redFlag;
  const intUiv = intervention['Under Investigation'];
  const redUiv = redFlag['Under Investigation'];
  const totalRedflags = (redRej + redRes + redUiv + redDra);
  const totalIntervention = (intRej + intRes + intUiv + intDra);

  const getAllRecords = async () => {
    await getUserProfile();
    await getRecord('red-flag');
    await getRecord('intervention');
  };

  useEffect(() => getAllRecords(), []);

  return (
    <>
      <Navbar>
        <Nav />
      </Navbar>
      <section>
        <div className="flex">
          <Sidebar profile={profile} redFlag={totalRedflags} intervention={totalIntervention} />
          <div className="right w-100">
            <div className="breadboard">
              <div className="breadboard-header j-c-sb mg-t-b">
                <h3 className="mg-auto">Dashboard</h3>
              </div>

              <div className="top">
                <div className="heading">Red-Flags</div>
                <div className="drop">
                  <div className="j-c-sa grow-1">
                    <div>
                      <h1><a href="">{totalRedflags || 0}</a></h1>
                      <h4>Total</h4>
                    </div>
                    <div>
                      <h1><a href="#">{redRes || 0}</a></h1>
                      <h4>Resolved</h4>
                    </div>
                  </div>
                  <div className="j-c-sa grow-1">
                    <div>
                      <h1><a href="">{redUiv || 0}</a></h1>
                      <h4>Under Investigation</h4>
                    </div>
                    <div>
                      <h1><a href="">{redRej || 0}</a></h1>
                      <h4>Rejected</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="heading">Interventions</div>
                <div className="drop">
                  <div className="j-c-sa grow-1">
                    <div>
                      <h1><a href="">{totalIntervention || 0}</a></h1>
                      <h4>Total</h4>
                    </div>
                    <div>
                      <h1><a href="#">{intRes || 0}</a></h1>
                      <h4>Resolved</h4>
                    </div>
                  </div>
                  <div className="j-c-sa grow-1">
                    <div>
                      <h1><a href="">{intUiv || 0}</a></h1>
                      <h4>Under Investigation</h4>
                    </div>
                    <div>
                      <h1><a href="">{intRej || 0}</a></h1>
                      <h4>Rejected</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ profileReducer }) => ({ ...profileReducer });
const mapDispatchToProps = () => dispatch => ({
  getUserProfile: () => dispatch(getProfile()),
  getRecord: recordType => dispatch(getRecordCount(recordType))
});

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  getRecord: PropTypes.func.isRequired,
  intervention: PropTypes.object.isRequired,
  'red-flag': PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
