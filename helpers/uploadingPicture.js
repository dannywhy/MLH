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



/*/Users/sergeiioannisyan/ProjectQA7two/MLH/P1017097.JPG
/**
 * The css class name "upload-data-file-input hidden" is just an example
 * and you can replace with your app.

const fileUpload = $('.upload-data-file-input');
browser.execute(
    // assign style to elem in the browser
    (el) => el.style.display = 'block',
    // pass in element so we don't need to query it again in the browser
    fileUpload
);
fileUpload.waitForDisplayed();

 * it is recommended to always use the absolute path of the file as it ensures
 * that it can be found by the browser.

const path = require('path');
const filePath = path.join(__dirname, 'path/to/your/file');
fileUpload.setValue(filePath);
Users/sergeiioannisyan/ProjectQA7two/MLH/P1017097.JPG
    $(sel.imageUpload).click();

 */


