import React from 'react';

const Item = (props) => {
  return (
    <div className="Usser__item">
      <figure className="Usser__img">
        <img src={props.url} alt="" />
      </figure>
      <p className="Usser__section">{props.section || 'Basic'}</p>
    </div>
  );
};

export default Item;
