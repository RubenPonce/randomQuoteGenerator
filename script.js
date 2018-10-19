// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
//quotes[quote, source]
var quotes = [
    {quote: "Unfortunately what is little recognized is that the most worthwhile scientific books are those in which the source clearly indicates what he does not know; for an source most hurts his readers by concealing difficulties",
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
    tags:["Anime ", "Best Anime Character of All Time", "Perseverance"]},

    {quote: "I have to work harder than anyone else to make it! I'll never catch up otherwise...! I want to be like you...! Like you. The strongest hero.",
    source: "Midoriya Izuku",
    tags: ["Anime ","Second Best Anime Character"] },

    {quote:"Champions don’t do extraordinary things. They do ordinary things, but they do them without thinking, too fast for the other team to react. They follow the habits they’ve learned.",
    source: "Charles Duhigg",
    citation: "The Power of Habit",
    year: "2012",
    tags: ["Motivational", "Habits","Great Selfdevelopment Writers"]

    {quote: "If we remain comfortable at a company as developers, we will stop growing.",
    source: "Chris Stone",
    citation: "Youtube: Why I left My First Developer Job",
    year: "2018",
    tags: ["Motivational", "Youtube", "Web Developer"]}
  }
];




let quoteBox = document.querySelector(".quote");
let author = document.querySelector(".source");
let button = document.getElementById('loadQuote');


//generates random background color with hexdecimal, found on StackOverFlow by user l2m2 "https://stackoverflow.com/questions/1484506/random-color-generator/37281143"
function randomNumberGenerator()
  {var randomNumber = ((Math.random()+2)*16777216|0).toString(16).slice(1);
    return "#"+randomNumber;
  }




//standard random Number generator in Javascript, but range of number is between 0 and length of array
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length );
  console.log(randomNumber);
  return randomNumber;
}


function printQuote(){//begin printQuote()
  var arrayPosition = getRandomQuote();
  quoteBox.innerHTML = quotes[arrayPosition].quote;
  author.innerHTML = quotes[arrayPosition].source;

  if(quotes[arrayPosition].citation){
    author.innerHTML+= "<span class = 'citation'>" + quotes[arrayPosition].citation+"</span>";
  }if(quotes[arrayPosition].year){
    author.innerHTML+= "<span class = 'year'>" + quotes[arrayPosition].year+"</span>";
  }if(quotes[arrayPosition].tags){
    for(i=0; i<quotes[arrayPosition].tags.length; i++)
    {
      //generates tags as list array items.
      author.innerHTML += "<li class = 'tags'> "+ quotes[arrayPosition].tags[i]+"</li>";
      document.querySelectorAll('.tags')[i].style.backgroundColor = randomNumberGenerator();
    }
  }
  //Change background of Button and Body
  document.body.style.backgroundColor = randomNumberGenerator();
  button.style.backgroundColor = randomNumberGenerator();

}//end printQuote()
//displays new quote every 10 seconds
  setInterval(() => {
    printQuote();
  }, 15000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
