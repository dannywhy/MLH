/*"Verify that the field supports scrolling via keyboard
"STR:
1. Open the web app
2. Go to the Type of the Story field using the Tab key
3. Press the Down arrow key to scroll through the options.
4. Press the Up arrow key to get to the top of the list.

    Expected result: the scrolling is supported
Actual result:"*/
const sel = require('../../data/selectors.json');
import {expect}from 'chai'
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

