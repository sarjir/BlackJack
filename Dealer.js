function Dealer() {	
	this.hand = [],
	this.shuffleDeck = function(deckOfCards) {
	    var currentIndex = deckOfCards.length, temporaryValue, randomIndex;

	    while (0 !== currentIndex){

	    	randomIndex = Math.floor(Math.random() * currentIndex);
	    	currentIndex -= 1;

	    	temporaryValue = deckOfCards[currentIndex];
	    	deckOfCards[currentIndex] = deckOfCards[randomIndex];
	    	deckOfCards[randomIndex] = temporaryValue;
	    }

	    console.log(deckOfCards);
	    return deckOfCards;

  	},
	this.deal = function(amountOfCardsToDeal, shuffledDeckOfCards, ){

	}

}