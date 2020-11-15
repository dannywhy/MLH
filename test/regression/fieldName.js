const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
import {expect} from 'chai';

describe('Error "Required" appears after input field filled and cleared', function () {

    it('TC-013 Input Lady555 in Hero\'s name field', function () {
        browser.url('');
        const name1 = $(sel.name).setValue(data.name);
        $(sel.name).doubleClick();
        browser.keys("Delete");
        const text = $(sel.explain).getProperty('innerText');
        expect(text).to.be.equal(exp.required);
    });
});

describe('Error "70 symbols max" appears after input more than 70 symbols', function () {

    it('TC-017 Input 71 symbols in Hero\'s name field', function () {
        browser.url('');
        const name1 = $(sel.name).setValue(data.name71);
        const text = $(sel.explain).getProperty('innerText');
        expect(text).to.be.equal(exp.error);
    });
});
