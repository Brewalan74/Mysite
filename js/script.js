const quote = document.getElementById("quote");
const theme = document.querySelectorAll(".color-box");

theme.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.id);
    document.body.classList.remove("salmonTheme", "yellowTheme", "blueTheme");
    switch (event.target.id) {
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "blue":
        document.body.classList.add("blueTheme");
        break;
      case "normal":
        document.body.classList.add("normalTheme");
        break;
      default:
        null;
    }
  });
});

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    /*API from Luke Peavey : https://github.com/lukePeavey/quotable*/
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content + " " + data.author;
    });
};

quote.addEventListener("click", () => getQuote());
getQuote();
