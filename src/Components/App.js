/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Nav from './Navbar/signedOutLinks';
import NotFound from './pages/404';
import LandingPage from './pages/landingPage';
import Login from './Auth/login';

const App = () => (
  <>
    <Navbar>
      <Nav />
    </Navbar>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
);

export default App;
