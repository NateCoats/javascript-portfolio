/*Write a card game with a shuffleconst { sqrt } = require('mathjs') method that uses the hexadecimal numbering system for the cards.

Rather than standards suits(i.e. hearts, clubs, spaces, diamonds), your suits will be: Mandela, Dr King, Malcolm X, Madam CJ Walker.

Your game will be the same as high card beats low card, except every 5th deal CJ Walker's cards beat each card.

Your shuffle method will ensure no duplicate hands.

Key methods:

Shuffle()
Deal()
Play()
TakeBook()
Homework is due Firday. Thrusday's class will be for questions */

const { sqrt, index, i } = require('mathjs')
const faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const suits = ["Mandela","Dr. King","Malcolm X","Madam CJ Walker"];

class Deck {
    constructor(cards){
        this.cards = cards
    }
}

class Card {
    constructor(suit, face) {
     this.suit = suit;
     this.face = face;    
    }
}

class Player{
	constructor(hand) {
	this.hand = hand;
    this.handsWon = 0;
	}
}

function freshDeck() {
	var cards = [];
	for(let i = 0; i < suits.length; i++){
		for(let j = 0; j < faces.length; j++){
	 	cards.push(new Card(suits[i],faces[j]))
		}
	}
const newDeck = new Deck(cards);
return newDeck;
}

function refreshNumber(){
    var random = Math.floor((Math.random() * 100) + 1);
    number = Math.round(random) ;
}

function shuffleDeck(deck){
	if(deck.cards.length == 0){
		return console.log("No cards to shuffle")
	}	
	for(let i = deck.cards.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]]       
		/*temp = deck.cards[i]
		deck.cards[i] = deck.cards[j];
		deck.cards[j] = temp;
        This formula can be done away using destructing assignment, 
        */
	}
}
//removes cards from the deck and deck will be empty. Each player gets a card.
function deal(deck){
	for(let i = 0; i < 13; i++){
        h1[i] = deck.cards.shift();
        h2[i] = deck.cards.shift();
        h3[i] = deck.cards.shift();
        h4[i] = deck.cards.shift();
    }
}
//Changes Value from string to int. Face cards converted to num.
function switchFace(Card){
            switch(Card) {
                case "J" :
                    return 11;
                case "Q" :
                    return 12;
                case "K" :
                    return 13;
                case "A" :
                    return 14;
                default:
                    return parseInt(Card);
            }    
}
//iterates through whole array and converts to int   
function convertToInt(hand){
    for(let i = 0; i < hand.length; i++){
        hand[i].face = switchFace(hand[i].face)
    }
}

function highCard(hand){
    let highCard = [0, 0];
        for(let i = 0; i < hand.length; i++){
            if(hand[i] > highCard[0]){
            highCard[0] = hand[i];
            highCard[1] = i;        
            }  
        }  
    //let index = 
    return highCard[1];
}
//count var
let turnsCount = 0;
//attch to eventlistner
function play(turnsCount){
    let arr = [];
    if(turnsCount => 13){
        return winnerIs(winsArr);
    }else{
    arr[0] = Player1.hand[0].face
    arr[1] = Player2.hand[0].face
    arr[2] = Player3.hand[0].face
    arr[3] = Player4.hand[0].face
    turnsCount++;
    if(turnsCount == 13){
        winnerIs(highCard(winsArr))
    }else{
        winnerIs(highCard(arr))
    }
    return play(turnsCount);
    }
}


function winnerIs(arr){
    if (turnsCount => 13){
        turnsCount = 0;      
        let winner = highCard(arr);
        winnerPlayer= "Game is Over!" + " Player " + winner
        return winnerPlayer ;
    }else{
        switch(arr[1]){
            case arr[1] == 0:
                Player1.handsWon++   
            case arr[1] == 1:
                Player2.handsWon++
            case arr[1] == 2:
                Player3.handsWon++        
            case arr[1] == 3:
                Player4.handsWon++
        }
    }


















    
}

let a = freshDeck();
let h1 = [];
let h2 = [];
let h3 = [];
let h4 = [];


const Player1 = new Player(h1) 
const Player2 = new Player(h2)
const Player3 = new Player(h3)
const Player4 = new Player(h4)
let winsArr = [Player1.handsWon, Player2.handsWon, Player3.handsWon, Player4.handsWon];
shuffleDeck(a);
deal(a);
convertToInt(Player1.hand);
convertToInt(Player2.hand);
convertToInt(Player3.hand);
convertToInt(Player4.hand);
console.log(Player1.hand);
//console.log();
console.log(Player2.hand);
console.log(Player3.hand);
console.log(Player4.hand);
console.log(play());
console.log(Player1.handsWon);
console.log(Player2.handsWon);
console.log(Player3.handsWon);
console.log(Player4.handsWon);