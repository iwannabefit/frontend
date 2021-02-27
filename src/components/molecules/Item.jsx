import React from 'react';

const Item = (props) => (
  <div className="Usser__item">
    <figure className="Usser__img">{props.children}</figure>
    <p className="Usser__section">{props.section || 'Basic'}</p>
  </div>
);

export default Item;
