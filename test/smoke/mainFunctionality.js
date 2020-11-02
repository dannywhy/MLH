const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("LadyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(123);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.button).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });
    });
});