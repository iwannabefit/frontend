import React from 'react';
import boyLine from '../../assets/icons/boy-line.svg';
import stats from '../../assets/icons/ic_stat.svg';
import workoutPlan from '../../assets/icons/ic_plan.svg';
import distance from '../../assets/icons/ic_distancemap.svg';
import diet from '../../assets/icons/ic_foodmenu.svg';
import record from '../../assets/icons/ic_record.svg';
import calendar from '../../assets/icons/calendar.svg';
import Item from './Item';

const UsserMenu = (props) => {
  return (
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
  );
};

export default UsserMenu;
