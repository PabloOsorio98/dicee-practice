var diceeOne = Math.floor(Math.random() * 6) + 1;
var diceeTwo = Math.floor(Math.random() * 6) + 1;

var firstDiceSource = "images/dice" + diceeOne + ".png";
var secondDiceSource = "images/dice" + diceeTwo + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceSource);
document.querySelectorAll("img")[1].setAttribute("src", secondDiceSource);

if(diceeOne > diceeTwo){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins"
}
else if(diceeOne < diceeTwo){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins 🚩"
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}

