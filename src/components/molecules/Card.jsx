import React from 'react';
import './card.scss';
const Card = (props) => {
  return (
    <div className={`Card ${props.background}`}>
      <figure id={props.id || 'iconbackground'} className="Card__icon ">
        <img
          className={props.n}
          src={props.url}
          alt={props.tabIconName || 'Icon Name'}
        />
      </figure>
      <div className="Card__data">
        <p className="Card__category">{props.category || 'category'}</p>
        <h3 className="Card__data">{props.data || 'data'}</h3>
      </div>
    </div>
  );
};

export default Card;
