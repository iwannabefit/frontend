import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Usser from '../components/Usser';
import Course from '../components/Course';

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Usser path="/usser" />
      <Course path="/course" />
    </Router>
  </Layout>
);

export default App;
