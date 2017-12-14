// Global Variables
var randomNumber;
var losses = 0;
var wins = 0;
var previousNumber = 0;

$(".crystal").attr('class');

var startAndReset = function(){
	
	$(".crystals").empty();

	var images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Amethystemadagascar2.jpg/1200px-Amethystemadagascar2.jpg',
				'http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg',
				'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
				'https://fthmb.tqn.com/TqQm3tRT4882EvcdDbqaogKDonI=/3609x2727/filters:fill(auto,1)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg'];

	randomResult= Math.floor(Math.random() * 101 ) + 19;

	$("#randomResult").html('Random Number: ' + randomResult);

	for(var i = 0; i < 4; i++){
  
  	var random = Math.floor(Math.random() *11) + 1;  
 // console.log(random);

  	
  	var crystal = $("<div>");
  	crystal.attr({
  		"class": 'crystal', 
  		"random-number": random
  	});
  	crystal.css({
  		"background-image":"url('" + (images[i]) + "')",
  		"background-size":"cover"
  	})

  	

  	$(".crystals").append(crystal);    

	}

	$("#previous").html("total: " + previousNumber);
}

startAndReset();

$(document).on('click', ".crystal", function() {

	var number = parseInt($(this).attr('random-number'));

	previousNumber += number; 
		console.log(previousNumber);

	$("#previous").html("total: " + previousNumber)


	if(previousNumber > randomNumber){
		losses++;
	
		$("#losses").html("You lose: " + losses)

		previousNumber = 0;
		

		startAndReset();
	}

	else if(previousNumber === randomNumber){
		wins++;

		$("#wins").html("You win: " + wins);


		previousNumber = 0;

		
		
		startAndReset();
	}


}); 

// What I need to code---

// game with 4 crystals and random total score between 19 and 120 to be reached to win


// every crystal needs a random number 1-12

// a new random number will be generated upon a win or loss

// clicking any crystal, it should be added to the previous result until winning # or loss which is going over the #

// if not equal, then game resets

// if equal , then increment win counter

// if > random result, then decrement loss counter
