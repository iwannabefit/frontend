import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Usser from '../containers/Usser';
import Course from '../containers/Course';
import Login from '../containers/Login';

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Usser path="/usser" />
      <Course path="/course" />
      <Login path="/login" />
    </Router>
  </Layout>
);

export default App;
