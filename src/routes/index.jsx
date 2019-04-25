import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/404';
import LandingPage from '../pages/landingPage';
import Login from '../components/auth/login';
import Signup from '../components/auth/signup.jsx';

const App = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
