/*"Verify the invalid input
"STR:
1. Open the web app
2. Enter "e" in the field

Expected result: error appears
Actual result:                                                                                                                                Actual Results: As Expected*/

const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Age Field checks', function () {

    it('TC037 error message appears when down arrow key is pressed', function (){
        browser.url('');
        $(sel.age).click();
        browser.keys('ArrowDown');
        expect($(sel.ageErrorMessage).getProperty('innerText')).toEqual(exp.ageErrorMessage);

    });

    it('TC38 error message appears when 000000 entered', function (){
        browser.url('');
        $(sel.age).setValue('000000');
        expect($(sel.ageErrorMessage).getProperty('innerText')).toEqual(exp.ageErrorMessage);

    });


    it('TC039 error message appears when -1 entered', function (){
        browser.url('');
        $(sel.age).setValue('-1');
        expect($(sel.ageErrorMessage).getProperty('innerText')).toEqual(exp.ageErrorMessage);

    });

});
