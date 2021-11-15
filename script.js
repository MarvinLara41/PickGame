"use strict";

const btnRoll = document.querySelector(".btn-roll");
const btnNewGame = document.querySelector(".btn-new-game");
const btnHold = document.querySelector(".btn-hold");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");

let playing = true;
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.querySelector(`.player${activePlayer}-score-box`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let rollDice = Math.trunc(Math.random() * 6) + 1;

    let diceNumber = document.querySelector(".dice-number");

    diceNumber.src = `dice-${rollDice}.png`;

    if (rollDice !== 1) {
      currentScore += rollDice;

      console.log(currentScore);

      document.querySelector(`.player${activePlayer}-score-box`).textContent =
        currentScore;

      if (currentScore >= 35) {
        playing = false;

        document.querySelector(`.player${activePlayer}-score-box`).textContent =
          "WINNER!";
      }
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", function () {
  window.location.reload();
});
