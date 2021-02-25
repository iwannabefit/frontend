import React from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Usser.scss';
import UsserMenu from '../components/organism/UsserMenu';
import UsserMetrics from '../components/organism/UsserMetrics';

const Usser = (props) => (
  <>
    <Header />
    <div className="Usser">
      <UsserMenu />
      <UsserMetrics iconName="boy" bash="boy" />
      {/* <Link to="/">Go home</Link> */}
    </div>
    <Footer />
  </>
);

export default Usser;
