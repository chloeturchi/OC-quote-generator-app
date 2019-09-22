/************************ VARIABLES *********************/

const generateButton = document.getElementById("generateBtn");
const quotes = document.getElementById("displayQuote");
const endingSentence = document.getElementById("endSentence");

/************************* ARRAYS ***********************/

const startingQuote = [
    'Jupiter', 'Saturne', 'Neptune'
];
const middleQuote = [
    'est composée de plus de gaz que', 'est plus éloignée du soleil que', 'est plus volumineuse que'
];
const endingQuote = [
    'la Terre', 'Mars', 'Venus'
];

/************************ EVENT LISTENNERS **************/

// GENERATE QUOTES //
generateButton.addEventListener("click", function () {
    generateQuote();
});

/************************ FONCTIONS *********************/

// SET THE ENDING SENTENCE //
function setEndingSentence(sentence) {
    endingSentence.innerText = sentence;
};

// CREATE RANDOM PART //
function randomPart(quote) {
    return quote[Math.floor(Math.random() * quote.length)];
};

// GENERATE RANDOM QUOTE AND SET THE ENDING SENTENCE //
function generateQuote() {
    quoteResult = []
    for (let i = 0; i < 1; i++) {
        quoteResult[i] = randomPart(startingQuote) + " ";
        quoteResult[i] += randomPart(middleQuote) + " ";
        quoteResult[i] += randomPart(endingQuote);    
    }
    if (quoteResult.length !== 0){
        setEndingSentence("Et voilà!");
    }
    displayQuote();
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