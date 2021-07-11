const quotes = [
{
  quote: "It always seems impossible until its done.",
  author: "Nelson Mandela"
},
{
  quote: "Indolence is a delightful but distressing state. we must be doing something to be happy.",
  author: "Mahatma Gandhi"
},
{ 
  quote: "Forget injuries, never forget kindnesses.",
  author: "Confucius"
},
{
  quote: "You cannot create experience.You must undergo it.",
  author: "Albert Camus"
},
{
	quote: "The winds and waves are always on the side of the ablest navigators.",
  author: "Edward Gibbon"
},
{
	quote: "Until you write down your dream it is just a dream. Writing it makes it a goal.",
  author: "John Goddard"
},
{
	quote: "Do one thing every day that scares you.",
  author: "Ralph Waldo Emmerson"
},
{
	quote: "The best revenge is massive success.",
  author: "Frank Sinatra"
},
{
	quote: "Pain is temporary. Quitting lasts forever.",
  author: "Lance Armstrong"
},
{
	quote: "All our dreams can come true, if we have the courage to pursue them.",
  author: "Walt Disney"
}
];
const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
