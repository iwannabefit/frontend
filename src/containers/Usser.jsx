import React from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Usser.scss';
import Item from '../components/molecules/Item';
import Card from '../components/molecules/Card';
const Usser = (props) => (
  <>
    <Header />
    <div className="Usser">
      <aside className="Usser__menu">
        <Item section="Profile" />
        <Item section="History" />
        <Item section="Workout Plan" />
        <Item section="Distance Map" />
        <Item section="Diet Food Map" />
        <Item section="Personal Record" />
        <div className="Calendar">
          <figure className="Calendar__icon">
            <img src="" alt="" />
          </figure>
          <p className="Calendar__title">
            Create Workout
            <br /> Plan Now
          </p>
        </div>
      </aside>

      <div className="Usser__metrics">
        <div className="Usser__Profile">
          <figure className="Usser__icon">
            <img src="" alt={props.tabIconName || 'Icon Name'} />
          </figure>
          <div className="Metric__profile">Israel Yance</div>
        </div>
        <div className="Usser__Cards">
          <Card category="Weight" data="75 Kg" />
          <Card category="Objective weight" data="70 Kg" />
          <Card category="Difference" data="75 Kg" />
          <Card category="Biological Sex" data="Woomen" />
          <Card category="Age" data="22 years" />
          <Card category="BMI" data="18.5" />
        </div>
      </div>

      {/* <Link to="/">Go home</Link> */}
    </div>
    <Footer />
  </>
);

export default Usser;
