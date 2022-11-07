const moves = document.getElementById("movesCount");
const timeValue = doucment.getElementById("time");
const startButton = doucment.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

// Items array
const items =[{name: "blackcat", image: "blackcat.png"},
{name: "bluecat", image: "bluecat.png"},
{name: "greycat", image: "greycat.png"},
{name: "kitten", image: "kitten.png"},
{name: "orangecat", image: "orangecat.png"},
{name: "siamesecat", image: "siamesecat.png"},
];
