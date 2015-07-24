// var playerX= prompt("Player one please enter your name");
//   document.write("Player 1: " + playerX + "<br>");

// var playerO=  prompt("Player two please enter your name");
//   document.write("Player 2: " + playerO + "<br>");


var playerArray = ["playerOne", "playerTwo"];

var counter = 0;

$(document).ready(function() {

	
		$("td").on("click",function(){
		  if (counter % 2 === 0) {
			$(this).css("background-color", "red");
			counter++;
		console.log(counter);
	      } else {
	      	$(this).css("background-color", "blue");
	      	counter++;
	      }
	    });
});

	
	