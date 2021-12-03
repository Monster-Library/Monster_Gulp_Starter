document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChoosen = [];
  var cardsChoosenId = [];
  var cardsWon = [];
  // create our game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneID = cardsChoosenId[0];
    const optionTwoID = cardsChoosenId[1];
    if (cardsChoosen[0] === cardsChoosen[1]) {
      alert("You Found A Match Cards");
      cards[optionOneID].setAttribute("src", "images/white.png");
      cards[optionTwoID].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChoosen);
    } else {
      alert("Sorry, Try Again");
      cards[optionOneID].setAttribute("src", "images/blank.png");
      cards[optionTwoID].setAttribute("src", "images/blank.png");
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    const children = grid.querySelectorAll(".animate");
    children.forEach((child) => {
      child.classList.remove("animate");
    });

    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all";
    }
  }

  //flip your card
  function flipCard() {
    var CardId = this.getAttribute("data-id");
    cardsChoosen.push(cardArray[CardId].name);
    cardsChoosenId.push(CardId);
    this.setAttribute("src", cardArray[CardId].img);
    if (cardsChoosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
    this.classList.add("animate");
  }

  createBoard();
});
