import{expect}from"chai";
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Age Field checks', function () {

    it('TC036 Click the up arrow key for number 1 to appear', function () {
        browser.url('');
        $(sel.age).click();
        browser.keys('\uE013');
        expect($(sel.age).getValue()).to.be.equal('1');
    });

    it('TC041 Verify the error message appearance when 0.5 is entered', function () {
        browser.url('');
        $(sel.age).setValue('0.5');
        expect($(sel.ageErrorMessage).getProperty('innerText')).to.be.equal(exp.ageErrorMessage);
    });

    it('TC042 Verify the error message appearance when e is entered', function () {
        browser.url('');
        $(sel.age).setValue('e');
        expect($(sel.ageErrorMessage).getProperty('innerText')).to.be.equal(exp.ageErrorMessage);
    });

    it('TC043 Verify the error message appearance when 0 is entered', function () {
        browser.url('');
        $(sel.age).setValue('0');
        expect($(sel.ageErrorMessage).getProperty('innerText')).to.be.equal(exp.ageErrorMessage);
    });
});