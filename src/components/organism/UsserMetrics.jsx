import React from 'react';
import bicycle from '../../assets/icons/ciclying.svg';
import muscle from '../../assets/icons/muscle.svg';
import sprint from '../../assets/icons/run.svg';

import Profile from '../molecules/Profile';
import UsserCards from '../molecules/UsserCards';

const UsserMetrics = (props) => (
  <div className="Usser__metrics">
    <Profile name="" bash="boy" />
    <UsserCards />
  </div>
);

export default UsserMetrics;
