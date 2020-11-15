import {expect} from "chai";
const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Spinners age working', function () {

    it('TC-032 Verify that after the first click on the spinner up the value become 1', function () {
        browser.url('');
        const spin = $(sel.spinnerUp).click();
        const age = $(sel.ageField).getValue();
        expect(age).to.be.equal(exp.inputAge);
    });

    it('TC-031 Verify that user can change the age by clicking on the spinner (+1/-1)', function () {
        browser.url('');
        const spin = $(sel.spinnerUp).click();
        const age = $(sel.ageField).getValue()
        const spin1 = $(sel.spinnerDown).click();
        const age1 = $(sel.ageField).getValue()
        expect(age1).to.be.equal(exp.age1);
    });
});
