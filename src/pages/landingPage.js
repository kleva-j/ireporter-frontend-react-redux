/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import itMatters from '../assets/images/it_matters.jpg';
import clowts from '../assets/images/clowts.png';
import Navbar from '../components/header/Index';
import Nav from '../components/header/signedOutLinks';

const LandingPage = () => (
  <>
    <Navbar>
      <Nav />
    </Navbar>
    <section className="main">
      <main className="mainsection flex">
        <img src={itMatters} alt="Nothing to show" />
        <div className="side t-c">
          <h1>WELCOME TO iREPORTER</h1>
          <p>Report any incident related to corruption</p>
          <div className="button-group j-c-c">
            <div className="btn mg no-hover white" href="#learn-more">Learn more</div>
            <div className="btn mg no-hover white"><a className="span" href="/signup"> Get started</a></div>
          </div>
        </div>
      </main>
      <section>
        <div className="topSec t-c">
          <h1>What is iReporter </h1>
          <p className="w-75 l-h mg-auto">
            This is a platform enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. You can also provide evidence to prove your claim. This kind of evidence can be images or videos. You can also post an address to the site of the incident. This platform also enables every citizen to report issues around their community that require immediate intervention to.
          </p>
        </div>
      </section>
      <aside>
        <div className="flex container mg-lg-t-b">
          <img src={clowts} alt="people making efforts to make things work" />
          <div className="pd" id="learn-more">
            <h2 className="t-c">Let us all work together to curb out this epidemic from our society</h2>
            <p>Steps to take are:</p>
            <ul>
              <li className="steps">
                Create an account by signing up
                <a href="/login" className="underscore">
                  _Here
                </a>
              </li>
              <li className="steps">Report incidents of corrupt practices around you by creating a red-flag</li>
              <li className="steps">Reports incidents that need immediate attention by creatin an intervention</li>
              <li className="steps">Attach image or video evidences that will support your report or claims</li>
              <li className="steps">Attach an address of the location/place of incidence</li>
              <li className="steps">Await a resolution to your report</li>
            </ul>
          </div>
        </div>
      </aside>
    </section>

    <footer>
      <div className="copyright pd-lg">
      &copy;Copyright 2018
        <b> IREPORTER</b>
      </div>
    </footer>
  </>
);

export default LandingPage;
