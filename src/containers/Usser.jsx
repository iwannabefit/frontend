import React from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Usser.scss';
// ('../assets/icons/calendar.svg');
// import bashBoy from '../assets/icons/bash-boy.svg';
// import bicycle from '../assets/icons/ciclying.svg';
// import muscle from '../assets/icons/muscle.svg';
// import sprint from '../assets/icons/run.svg';
import UsserMenu from '../components/molecules/UsserMenu';
import UsserMetrics from '../components/molecules/UsserMetrics';

const Usser = (props) => (
  <>
    <Header />
    <div className="Usser">
      <UsserMenu />
      <UsserMetrics />
      {/* <Link to="/">Go home</Link> */}
    </div>
    <Footer />
  </>
);

export default Usser;
