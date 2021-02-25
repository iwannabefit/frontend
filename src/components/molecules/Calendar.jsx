import React from 'react';
import calendar from '../../assets/icons/calendar.svg';

const Calendar = () => {
  return (
    <div className="Calendar">
      <figure className="Calendar__icon">
        <img src={calendar} alt="" />
      </figure>
      <p className="Calendar__title">
        Create Workout
        <br /> Plan Now
      </p>
    </div>
  );
};

export default Calendar;
