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
