


const exp = require('../../data/expected.json');
const sel = require('../../data/selectors.json');

describe('TC001 Main Page Navigation', function () {
    it('', function () {
        browser.url('');
        expect($(sel.mainPageNavigation).getText()).toEqual(exp.mainPageNavigation);
    });

    it('TC007 Check description', function () {
        const label = $(sel.description).getText();
        expect(label).toEqual(exp.description);
    });

    it('TC006 Tab Key Navigation', function (){
        browser.url('');
        browser.keys('\uE004')
        $(sel.name).setValue('LadyBug');
        browser.keys('\uE004');
        browser.keys('\uE00D');
        browser.keys('\uE004');
        $(sel.age).setValue('55');
        browser.keys('\uE004');
        browser.keys('\uE006');
        const storyType = $$(sel.storyType)[2];
        storyType.click();
        browser.keys('\uE004');
        browser.keys('\uE004');
        $(sel.button).click();
        expect($(sel.tryAgain).isDisplayed()).toEqual(true);

    });

});

