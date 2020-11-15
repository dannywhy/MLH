const sel = require("../data/selectors.json");
const path = require("path");

function imageUpload(pathToFile){
    const fileUpload = $('.ant-upload input');
    browser.execute(
        (el) => el.style.display = 'block',
        fileUpload
    );
    fileUpload.waitForDisplayed();
    const filePath = path.join(__dirname, pathToFile);
    fileUpload.setValue(filePath);
};

module.exports = imageUpload;