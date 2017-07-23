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
function Hand(){
  var card1 = dealingCard();
  var card2 = dealingCard();
  var cardsHand = [card1, card2];

  this.score = function () {
    var i,x;
    var sum = 0;
    var aces = 0;
    for (i = 0; i < cardsHand.length; i++) {
      x = cardsHand[i].getValue();
      if (x === 11) {
        aces++;
        sum++;
      } else { sum += x; }
    }
    while (sum < 21 && aces > 0) {
      if (sum + 10 <= 21) {
        sum += 10;
        aces--;
      } else {
        break;
      }
    }
    return sum;
  };

  this.printHand = function(){
    var printStringHand = [];

    for(var i = 0; i < cardsHand.length; i++){
      printStringHand.push(cardsHand[i].cardValue() + " of " + cardsHand[i].suitSymbol());
    }

    return printStringHand.join(", ");
  }

  this.newHit = function(){
    return cardsHand.push(dealingCard());
  }

  this.busted = function(){
    return (this.score() > 21);
  }
}
