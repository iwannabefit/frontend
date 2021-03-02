import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.scss';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Usser from '../containers/Usser';
import Course from '../containers/Course';
import Login from '../containers/Login';
import SignIn from '../containers/SignIn';
import FourZeroFour from '../containers/FourZeroFour'

const App = () => (
  <Router>
    <Home path="/" />
    <Usser path="/usser" />
    <Course path="/course" />
    <Login path="/login" />
    <SignIn path="/signIn" />
    <FourZeroFour path="/FZF" />

  </Router>
);

export default App;
