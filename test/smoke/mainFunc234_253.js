const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const path = require('path');
const data = require('../../data/testData.json');
const inputValues5CreateBtnCheck = require('../../helpers/inputValues5CreateBtnCheck.js');
describe('Checking the main functionality', () => {
    before(() => {
        browser.url("");
        browser.maximizeWindow();
    })

    describe('Fill 5 inputs and check Create Btn 233-252', function () {
        it('TC-233 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.OvercomingTheMonster);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-234 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.Rebirth);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-235 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.Quest);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-236 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.JourneyAndReturn);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-237 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.RagsAndRiches);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-238 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.Tragedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-239 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.he, data.age, data.storyType.Comedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-240 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.OvercomingTheMonster);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-241 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.Rebirth);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-242 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.Quest);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-243 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.JourneyAndReturn);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-244 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.RagsAndRiches);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-245 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.Tragedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-246 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.she, data.age, data.storyType.Comedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-247 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.OvercomingTheMonster);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-248 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.Rebirth);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-249 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.Quest);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-250 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.JourneyAndReturn);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-251 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.RagsAndRiches);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-252 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.Tragedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        it('TC-253 Create button is clickable after 1-5 are filled in', function () {
            inputValues5CreateBtnCheck(data.name, data.gender.it, data.age, data.storyType.Comedy);
            expect($(sel.button).isEnabled()).toEqual(true);

        });
        afterEach(() => {
            browser.refresh();
        });
    });
});