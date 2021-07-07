const hexSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const countItems = 9;
const sameColors = 2;
const typeGameItem = "div";
const gameId = "game";
let game = document.getElementById(gameId);

// document.body.onload = addItems;
document.body.onload = addItemsTest;

// TODO: Test
function addItemsTest() {
    let colors = [];
    let uniqueColors = Math.ceil(countItems / sameColors);
    for (let index = 0; index < uniqueColors; index++) {
        let newColor = getPseudoRandomHexColorCode();
        if (!colors.includes(newColor)) {
            for (let indexUniqueColors = 0; indexUniqueColors < sameColors; indexUniqueColors++) {
                colors.push(newColor);
            }
        } else {
            index--;
        }
    }

    fisherYatesShuffle(colors);

    let items = [];
    for (let index = 0; index < countItems; index++) {
        let item = document.createElement(typeGameItem);
        setStyle(item);
        setColor(item, colors[index]); // TODO: color text
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

function setColor(item, color) {
    item.style.background = color;
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

function fisherYatesShuffle(arrInput) {
    let current = arrInput.length;
    let random = 0;

    while (current !== 0) {
        random = Math.floor(current * Math.random());
        current = current - 1;
        let transitional = arrInput[current];
        arrInput[current] = arrInput[random];
        arrInput[random] = transitional;
    }
}