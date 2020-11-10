const sel = require ('../data/selectors.json');
const path = require('path');

function uploadingPicture (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    const fileUpLoad = $(sel.imageUpload);
    browser.execute((el) => el.style.display = 'block', fileUpLoad);
    fileUpLoad.waitForDisplayed();
    const filePath = path.join(__dirname, '../data/P1017097.JPG');
    fileUpLoad.setValue(filePath);
}
module.exports = uploadingPicture;





