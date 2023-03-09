var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2)
    document.querySelector("#Title").innerHTML = "player 1 wins";
else if(randomNumber1<randomNumber2)
    document.querySelector("#Title").innerHTML = "player 2 wins";
else
    document.querySelector("#Title").innerHTML = "Draw";
