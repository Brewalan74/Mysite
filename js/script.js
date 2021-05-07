const quote = document.getElementById('quote');

const getQuote = () => {
fetch("https://api.quotable.io/random") 
/*API from Luke Peavey : https://github.com/lukePeavey/quotable*/
  .then((response) => response.json())
  .then((data) => {
      quote.innerHTML = data.content + " " + data.author;
  });
  fetch('https://picsum.photos/1600/1000')
  .then((response) => {
      document.getElementById('pic').innerHTML = `<img src=${response.url} />`
  })
};

quote.addEventListener('click', () => getQuote());
getQuote();