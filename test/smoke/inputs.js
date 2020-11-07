import { expect } from 'chai';
const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    before(() => {
        browser.url('');
    });

    describe('Inputs are displayed', function () {
        it('TC-005-1 Name ', function () {
            const name = $(sel.name).isDisplayed();
            expect(name).to.be.equal(true);
        });

        it('TC-005-2-1 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-005-2-2 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-005-2-3 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-005-3 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).to.be.equal(true);
        });

        it('TC-005-4 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).to.be.equal(true);
        });

        it('TC-005-5 Upload', function () {
            const upload = $(sel.upload).isDisplayed();
            expect(upload).to.be.equal(true);
        });

        it('TC-005-6 Create', function () {
            const label = $(sel.button).isDisplayed();
            expect(label).to.be.equal(true);
        });


       describe('Placeholder`s name', function () {
           it('TC-010 check name placeholder', function () {
               const textPlaceHolder = $(sel.name).getProperty('placeholder');
               expect(textPlaceHolder).to.be.equal(exp.namesFieldPlaceholder);
           });

           it('TC-026 check age placeholder', function () {
               const agePlaceholder = $(sel.age).getProperty('placeholder');
               expect(agePlaceholder).to.be.equal(exp.agesFieldPlaceholder);
           });

           it('TC-046 check "Type of the story" placeholder ', function ()  {
               const storyPlaceholder = $(sel.storyFieldPlaceholder).getText();
               expect(storyPlaceholder).to.be.equal(exp.storiesFieldPlaceholder);
           });

       });
    });
})