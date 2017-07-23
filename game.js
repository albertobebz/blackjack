// Card Constructor
function Card(suit, number){
    this.suit = suit;
    this.number = number;
}

Card.prototype = {

  suitSymbol: function(){
    switch(this.suit) {
        case 1: return "Clubs";
        case 2: return "Diamonds";
        case 3: return "Hearts";
        case 4: return "Spades";
    }
  },

  cardValue: function(){
      switch(this.number) {
          case 1: return "Ace";
          case 11: return "Jack";
          case 12: return "Queen";
          case 13: return "King";
          default: return " " + this.number;
      }
  },

  getValue: function(){
    if(this.number === 1){ return 11; }
    else if(this.number > 10) { return 10; }
    else { return this.number; }
  }
}

// Hand constructor
// Hand of cards
function Hand(){
    this.card1 = dealingCard();
    this.card2 = dealingCard();
    this.cardsHand = [this.card1, this.card2];
}

Hand.prototype = {

  score: function () {
    var i,x;
    var sum = 0;
    var aces = 0;
    for (i = 0; i < this.cardsHand.length; i++) {
      x = this.cardsHand[i].getValue();
      if (x === 11) {
        aces++;
        sum++;
      }
      else { sum += x; }
    }
    while (sum < 21 && aces > 0) {
      if (sum + 10 <= 21) {
          sum += 10;
          aces--;
      } else { break; }
    }
    return sum;
  },

  printHand: function(){
    var printStringHand = [];

    for(var i = 0; i < this.cardsHand.length; i++){
      printStringHand.push(this.cardsHand[i].cardValue() + " of " + this.cardsHand[i].suitSymbol());
    }

    return printStringHand.join(", ");
  },

  newHit: function(){
    return this.cardsHand.push(dealingCard());
  },

  busted: function(){
    return (this.score() > 21);
  }

}

// Return a new Card, and assign Suit/Number
function dealingCard(){
  var cardSuit = Math.floor(Math.random() * 4) + 1;
  var cardNumber = Math.floor(Math.random() * 13) +1;
  return new Card(cardSuit, cardNumber);
}

function computerPlayer(){
  var dealerHand = new Hand();

  while(dealerHand.score() < 17){
    dealerHand.newHit();
  }

  return dealerHand;
}

function userPlayer() {
  var userHand = new Hand();
  var confirm_loop = true;
  while ( confirm_loop && !userHand.busted() ){
    confirm_loop = confirm("Cards: " + userHand.printHand() + "\n" + "Score: " + userHand.score() + "\n" + "Do you want another card?");
    if (confirm_loop) { userHand.newHit(); }
  }
  return userHand;
}
