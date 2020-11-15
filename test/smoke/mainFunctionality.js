const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js');
const inputValues4andClick = require ('../../helpers/inputValues4andClick.js');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {
        // it('TC-021 Create button is clickable after 1-4 are filled in', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).setValue(data.name);
        //     const inputGender = $$(sel.gender)[data.gender.she].click();
        //     const inputAge = $(sel.age).setValue(data.age);
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[data.storyType].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(true);
        // });

        it('TC-022 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});