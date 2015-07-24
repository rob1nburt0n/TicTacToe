
// winningCombos
//     [1, 2, 3]
//     [1, 4, 7]
//     [1, 5, 9]
//     [2, 5, 8]
//     [3, 6, 9]
//     [3, 5, 7]
//     [4, 5, 6]
//     [7, 8, 9]
  

var counter = 0;
var red = "rgb(255, 0, 0)";
var blue = "rgb(0, 0, 255)";


 function winningCombo () {
 	// console.log(red);
 	if ($("#one").css("background-color") === red && $("#two").css("background-color") === red && $("#three").css("background-color") === red ){
 		alert("RED WINS!");
 	}
 	if ($("#one").css("background-color") === red && $("#four").css("background-color") === red && $("#seven").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#one").css("background-color") === red && $("#five").css("background-color") === red && $("#nine").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#two").css("background-color") === red && $("#five").css("background-color") === red && $("#eight").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#three").css("background-color") === red && $("#six").css("background-color") === red && $("#nine").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#three").css("background-color") === red && $("#five").css("background-color") === red && $("#seven").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#four").css("background-color") === red && $("#five").css("background-color") === red && $("#six").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#seven").css("background-color") === red && $("#eight").css("background-color") === red && $("#nine").css("background-color") === red ){
 		alert("RED WINS!");
 	}
    if ($("#one").css("background-color") === blue && $("#two").css("background-color") === blue && $("#three").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
 	if ($("#one").css("background-color") === blue && $("#four").css("background-color") === blue && $("#seven").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#one").css("background-color") === blue && $("#five").css("background-color") === blue && $("#nine").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#two").css("background-color") === blue && $("#five").css("background-color") === blue && $("#eight").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#three").css("background-color") === blue && $("#six").css("background-color") === blue && $("#nine").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#three").css("background-color") === blue && $("#five").css("background-color") === blue && $("#seven").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#four").css("background-color") === blue && $("#five").css("background-color") === blue && $("#six").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    if ($("#seven").css("background-color") === blue && $("#eight").css("background-color") === blue && $("#nine").css("background-color") === blue ){
 		alert("BLUE WINS!");
 	}
    // else {
    // 	alert("CAT GOT IT!");
    // }
 }


$(document).ready(function() {

  $("td").on("click",function(){
    if ($(this).css("background-color") != "rgba(0, 0, 0, 0)") {
		alert("Please choose another space");
	}
    else if (counter % 2 === 0) {
	  $(this).css("background-color", "red");
		counter++;
		 if (counter > 4) {
		   winningCombo();
		}
		// console.log(counter);
	    } else {
	      $(this).css("background-color", "blue");
	      counter++;
	      	if (counter > 4) {
			  winningCombo();
	        }
	    }
	});
});



	 
	