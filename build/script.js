"use strict";
var cards = document.querySelectorAll(".memory-card");
var score = document.getElementById("point");
var finalScore = document.getElementById("finalPoints");
var won = document.getElementById("won");
var play = document.getElementById("playAgain");
var points = 0;
var finalPoint = 0;
var win = 0;
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
//create Filp card function
function flipCard() {
    if (lockBoard)
        return;
    if (this === firstCard)
        return;
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkCards();
}
//create verify matches
function checkCards() {
    var isMatch = firstCard.dataset.cards === secondCard.dataset.cards;
    isMatch ? cardsMatch() : cardsDontMatch();
}
//create when cards match point info
//adding points to html from Scaler https://www.scaler.com/topics/innerhtml-in-javascript/
function cardsMatch() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    points += 4;
    finalPoint = points;
    win += 2;
    finalScore.innerHTML = finalPoint;
    score.innerHTML = points;
    if (win === 12) {
        won.style.visibility = "visible";
    }
    resetBoard();
}
//create When cards dont match
function cardsDontMatch() {
    lockBoard = true;
    setTimeout(function () {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
    points -= 1;
    finalPoint = points;
    score.innerHTML = points;
}
function resetBoard() {
    var _a, _b;
    _a = [false, false], hasFlippedCard = _a[0], lockBoard = _a[1];
    _b = [null, null], firstCard = _b[0], secondCard = _b[1];
}
//create Play again
function playAgain() {
    location.reload();
}
play.addEventListener("click", playAgain);
//Create Random Shuffle
//From MDM https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
(function shuffle() {
    cards.forEach(function (card) {
        var randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(function (card) { return card.addEventListener("click", flipCard); });
