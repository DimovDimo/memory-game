let hexSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const countItems = 9;
const sameColors = 2;
const typeGameItem = "div";
const gameId = "game";
let game = document.getElementById(gameId);

document.body.onload = addItems;

function addItems() {
    let colors = setColors();
    fisherYatesShuffle(colors);
    let items = createItems(colors);
    items.forEach(item => game.appendChild(item));
}

function setColors() {
    let colors = [];
    let uniqueColors = Math.ceil(countItems / sameColors);
    for (let index = 0; index < uniqueColors; index++) {
        let newColor = randomHexColorCode();
        if (!colors.includes(newColor)) {
            pushSameColors(colors, newColor);
        } else {
            index--;
        }
    }

    return colors;
}

function randomHexColorCode() {
    fisherYatesShuffle(hexSymbols);

    return "#" + hexSymbols.slice(0, 6).join("");
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

function pushSameColors(colors, newColor) {
    for (let indexUniqueColors = 0; indexUniqueColors < sameColors; indexUniqueColors++) {
        colors.push(newColor);
    }
}

function createItems(colors) {
    let items = [];
    for (let index = 0; index < countItems; index++) {
        let item = document.createElement(typeGameItem);
        setStyle(item, colors, index);
        setColorName(colors, index, item);
        items.push(item);
    }

    return items;
}

function setStyle(item, colors, index) {
    item.style.margin = "10px";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.display = "inline-block";
    item.style.background = colors[index];
}

function setColorName(colors, index, item) {
    let colorName = document.createElement("span");
    colorName.innerText = colors[index];
    item.appendChild(colorName);
}