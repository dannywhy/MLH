const sel = require('../data/selectors.json');
const inputValues4 = require('../helpers/inputValues4');
const path = require('path');

function inputFull(name, gender, age, storyType, filePath) {
  inputValues4(name, gender, age, storyType);
  const fileUpload = $('.ant-upload input');
  browser.execute(
      (el) => el.style.display = 'block',
      fileUpload,
  );
  fileUpload.waitForDisplayed();
  const pathToFile = path.join(__dirname, filePath);
  fileUpload.setValue(pathToFile);
  $(sel.button).click();
}

module.exports = inputFull;
