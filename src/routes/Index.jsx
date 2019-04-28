import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/notFound';
import LandingPage from '../pages/landingPage/Index';
import Login from '../components/auth/login';
import Signup from '../components/auth/signup';
import Profile from '../pages/profile/Index';
import CreateIncident from '../pages/createIncident/Index';
import ViewIncidentList from '../pages/viewIncidents/Index';

const App = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/create-incident" exact component={CreateIncident} />
    <Route path="/incidents/:type" component={ViewIncidentList} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
