const path = require("path");

function imageUpload(){
    const fileUpload = $('.ant-upload input');
    browser.execute(
        (el) => el.style.display = 'block',
        fileUpload
    );
    fileUpload.waitForDisplayed();
    const filePath = path.join(__dirname, "../data/Bug.jpg");
    fileUpload.setValue(filePath);
};

module.exports = imageUpload;