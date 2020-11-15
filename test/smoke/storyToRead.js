const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require ('../../data/testData.json');
const inputValues4andClick = require ('../../helpers/inputValues4andClick');
import { expect } from 'chai';

describe('Each type of the story uses the correct template', function () {

    describe('Happy path', function () {

        it('TC-215 The Comedy type of the story uses the correct template', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy)

            const text = $(sel.create).getText();
            expect(text).to.be.equal(exp.labelCreate);
        });
    });
})