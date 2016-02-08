var canvas = document.getElementById('black-jack');

//A dynamic way to set the width and height of canvas to be 
//the same as browser width and height.
//I'm not sure it's working with procent values though
canvas.width = canvas.scrollWidth;
console.log(canvas.width)
canvas.height = canvas.scrollHeight;
console.log(canvas.height);


function playRound(){
	
	//Dealern delar ut kort
		//första - sista spelaren
			//Sen till sig själv?
	//Gå igenom alla spelare och hur de vill gå tillväga
	//Dealern får köra
	//Jämföra resultaten
		//Se vem som vann
			//Presentera i gränssnittet
	//avsluta spelet

	var amountOfPlayersChoice = prompt("How many players are there?");
	var players = createPlayers(amountOfPlayersChoice);

	var dealer = new Dealer();

	var deckOfCards = new DeckOfCards();
	var deck = deckOfCards.createDeckOfCards();
	var shuffleDeck = dealer.shuffleDeck(deck);
	console.log(shuffleDeck);
	
}

function createPlayers(amountOfPlayersChoice){
	var amoutOfPlayers = amountOfPlayersChoice;
	var numberOfPlayers=[];

	for (i=0; i < amoutOfPlayers; i++){
		var player = new Player(i+1); //To make first player name 1 instead of 0
		numberOfPlayers.push(player);
	};

	return numberOfPlayers;
}

function dealToAllPlayers(deckOfCards){
		// for(var player in players){
	// 	dealer.deal(2);
	// };
}	