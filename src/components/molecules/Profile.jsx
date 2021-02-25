import React from 'react';
import bashBoy from '../../assets/icons/bash-boy.svg';
import bashGirl from '../../assets/icons/bash-girl.svg';

const Profile = (props) => {
  return (
    <div className="Usser__Profile">
      <figure className="Usser__icon">
        <img
          src={props.bash ? bashBoy : bashGirl}
          alt={props.iconName || 'Icon Name'}
        />
      </figure>
      <div className="Metric__profile">{props.name || 'Israel Yance'}</div>
    </div>
  );
};

export default Profile;
