
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

const validSuit = (suitName) => {
  return suits.includes(suitName);
}

export default validSuit;