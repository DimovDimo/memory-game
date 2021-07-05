const hexSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const countItems = 9;
const typeGameItem = "div";
const gameId = "game";
let game = document.getElementById(gameId);

// document.body.onload = addItems;
document.body.onload = addItemsTest;

// TODO: Test
function addItemsTest() {
    colors = [];
    for (let count = 0; count < countItems; count++) {
        // TODO: countItems
    }

    let items = [];
    for (let count = 0; count < countItems; count++) {
        let item = document.createElement(typeGameItem);
        setStyle(item);
        setColor(item);
        items.push(item);
    }

    items.forEach(item => game.appendChild(item));
}

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
    item.style.background = getPseudoRandomHexColorCode();
}

function getPseudoRandomHexColorCode() {
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += getPseudoRandomHexSymbol();
    }

    return "#" + result;
}

function getPseudoRandomHexSymbol() {
    return hexSymbols[Math.floor(Math.random() * hexSymbols.length)];;
}