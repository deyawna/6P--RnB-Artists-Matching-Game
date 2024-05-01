// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let audio = document.querySelector(".audio");
// Array containing image URLs
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
let clickedIds = [];
// Button to Show Deck
buttonShow.onclick = function() {
    console.log("Showing the deck...");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
audio.play();
};
// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Now the deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" +
                card + ")' class= 'card'>"
            );
        }
        audio.play();
    }
    buttonDouble.style.color = "silver";
    console.log("Deck has " + cards.length + " cards.");
};



// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    console.log("I'm shuffling the cards.");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card + ")' class= 'card' id= '" + i + "'>");
  i=i+1;
    }
    audio.play();
    };

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    audio.play();
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
            // Get the id property of the clicked thing.
 let clickedId = event.target.id;
            console.log(clickedId);
           if (clickedId !== "") {
document.getElementById(clickedId).style.backgroundImage 
    = "url('" + cards[clickedId] + "')";
                clickedIds.push(clickedId);
                console.log(clickedIds);
            }
        });