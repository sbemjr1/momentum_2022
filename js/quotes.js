const quotes = [
  {
    quote: "We know what we are, but not what we may be.",
    author: "William Shakespeare",
  },
  {
    quote: "Fashion is made to become unfashionable.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote:
      "When you live in Texas, every single time you see snow it's magical.",
    author: "Pamela Ribon",
  },
  {
    quote: "The sword of justice has no scabbard",
    author: "Antione De Riveral",
  },
  {
    quote: "Hope is a waking dream.",
    author: "Aristotle",
  },
  {
    quote: "Whoever ceases to be a student has never been a student.",
    author: "George Iles",
  },
  {
    quote: "Underpromise; overdeliver.",
    author: "Tom Peters",
  },
  {
    quote: "I wasted time, and now doth time waste me.",
    author: "William Shakespeare",
  },
  {
    quote: "All my possessions for a moment of time.",
    author: "Elizabeth I",
  },
  {
    quote: "I may lose land...but I never lose a minute.",
    author: "Napoleon Bonaparte",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}-`;
