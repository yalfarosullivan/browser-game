

const cards = document.querySelectorAll(".memory-card");
const score = document.getElementById("point");
const finalScore = document.getElementById("finalPoints");
const won = document.getElementById("won");
const play = document.getElementById("playAgain");


var points = 0;
var finalPoint = 0;
var win = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard: { dataset: { cards: any; }; removeEventListener: (arg0: string, arg1: () => void) => void; classList: { remove: (arg0: string) => void; }; }, secondCard: { dataset: { cards: any; }; removeEventListener: (arg0: string, arg1: () => void) => void; classList: { remove: (arg0: string) => void; }; };

//create Filp card function

function flipCard(this: any) {
  if (lockBoard) return;
  if (this === firstCard) return;

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
  let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

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

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);

  points -= 1;
  finalPoint = points;
  score.innerHTML = points;
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//create Play again

function playAgain() {
  location.reload();
}

play.addEventListener("click", playAgain);

//Create Random Shuffle

//From MDM https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})
(); 

cards.forEach((card) => card.addEventListener("click", flipCard));

