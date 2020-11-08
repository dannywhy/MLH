const sel = require('../data/selectors.json');
const path = require('path')

function inputValues5AndClick(name, gender, age, storyType) {
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();


    const inputDiv = $('.ant-upload');
    const submitBtn = $(sel.create);

    const filePath = path.join(__dirname, '../data/Liberty.jpg');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
    submitBtn.click();

}
module.exports = inputValues5AndClick;