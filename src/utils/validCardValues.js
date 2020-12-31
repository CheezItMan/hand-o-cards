
const validCardValue = (value) => {
  const parsedValue = parseInt(value)
  if (!isNaN(parsedValue)  && parsedValue > 1 && parsedValue <= 10) {
    return true;
  } else {
    switch (value) {
      case 'Ace':
      case 'King':
      case 'Queen':
      case 'Jack': return true;
      default: return false;
    }
  }
}

export default validCardValue;