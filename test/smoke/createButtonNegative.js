const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
import {expect} from 'chai';

describe('Create Button stays inactive before options 1-4 are selected', function() {
  describe('Happy path', function() {
    it('TC-071 The submit button is disabled when the name is entered but the rest of the ' +
            'elements are NOT selected', function() {
      browser.url('');
      $(sel.name).setValue(data.name);
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-072 The submit button is disabled when the gender She is selected but the rest of the ' +
            'elements are NOT selected', function() {
      browser.url('');
      $$(sel.gender)[data.gender.she].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-073  The submit button is disabled when the age is entered but the rest of the ' +
            'elements are NOT selected', function() {
      browser.url('');
      $(sel.age).setValue(data.age);
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-074  The submit button is disabled when the Comedy story type is selected but the rest of the ' +
            'elements are NOT selected', function() {
      browser.url('');
      $(sel.storyClick).click();
      $$(sel.storyType)[data.storyType.Comedy].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-075  The submit button is disabled when the invalid input is entered in the name field and ' +
            'the rest of the elements have been selected', function() {
      browser.url('');
      inputValues4(data.invalidName, data.gender.she, data.age, data.storyType.Comedy);
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-076  The submit button is disabled when the invalid input is entered in the age field and the ' +
            'rest of the elements have been selected', function() {
      browser.url('');
      inputValues4(data.name, data.gender.she, data.invalidAge, data.storyType.Comedy);
      const create = $(sel.create).isEnabled();
      console.log(create);
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-077  The submit button is disabled when only 2 options are selected: ' +
            'name input field and Comedy story type', function() {
      browser.url('');
      $(sel.name).setValue(data.name);
      $(sel.storyClick).click();
      $$(sel.storyType)[data.storyType.Comedy].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-078  The submit button is disabled when only 2 options are selected: gender She and age', function() {
      browser.url('');
      $$(sel.gender)[data.gender.she].click();
      $(sel.age).setValue(data.age);
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-079  The submit button is disabled when only 2 options are selected: name and gender She', function() {
      browser.url('');
      $(sel.name).setValue(data.name);
      $$(sel.gender)[data.gender.she].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-080  The submit button is disabled when only 2 options are selected: age and Comedy story type', function() {
      browser.url('');
      $(sel.age).setValue(data.age);
      $(sel.storyClick).click();
      $$(sel.storyType)[data.storyType.Comedy].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-081  Verify the submit button is disabled when only 2 options are selected: name and age', function() {
      browser.url('');
      $(sel.name).setValue(data.name);
      $(sel.age).setValue(data.age);
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });

    it('TC-082  The submit button is disabled when only 2 options are selected: gender She and Comedy story type', function() {
      browser.url('');
      $$(sel.gender)[data.gender.she].click();
      $(sel.storyClick).click();
      $$(sel.storyType)[data.storyType.Comedy].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).to.be.equal(false);
    });
  });
});
