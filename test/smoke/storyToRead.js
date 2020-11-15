const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const imageUpload = require('../../helpers/imageUpload');
const isNameWithCapital = require('../../helpers/nameStartsWithCapital');
import {expect} from 'chai';

describe('Each type of the story uses the correct template', function () {

    describe('Happy path', function () {

        it('TC-215 The Comedy type of the story uses the correct template', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy)
            expect($(sel.storyTitle).isDisplayed()).to.be.equal(true);
            expect($(sel.storyText).isDisplayed()).to.be.equal(true);
            expect($(sel.moral).isDisplayed()).to.be.equal(true);
            browser.pause(3000);
        });

        it('TC-222 The Comedy type of the story uses the correct template when an image was uploaded', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            imageUpload(data.pathToFile);
            $(sel.create).click();
            browser.pause(3000);
            expect($(sel.storyTitle).isDisplayed()).to.be.equal(true);
            expect($(sel.storyText).isDisplayed()).to.be.equal(true);
            expect($(sel.moral).isDisplayed()).to.be.equal(true);
            browser.pause(3000);
        });

        it('TC-226 The Hero\'s name starts with a capital letter if the sentence starts with it (the user put it with an upper case letters)', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy)
            const text = $(sel.storyText).getText();
            browser.pause(3000);
            isNameWithCapital();
            expect(text).to.contain(data.name);
            expect(isNameWithCapital()).to.be.equal(true);
        });

        it('TC-227 The Hero\'s name starts with a capital letter if the sentence starts with it (the user put it with a lower case letters)', function () {
            browser.url('');
            inputValues4andClick(data.lowerCaseName, data.gender.she, data.age, data.storyType.Comedy)
            const text = $(sel.storyText).getText();
            browser.pause(3000);
            isNameWithCapital();
            expect(text).to.contain(data.name);
            expect(isNameWithCapital()).to.be.equal(true);
        });
    });
})

describe('The gender should be used for possessive pronouns as well', function () {

    it ('TC-229 Selected gender is He, it should be used for possessive pronouns His/Him', function () {
        browser.url('');
        inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy)
        const text = $(sel.storyText).getText();
        browser.pause(3000);
        expect(text).to.contain(exp.storyPronoun.his);
    });

    it ('TC-230 Selected gender is She, it should be used for possessive pronouns Her/Hers', function () {
        browser.url('');
        inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy)
        const text = $(sel.storyText).getText();
        browser.pause(3000);
        expect(text).to.contain(exp.storyPronoun.her);
    });

    it ('TC-231 Selected gender is It, it should be used for possessive pronouns Its', function () {
        browser.url('');
        inputValues4andClick(data.name, data.gender.it, data.age, data.storyType.Comedy)
        const text = $(sel.storyText).getText();
        browser.pause(3000);
        expect(text).to.contain(exp.storyPronoun.its);
    });
})