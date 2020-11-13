const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
import { expect} from 'chai';

describe('Verify that the Create button is disabled', function() {

    before('', function() {
        browser.url('');
    });

    beforeEach('', function() {
        browser.refresh();
    });

  it('TC-077 Name and Story type only', function() {
      $(sel.name).setValue(data.name);
      $(sel.story).click();
      $$(sel.storyType)[data.storyType.Quest].click();
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });

  it('TC-078 Gender and Age only', function() {
      $$(sel.gender)[data.gender.it].click();
      $(sel.age).setValue(data.age);
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });

  it('TC-079 Name and Gender only', function() {
      $(sel.name).setValue(data.name);
      $$(sel.gender)[data.gender.she].click();
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });

  it('TC-080 Age and Story type only', function() {
      $(sel.age).setValue(data.age);
      $(sel.story).click();
      $$(sel.storyType)[data.storyType.Quest].click();
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });

  it('TC-081 Name and Age only', function() {
      $(sel.name).setValue(data.name);
      $(sel.age).setValue(data.age);
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });

  it('TC-082 Gender and Story type only', function() {
      $$(sel.gender)[data.gender.he].click();
      $(sel.story).click();
      $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
      expect($(sel.button).isEnabled()).to.be.equal(false);
  });
});