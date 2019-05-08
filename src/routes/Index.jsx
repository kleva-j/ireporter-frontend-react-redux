import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/notFound';
import LandingPage from '../pages/landingPage/Index';
import Login from '../components/auth/login';
import Signup from '../components/auth/signup';
import Profile from '../pages/profile/Index';
import CreateIncident from '../pages/createIncident/Index';
import ViewIncidentList from '../pages/viewIncidents/Index';
import ViewSingleIncident from '../pages/viewSingleIncident/Index';
import Logout from '../components/logout';

const App = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/create-incident/red-flags" exact component={CreateIncident} />
    <Route path="/create-incident/interventions" exact component={CreateIncident} />
    <Route path="/incidents/red-flag" component={ViewIncidentList} />
    <Route path="/incidents/intervention" component={ViewIncidentList} />
    <Route path="/incident/red-flag/:id" component={ViewSingleIncident} />
    <Route path="/incident/intervention/:id" component={ViewSingleIncident} />
    <Route path="/logout" component={Logout} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
