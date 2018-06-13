import React from 'react';

import './Card.scss';

const Card = (props) =>
  <div className="Card__container">
    {props.children}
  </div>;

export default Card;
