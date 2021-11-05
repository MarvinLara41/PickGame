"use strict";

const switchPlayer = document.querySelector(".active");
const rollDice = document.querySelector(".rollDice");
let revealDice = document.querySelector(".dice-number");
let playing = true;
let players = [0, 0];
let currentScore = 0;

rollDice.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6 + 1);

    revealDice.src = `dice-${diceNumber}.png`;

    revealDice.classList.remove("hiden");

    currentScore += diceNumber;
  }
});
