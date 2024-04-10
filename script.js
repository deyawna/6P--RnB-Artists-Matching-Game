// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let urlPrefix = "https://cdn.glitch.global/2068f7ab-d5fc-4ac0-9336-36cd57a680e4/";
let cards = [
"https://cdn.glitch.global/2068f7ab-d5fc-4ac0-9336-36cd57a680e4/cardBrysonT.jpg?v=1710435408652",
"https://cdn.glitch.global/2068f7ab-d5fc-4ac0-9336-36cd57a680e4/cardDrake.jpg?v=1710435423856",
"https://cdn.glitch.global/2068f7ab-d5fc-4ac0-9336-36cd57a680e4/cardPND.jpg?v=1710435431464",
"https://cdn.glitch.global/2068f7ab-d5fc-4ac0-9336-36cd57a680e4/cardSW.jpg?v=1710435443903",
"https://cdn.glitch.global/ce17b5eb-31b4-4d38-9ddb-fe4462407f0e/ToryLanez.jpg?v=1710435445896",
"https://cdn.glitch.global/ce17b5eb-31b4-4d38-9ddb-fe4462407f0e/SZA.jpg?v=1710435457441",
"https://cdn.glitch.global/ce17b5eb-31b4-4d38-9ddb-fe4462407f0e/Kehlani.jpg?v=1710435469016",
"https://cdn.glitch.global/ce17b5eb-31b4-4d38-9ddb-fe4462407f0e/Jhene.jpg?v=1710435476695"
];

// Button to Show Deck
buttonShow.onclick = function() {
    console.log("Showing the deck...");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", 
              "<div style='background-image: url(" +
              card +
               ")' class='card'>");
    }
}; 
// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Now the deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            urlPrefix + card +")' class= 'card'>"
          );
    }
    }
    buttonDouble.style.color = "silver";
    console.log("Deck has " + cards.length + " cards.");
};



// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});