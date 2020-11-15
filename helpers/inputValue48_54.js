const sel = require('../data/selectors.json');

function inputValue48_54(storyType) {
  $(sel.story).click();
  $$(sel.storyType)[storyType].click();
  return $(sel.story).getText();
}
module.exports = inputValue48_54;
