// For Player 1:

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1-6.

var ImageSource1 = "images/dice" + randomNumber1 + ".png";  //images/dice1.png - images/dice6.png.

document.querySelectorAll("img")[0].setAttribute("src", ImageSource1); // Changing the image acc to the number generated.

// For Player 2:

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generates a number between 1-6.

var ImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png.

document.querySelectorAll("img")[1].setAttribute("src", ImageSource2); // Changing the image acc to the number generated.


// Deciding who wins:

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw. Refresh again!";
}
