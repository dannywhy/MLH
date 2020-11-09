const sel = require('../../data/selectors.json');
const uploadingFunction = require('../../helpers/uploadingPicture');
const testData = require('../../data/testData.json');

describe ('Test my function', function (){

    it('should test my uploadingPictureFunction', function () {
        browser.url('');
        uploadingFunction(testData.name, testData.gender.it, testData.age, testData.storyType.Comedy);
    });
})