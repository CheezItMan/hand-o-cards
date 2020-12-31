import React from 'react';
import Card from './Card';
import './CardHand.css';

const CardHand = ({ cards, onClickCallBack }) => {
  const cardComponents = cards.map((card, i) => {
    return <Card key={i} value={card.value} suit={card.suit} onClickCallback={onClickCallBack} />
  });

  return <div className="hand">
    {cardComponents}
  </div>;
}

export default CardHand;
