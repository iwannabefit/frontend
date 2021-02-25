import React from 'react';
import bicycle from '../../assets/icons/ciclying.svg';
import muscle from '../../assets/icons/muscle.svg';
import sprint from '../../assets/icons/run.svg';
import Card from '../molecules/Card';

const UsserCards = () => {
  return (
    <div className="Usser__Cards">
      <Card id="green" category="Weight" data="75 Kg" url={muscle} />
      <Card
        category="Objective weight"
        data="70 Kg"
        url={sprint}
        background="yellow"
      />
      <Card category="Difference" data="75 Kg" url={sprint} />
      <Card category="Biological Sex" data="Woomen" url={bicycle} n="bicycle" />
      <Card category="Age" data="22 years" url={sprint} />
      <Card category="BMI" data="18.5" url={sprint} />
    </div>
  );
};

export default UsserCards;
