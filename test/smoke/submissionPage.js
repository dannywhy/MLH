import {expect} from "chai";
const sel = require('../../data/selectors.json');
const inputFull = require('../../helpers/inputFull');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');

describe('Submission page refresh button check ', function (){

    it('TC066 Verify that the user can refresh the submission page with the browser Refresh button', function (){
        browser.url('');
        inputFull(data.name, data.gender.he, data.age, data.storyType.Comedy, data.pathToFile);
        browser.refresh();
        expect($(sel.description).getText()).to.be.equal(exp.description);
    });
});