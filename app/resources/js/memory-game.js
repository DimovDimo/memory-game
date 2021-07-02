const countItems = 9;
const typeGameItem = "div";
const gameId = "game";

document.body.onload = addItems;

function addItems() {
    for (let count = 0; count < countItems; count++) {
        addItem();
    }
}

function addItem() {
    let newItem = document.createElement(typeGameItem);
    let game = document.getElementById(gameId);
    game.appendChild(newItem);
}