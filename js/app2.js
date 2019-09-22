/************************ VARIABLES ************************/

const quotes = document.getElementById("displayQuote");
const generateBtn = document.getElementById("generateBtn");
const endingSentence = document.getElementById("endSentence");

const numberList = document.getElementById("numberBox");
const themeList = document.getElementById("themeBox");
let numbers = numberList.getElementsByTagName("button");
let themes = themeList.getElementsByTagName("button");

let quoteResult = [];
let quoteNumber = 0;
let quoteTheme = 0;

/************************* ARRAYS ************************/

// STAR WARS THEME ARRAY  //
const startingQuoteSW = [
  'La peur', 'La colère', 'La haîne', 'Le courage'
]
const middleQuoteSW = [
  'est le chemin vers', 'mène vers', 'apporte'
]
const endingQuoteSW = [
  'le coté obscur', 'la lumière', 'la souffrance', 'la joie'
]

// STAR TREK THEME ARRAY //
const startingQuoteST = [
  'James T. Kirk', 'Spock', 'Worf'
]
const middleQuoteST = [
  'est un Humain', 'est un Vulcain', 'est un Klingon'
]
const endingQuoteST = [
  'qui vient de la planète Terre', 'qui vient de la planète Vulcanis', 'qui vient de la planète Qo\'nos'
]

/************************ EVENT LISTENNERS **************/

// SELECT NUMBER //
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    setNumber(this.value);
    removeActiveClass('btnNumber');
    this.classList.add("active");
  })
};

// SELECT THEME //
for (var i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", function() {
    setTheme(this.value);
    removeActiveClass('btnTheme');
    this.classList.add("active");
  })
};

// GENERATE QUOTES //
generateBtn.addEventListener("click", function () {
  generateQuote();
});

/************************ FONCTIONS **********************/

// REMOVE ACTIVE CLASS //
function removeActiveClass(currentClass) {
  let active = document.querySelectorAll('.active');
  for (let i = 0; i < active.length; i++) {
    if (active[i].classList.contains(currentClass)) {
      active[i].classList.remove('active');
    } 
  }
};

// SET NUMBER //
function setNumber(value) {
  quoteNumber = value;
};

// SET THEME //
function setTheme(value) {
  quoteTheme = value;
};

// SET THE ENDING SENTENCE //
function setEndingSentence(sentence) {
  endingSentence.innerText = sentence;
};

// CREATE RANDOM PART //
function randomPart(quote) {
  return quote[Math.floor(Math.random() * quote.length)];
};

// DISPLAY THE GENERATE QUOTE AND DELETE PREVIOUS QUOTES //
function displayQuote (){
  let quoteContent = quotes;
  while (quoteContent.hasChildNodes()) {
    quoteContent.removeChild(quoteContent.lastChild);
  }
  for (let i = 0; i < quoteResult.length; i++) {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(quoteResult[i]);
    newDiv.appendChild(newContent);
    quoteContent.appendChild(newDiv);
  }
};

// GENERATE RANDOM QUOTE DEPENDING ON THE CHOOSING THEME, AND SET THE ENDING SENTENCE //
function generateQuote (){
  quoteResult = [];
  if (quoteTheme == 1) {
    for (let i = 0; i < quoteNumber; i++) {
      quoteResult[i] = randomPart(startingQuoteSW) + " ";
      quoteResult[i] += randomPart(middleQuoteSW) + " ";
      quoteResult[i] += randomPart(endingQuoteSW);
    }
  }
  if (quoteTheme == 2) {
    for (let i = 0; i < quoteNumber; i++) {
      quoteResult[i] = randomPart(startingQuoteST) + " ";
      quoteResult[i] += randomPart(middleQuoteST) + " ";
      quoteResult[i] += randomPart(endingQuoteST);
    }
  }
  if (quoteResult.length !== 0) {
    setEndingSentence("Et voilà!");
  }
  displayQuote();
};

