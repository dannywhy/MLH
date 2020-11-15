import{expect}from"chai";
const sel = require('../../data/selectors.json');

describe('Story field check', function () {

    it('TC056 Verify the field supports scrolling via keyboard', function () {
    browser.url('');
    browser.keys('\uE004');
    browser.keys('\uE004');
    browser.keys('\uE004');
    browser.keys('\uE015');
    browser.keys('\uE013');
    expect($(sel.story).isDisplayed()).to.be.equal(true);
    });
});