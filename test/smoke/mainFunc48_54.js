const exp = require('../../data/expected.json');
const data = require ('../../data/testData.json');
const inputValue48_54 = require ("../../helpers/inputValue48_54")
import {expect} from 'chai';

describe('Checking if story type is appear', function () {

    describe('Story types 1-7', function () {

        before(function () {
            browser.url("");
            browser.maximizeWindow();
        });

        afterEach(function () {
            browser.refresh()
        });

        it('TC-048 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.OvercomingTheMonster)).to.be.equal(exp.storyType.over);
        });

        it('TC-049 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.Rebirth)).to.be.equal(exp.storyType.rebirth);
        });

        it('TC-050 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.Quest)).to.be.equal(exp.storyType.quest);
        });

        it('TC-051 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.JourneyAndReturn)).to.be.equal(exp.storyType.journey);
        });

        it('TC-052 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.RagsAndRiches)).to.be.equal(exp.storyType.rags);
        });

        it('TC-053 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.Tragedy)).to.be.equal(exp.storyType.tragedy);
        });

        it('TC-054 Check what user can choose only one story type', function () {
            expect(inputValue48_54(data.storyType.Comedy)).to.be.equal(exp.storyType.comedy);
        });
    });
});