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
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        // it('TC-088 Create button is inactive after gender he filled in', function () {
        //     browser.url('');
        //     const inputGender = $$(sel.gender)[0].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-089 Create button is inactive after gender it filled in', function () {
        //     browser.url('');
        //     const inputGender = $$(sel.gender)[2].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-090 Create button is inactive after StoryType Overcoming the Monster is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[0].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-091 Create button is inactive after StoryType Rebirth is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[1].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-092 Create button is inactive after StoryType Quest is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[2].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-093 Create button is inactive after StoryType Journey and return is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[3].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-094 Create button is inactive after StoryType Rags and riches is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[4].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-095 Create button is inactive after StoryType Tradegy is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[5].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });
        //
        // it('TC-095+1 Create button is inactive after StoryType Comedy is filled in', function () {
        //     browser.url('');
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[6].click();
        //     const create = $(sel.button).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(false);
        // });

        // it('TC-096 Create button is inactive if image uploaded', function () {
        //     browser.url('');
        //


    });
});