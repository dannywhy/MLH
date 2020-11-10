const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-015-0 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-015-1 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-015-2 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-017 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-018 Create', function () {
            const label = $(sel.button).isDisplayed();
            expect(label).toEqual(true);
        });

        describe('Placeholders name', function () {
            it('TC-031 Name ', function () {
                browser.url('');
                const placeholder = $(sel.name).getAttribute('placeholder');
                expect(placeholder).toEqual(exp.placeholderName);
            });

        });

    });
});