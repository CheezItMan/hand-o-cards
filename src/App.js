import { useState } from 'react';
import CardHand from './components/CardHand';
import NewCardForm from './components/NewCardForm';
import './App.css';

function App () {
  const [cards, setCards] = useState([]);
  const addCard = (cardData) => {
    const newCards = [...cards];
    newCards.push(cardData);
    setCards(newCards);
  }

  const removeCard = (cardData) => {
    console.log(`Removing Card ${ cardData.value } of ${cardData.suit}`); 
    const newCards = cards.filter((card) => {
      return card.value !== cardData.value && card.suit !== cardData.suit;
    });

    setCards(newCards);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Hand Example</h1>
      </header>
      <main>
        <article className="cards">
          <CardHand cards={cards} onClickCallBack={removeCard} />
        </article>
        <aside>
          <NewCardForm onSubmitCallback={addCard } />
        </aside>
      </main>
    </div>
  );
}

export default App;
