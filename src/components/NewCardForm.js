import React, { useState } from 'react';
import validCardSuits from '../utils/validCardSuits';
import validCardValues from '../utils/validCardValues';
import toTitleCase from '../utils/toTitleCase';

import './NewCardForm.css';

const NewCardForm = ({ onSubmitCallback }) => {
  const validators = {
    suit: validCardSuits,
    value: validCardValues,
  }

  const [cardData, setCardData] = useState({ value: '', suit: '' });

  const onInputChange = (event) => {

    const newCardData = {
      ...cardData,
    };

    newCardData[event.target.name] = event.target.value;
    newCardData.suit = toTitleCase(newCardData.suit);
    setCardData(newCardData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid('suit', cardData.suit) && isValid('value', cardData.value)) {
      onSubmitCallback({
        ...cardData,
      });
      setCardData({ value: '', suit: '' })
    }
  }

  const isValid = (fieldName, fieldValue) => {
    return validators[fieldName](fieldValue);
  }

  return (
    <div className="card-form">
  <form className="signup">
    <div className="form-title"><h2>Add A Card</h2></div>
    <div className="form-body">
      <div className="row">
        <select
          value={cardData.suit}
          name="suit"
          onChange={onInputChange}
          className={isValid('suit', cardData.suit) ? 'valid' : 'invalid'}    
            >
              <option value="select a card suit">Select a card suit</option>
              <option value="Spades">Spades</option>
              <option value="Clubs">Clubs</option>
              <option value="Diamonds">Diamonds</option>
              <option value="Hearts">Hearts</option>
        </select>
        <input
          type="text"
          value={cardData.value}
          placeholder="Value"
          name="value"
          onChange={onInputChange}
          className={isValid('value', cardData.value) ? 'valid' : 'invalid'}    

        />
      </div>
    </div>
    <div className="rule"></div>
    <div className="form-footer">
      <button onClick={handleSubmit}>Add Card<span className="fa fa-thumbs-o-up"></span></button>
    </div>
  </form>
</div>
  )
}

export default NewCardForm;