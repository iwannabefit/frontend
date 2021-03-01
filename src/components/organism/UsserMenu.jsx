import React from 'react';

import BoyOutline from '../../assets/react/BoyOutline';
import Stat from '../../assets/react/Stat';
import Plan from '../../assets/react/Plan';
import FoodMenu from '../../assets/react/FoodMenu';
import Record from '../../assets/react/Record';

// import boyLine from '../../assets/icons/boy-line.svg';
// import stats from '../../assets/icons/ic_stat.svg';
// import workoutPlan from '../../assets/icons/ic_plan.svg';
// import distance from '../../assets/icons/ic_distancemap.svg';
// import diet from '../../assets/icons/ic_foodmenu.svg';
// import record from '../../assets/icons/ic_record.svg';

// sv to components
// import FoodMenu from '../../assets/react/FoodMenu';

import Item from '../molecules/Item';
import Calendar from '../molecules/Calendar';
// /* DistanceMap #757575
const UsserMenu = (props) => {
  return (
    <aside className="Usser__menu">
      <Item section="History">
        <BoyOutline />
      </Item>
      <Item section="Workout Plan">
        <Stat />
      </Item>
      <Item section="Distance Map">
        <Plan />
      </Item>
      <Item section="Diet Food Map">
        <FoodMenu />
      </Item>
      <Item section="Personal Record">
        <Record />
      </Item>
      <Calendar />
    </aside>
  );
};

export default UsserMenu;
