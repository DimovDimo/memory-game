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
    let item = createItem();
    let game = document.getElementById(gameId);
    game.appendChild(item);
}

function createItem() {
    let item = document.createElement(typeGameItem);
    setStyle(item);
    setColor(item);

    return item;
}

function setStyle(item) {
    item.style.margin = "10px";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.display = "inline-block";
}

function setColor(item) {
    item.style.background = "blue"; //TODO
}