import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

const SingleIncident = (props) => {
  const { date, title, comment, evidence } = props;

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
                  <h2 className="pd-t t-c"><b id="title_t">{title}</b></h2>
                  <div id="date" className="">{date}</div>
                  <div className="imageEvidence">{evidence}</div>
                  <p id="comment">{comment}</p>
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

SingleIncident.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  evidence: PropTypes.string.isRequired,
};

export default SingleIncident;
