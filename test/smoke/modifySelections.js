const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
import { expect } from 'chai';

describe('The chosen selections can be modified any time before clicking the \'Create!\' button', function () {

    describe('Happy path', function () {

            it('TC-083  All required fields are selected, the button is active', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(true);
        });

        it('TC-083.001  All previous selections are modified, the button is active', function () {
            inputValues4(data.name, data.gender.he, data.age, data.storyType.JourneyAndReturn)
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(true);
        });
    });
})