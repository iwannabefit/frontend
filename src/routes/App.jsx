import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import Layout from '../components/Layout';
import Home from '../components/Home';



const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
    </Router>
  </Layout>
);

export default App;
