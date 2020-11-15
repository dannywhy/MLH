const sel = require('../data/selectors.json');
const data = require('../data/testData.json');

function isNameWithCapital () {
    let storyText = $(sel.storyText).getText();
    let arr = storyText.split(".\n");
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(data.name) === true) {names.push(arr[i]);}
        else continue;
    }
    if (names.length === 0) {return false;}
    else if (names[0].startsWith(data.name) === true) {return true;}
}

module.exports = isNameWithCapital;