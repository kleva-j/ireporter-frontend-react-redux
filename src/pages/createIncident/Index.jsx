import React from 'react';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

const CreateIncident = () => (
  <>
    <Navbar>
      <Nav />
    </Navbar>
    <section>
      <div className="flex">
        <Sidebar />
        <div className="right w-100">
          <div className="breadboard">
            <div className="breadboard-header j-c-sb mg-t-b">
              <h3 className="mg-auto f-s-2">Create Record of an Intervention</h3>
            </div>

            <div className="top">
              <div className="heading mg-b"></div>
              <form className="container createRecord">
                <div className="mg-b-lg">
                  <label htmlFor="id" className="bold">Subject: </label>
                  <input type="text" name="subject" id="title" className="form-control mg-t" placeholder="Enter a heading" />
                </div>
                <div className="mg-b-lg">
                  <label htmlFor="textarea" className="bold">Comment: </label>
                  <textarea className="form-control mg-t" id="textarea" placeholder="Description / Story" rows="3"></textarea>
                </div>
                <div className="mg-b-lg">
                  <label htmlFor="evidence" className="bold">Evidence :</label>
                  <br />
                  <input type="file" name="evidence" id="evidence" className="btn file1" accept="image/* video/*" />
                </div>

                <div id="displayEvidence" className="mg-b-lg"></div>

                <div className="form-group">
                  <label htmlFor="address" className="bold">Location: </label>
                  <input type="text" placeholder="Enter location e.g 1.2222, 3.4444" className="form-control w-260 mg-t" id="address" />
                  <div>
                    <small className="f-s-sm">To make use of your current location leave the input field empty</small>
                  </div>
                  <button className="btn default address">Find Location</button>
                </div>
                <div id="map"></div>

                <button type="submit" className="btn primary mg-lg-t-b">Create</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
);

export default CreateIncident;
