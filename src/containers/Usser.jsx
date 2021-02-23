import React from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Usser.scss';
import Item from '../components/molecules/Item';
import Card from '../components/molecules/Card';

import boyLine from '../assets/icons/boy-line.svg';
import stats from '../assets/icons/ic_stat.svg';
import workoutPlan from '../assets/icons/ic_plan.svg';
import distance from '../assets/icons/ic_distancemap.svg';
import diet from '../assets/icons/ic_foodmenu.svg';
import record from '../assets/icons/ic_record.svg';
import calendar from '../assets/icons/calendar.svg';
import bashBoy from '../assets/icons/bash-boy.svg';
import bicycle from '../assets/icons/ciclying.svg';
import muscle from '../assets/icons/muscle.svg';
import sprint from '../assets/icons/run.svg';

const Usser = (props) => (
  <>
    <Header />
    <div className="Usser">
      <aside className="Usser__menu">
        <Item section="Profile" url={boyLine} />
        <Item section="History" url={stats} />
        <Item section="Workout Plan" url={workoutPlan} />
        <Item section="Distance Map" url={distance} />
        <Item section="Diet Food Map" url={diet} />
        <Item section="Personal Record" url={record} />
        <div className="Calendar">
          <figure className="Calendar__icon">
            <img src={calendar} alt="" />
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
            <img src={bashBoy} alt={props.tabIconName || 'Icon Name'} />
          </figure>
          <div className="Metric__profile">Israel Yance</div>
        </div>
        <div className="Usser__Cards">
          <Card category="Weight" data="75 Kg" url={muscle} />
          <Card category="Objective weight" data="70 Kg" url={sprint} />
          <Card category="Difference" data="75 Kg" url={sprint} />
          <Card category="Biological Sex" data="Woomen" url={bicycle} />
          <Card category="Age" data="22 years" url={sprint} />
          <Card category="BMI" data="18.5" url={sprint} />
        </div>
      </div>

      {/* <Link to="/">Go home</Link> */}
    </div>
    <Footer />
  </>
);

export default Usser;
