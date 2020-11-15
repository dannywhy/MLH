import {expect} from "chai";
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');

describe('Error "Required" appears after input field filled and cleared', function () {

    it('TC-035 Input 5 in Age field, then clear field', function () {
        browser.url('');
        const name1 = $(sel.age).setValue(data.age);
        $(sel.age).doubleClick();
        browser.keys("Delete");
        const text = $(sel.explain).getProperty('innerText');
        expect(text).to.be.equal(exp.required);
    });
});
