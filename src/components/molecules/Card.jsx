import React from 'react';

const Card = (props) => {
  return (
    <div className="Card">
      <figure className="Card__icon">
        <img src="" alt={props.tabIconName || 'Icon Name'} />
      </figure>
      <div className="Card__data">
        <p className="Card__category">{props.category || 'category'}</p>
        <h3 className="Card__data">{props.data || 'data'}</h3>
      </div>
    </div>
  );
};

export default Card;
