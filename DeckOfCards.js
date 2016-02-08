function DeckOfCards() {
  this.cards = [{
      suit: 'hearts',
      symbol: '&hearts',
      values: [1,2,3,4,5,6,7,8,9,10,11,12,13]
    },
    {
      suit: 'spades',
      symbol: '&spades',
      values: [1,2,3,4,5,6,7,8,9,10,11,12,13]
    },
    {
      suit: 'diamonds',
      symbol: '&diamonds',
      values: [1,2,3,4,5,6,7,8,9,10,11,12,13]
    },
    {
      suit: 'clubs',
      symbol: '&clubs',
      values: [1,2,3,4,5,6,7,8,9,10,11,12,13]
    }
  ],
  this.createDeckOfCards = function() {
  		var deck = [];

	    for(var suit in this.cards){
	      for(var value in this.cards[suit].values) {
	      	deck.push({'suit': this.cards[suit].suit, 'symbol': this.cards[suit].symbol, 'value':this.cards[suit].values[value]})
	      } 
	    }
	    console.log(deck);
	    return deck;
  }
}

//Om värde 1 (ess) --> skapa logik för att kolla vilket  värde spelare vill ha :).
//Vet inte om det ska ingå i objektet eller om det ska ingå i annan logik
	//Kanske skickas in som värde till constructor?