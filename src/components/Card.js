import React from 'react';
import validCardSuits from '../utils/validCardSuits';
import validCardValues from '../utils/validCardValues';
import './Card.css'

const suitText = {
  'Hearts': 'H.png',
  'Diamonds': 'D.png',
  'Clubs': 'C.png',
  'Spades': 'S.png',
}

const valueText = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  'Jack': 'J',
  'Queen': 'Q',
  'King': 'K',
  'Ace': 'A',

}


const getFilename = (suit, value) => {
  if (!validCardSuits(suit) || !validCardValues(value)) {
    throw `Invalid Card! ${ value } of ${ suit }`;
  }
  return `${ valueText[value] }${ suitText[suit] }`;
}

const Card = ({ suit, value, onClickCallback }) => {
  return <img
    src={`images/${ getFilename(suit, value) }`}
    alt={`${ value } of ${ suit }`}
    className="card"
    onClick={() => {
      onClickCallback({
        suit,
        value,
    })}}
  />;
}

export default Card;