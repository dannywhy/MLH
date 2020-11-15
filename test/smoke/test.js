const sel = require('../../data/selectors.json');
import {expect} from 'chai';

describe('Gender chooses', function() {
  describe('User can choose gender type', function() {
    it('TC-021 Choose gender (he)', function() {
      browser.url('');
      $(sel.gender).click();
      const value = $(sel.selectedGender).getAttribute('innerHTML');
      expect(value).to.contain('he');
    });

    it('TC-022 Choose gender (she)', function() {
      browser.url('');
      $$(sel.gender)[1].click();
      const value = $(sel.selectedGender).getAttribute('innerHTML');
      expect(value).to.contain('she');
    });

    it('TC-023 Choose gender (it)', function() {
      browser.url('');
      $$(sel.gender)[2].click();
      const value = $(sel.selectedGender).getAttribute('innerHTML');
      expect(value).to.contain('it');
    });
  });
});

