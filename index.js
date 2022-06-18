var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
// var player1Dice = "images/dice" + randomNum1.toString() + ".png";
var player1Dice = "images/dice" + randomNum1 + ".png";
var player2Dice = "images/dice" + randomNum2 + ".png";
document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);
var res;
if(randomNum1 > randomNum2){
  res = "🍛Player 1 wins!";
}
else if (randomNum1 < randomNum2) {
  res = "Player 2 wins!🍣";
}
else{
  res = "Draw.☕";
}
document.querySelector("h1").innerHTML = res;
