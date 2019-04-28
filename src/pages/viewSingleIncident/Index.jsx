import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

const SingleIncident = props => {
  const { date, title, comment, evidence } = props;

  return (
    <>
      <Navbar>
        <Nav dashboard />
      </Navbar>
      <section>
        <div className='flex'>
          <Sidebar />
          <div class="right w-100">
            <div class="breadboard">

              <div class="top">
                <div class="container pd-b">
                  <h2 class="pd-t t-c"><b id="title_t">{title}</b></h2>
                  <div id="date" class="">{date}</div>
                  <div class="imageEvidence">{evidence}</div>
                  <p id="comment">{comment}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div>

      </div>
    </>
  );
};

SingleIncident.propTypes = {

};

export default SingleIncident;
