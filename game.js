// Return a new Card, and assign Suit/Number
function dealingCard(){
  var cardSuit = Math.floor(Math.random() * 4) + 1;
  var cardNumber = Math.floor(Math.random() * 13) +1;
  return new Card(cardSuit, cardNumber);
}
