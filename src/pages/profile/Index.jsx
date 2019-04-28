import React from 'react';
import Sidebar from '../../components/sidebar/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

const Profile = () => (
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
              <h3 className="mg-auto">Dashboard</h3>
            </div>

            <div className="top">
              <div className="heading">Red-Flags</div>
              <div className="drop">
                <div className="j-c-sa grow-1">
                  <div>
                    <h1><a href="">124</a></h1>
                    <h4>Total</h4>
                  </div>
                  <div>
                    <h1><a href="#">72</a></h1>
                    <h4>Resolved</h4>
                  </div>
                </div>
                <div className="j-c-sa grow-1">
                  <div>
                    <h1><a href="">41</a></h1>
                    <h4>Unresolved</h4>
                  </div>
                  <div>
                    <h1><a href="">11</a></h1>
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
                    <h1><a href="">75</a></h1>
                    <h4>Total</h4>
                  </div>
                  <div>
                    <h1><a href="#">23</a></h1>
                    <h4>Resolved</h4>
                  </div>
                </div>
                <div className="j-c-sa grow-1">
                  <div>
                    <h1><a href="">41</a></h1>
                    <h4>Unresolved</h4>
                  </div>
                  <div>
                    <h1><a href="">11</a></h1>
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

export default Profile;
