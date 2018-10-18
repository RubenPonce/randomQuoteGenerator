// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
//quotes[quote, author]
var quotes = [
    {quote: "Unfortunately what is little recognized is that the most worthwhile scientific books are those in which the author clearly indicates what he does not know; for an author most hurts his readers by concealing difficulties",
    author: "Evariste Galois",
    citation: "May 31, 1832",
    year: "" },

    {quote:"Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?",
    author: "Morpheus",
    citation:"The Matrix",
    year: "March 31, 1999"},

    {quote: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
    citation:"The Washington Post",
    year:"June 27 1956"}
];


//[year, citation]

let quoteBox = document.querySelector(".quote");
let sources = document.querySelector(".source");
let citation = document.querySelector(".citation");
let year = document.querySelector(".year");
let button = document.querySelectorAll('button');

function backGroundColorChange()
  {var randomNumber = ((Math.random()+2)*16777216|0).toString(16).slice(1)
    document.body.style.backgroundColor = "#"+randomNumber;
    button.style.backgroundColor = "#"+randomNumber;
  }
//standard random Number generator in Javascript, but range of number is between 0 and length of array

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length );
  console.log(randomNumber);
  return randomNumber;
}
// Create the printQuote function
//quoteBox represents the paragraph, and sources represents the source.
function printQuote(){
  var quoteNum = getRandomQuote();
quoteBox.innerHTML = quotes[quoteNum].quote

backGroundColorChange();
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
