
var random1 = Math.floor(Math.random()*6)+1;

var dice = "dice"+random1+".png";

var diceloaction= "images/"+dice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", diceloaction);


var random2=Math.floor(Math.random()*6)+1;
var dice="images/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice);

if(random1>random2)
{
  document.querySelector("h1").innerHTML="Player 1 won";
}
else{
  document.querySelector("h1").innerHTML="player 2 won";
}
