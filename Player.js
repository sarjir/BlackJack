function Player(name) {
	this.name = name,
	this.playersHand = [],
	this.getOneMoreCard = function(randomCard){
		this.playersHand.push(randomCard);
	},
	this.satisfied = function(choice){
		//This is perhaps logic that is performed in 'Game'? Or in getOneMoreCard()?
		choice ? 'nextPerson' : 'getOneMoreCard';
	},
	this.SumOfCards = function(){
		//resets the sum each time
		var sumOfCards = 0;
		for (valueOfCard in this.playersHand){			
			sumOfCards + valueOfCard;
		}
	}
}