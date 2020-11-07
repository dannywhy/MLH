const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputFull = require("../../helpers/InputFull.js")
import {expect} from "chai";


describe('Create a story with an image', function () {
    before('', function () {
        browser.url('');
    })

    it('TC-031 Create the story with a picture', function () {
        inputFull(data.name, data.gender.he, data.age, data.storyType.Comedy, data.pathToFile);
        const text = $(sel.storyTitle).getProperty("innerText");
        console.log(text);
        expect(text).to.contain(data.name);
    });

});