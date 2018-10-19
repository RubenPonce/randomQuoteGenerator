// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
//quotes[quote, source]
var quotes = [
    {quote: "There are those who are destined to do good but never to experience it. I do believe I am one of them",
    source: "Evariste Galois",
    citation: "The Last Letter of Galois",
    year: "1832",
    tags: ["History ","Math ","Genius"]
  },

    {quote:"Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?",
    source: "Morpheus",
    citation:"The Matrix",
    year: "1999",
    tags:["Classic Movie ", "Red or Blue? ","Keanu Reeves"]},


    {quote: "You must do the things you think you cannot do.",
    source: "Eleanor Roosevelt",
    year:"1956",
    tags: ["History ","Motivation"]},

    {quote: "A hero is not the one who never falls. He is the one that who gets up, again and again, never losing sights of his dreams.",
    source: "Rock Lee",
    citation: "The Last: Naruto The Movie",
    year: "2014",
    tags:["Anime ", "Best Anime Character", "Perseverance"]},

    {quote: "I have to work harder than anyone else to make it! I'll never catch up otherwise...! I want to be like you...! Like you. The strongest hero.",
    source: "Midoriya Izuku",
    tags: ["Anime ","Second Best Anime Character"] },

    {quote:"Champions don’t do extraordinary things. They do ordinary things, but they do them without thinking, too fast for the other team to react. They follow the habits they’ve learned.",
    source: "Charles Duhigg",
    citation: "The Power of Habit",
    year: "2012",
    tags: ["Motivational", "Habits","Self-development "]},

    {quote: "If we remain comfortable at a company as developers, we will stop growing.",
    source: "Chris Stone",
    citation: "Youtube: Why I left My First Developer Job",
    year: "2018",
    tags: ["Motivational", "Youtube", "Web Developer"]}

];




let quoteBox = document.querySelector(".quote");
let author = document.querySelector(".source");
let citedBy = document.querySelector(".citation");
let date = document.querySelector(".year");
let button = document.getElementById('loadQuote');



//generates random background color with hexdecimal, found on StackOverFlow by user l2m2 "https://stackoverflow.com/questions/1484506/random-color-generator/37281143"
function randomColorGenerator()
  {var randomNumber = ((Math.random()+2)*16777216|0).toString(16).slice(1);
    return "#"+randomNumber;
  }

//standard random Number generator in Javascript, but range of number is between 0 and length of array
function getRandomQuote(array){
  var randomNumber = Math.floor(Math.random() * array.length );
  console.log(randomNumber);
  return array[randomNumber]
}

//conditional statements to check for objects of citation, year, and tags.
function printQuote(){//begin printQuote()
  var randomQuote = getRandomQuote(quotes);
  quoteBox.innerHTML = randomQuote.quote;
  author.innerHTML = randomQuote.source;

  if(randomQuote.citation){
    author.innerHTML+= "<span class = 'citation'>" + randomQuote.citation+"</span>";
  }if(randomQuote.year){
    author.innerHTML+= "<span class = 'year'>" + randomQuote.year+"</span>";
  }if(randomQuote.tags){
    for(i=0; i<randomQuote.tags.length; i++)
    {
      //generates tags as list array items.
      author.innerHTML += "<li class = 'tags'> "+ randomQuote.tags[i]+"</li>";
      document.querySelectorAll('.tags')[i].style.backgroundColor = randomColorGenerator();
    }
  }
  //Change background of Button and Body
  var randomColor = randomColorGenerator();
  document.body.style.backgroundColor = randomColor;
  button.style.backgroundColor = randomColor;

}//end printQuote()

//displays new quote every 10 seconds
  setInterval(() => {
    printQuote();
  }, 10000);

//initiate the first quote generation
printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
