const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const imageUpload = require('../../helpers/imageUpload');
import {expect} from 'chai';

describe('The story appears on the same page and has 3 (4 if an image was selected) main elements', function() {
  describe('The story page has 3 main elements: the page header, a story and a \'Try again !\' button.', function() {
    it('TC-084  Happy path to story page: Try again button exists', function() {
      browser.url('');
      inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy);
      browser.pause(3000);
      const tryAgain = $(sel.tryAgain).isDisplayed();
      browser.pause(3000);
      expect(tryAgain).to.be.equal(true);
    });

    it('TC-084.001 Story header is displayed', function() {
      const storyTitle = $(sel.storyTitle).isDisplayed();
      expect(storyTitle).to.be.equal(true);
    });

    it('TC-084.002 No image is displayed on the story page', function() {
      const storyImage = $(sel.storyImage).isDisplayed();
      expect(storyImage).to.be.equal(false);
    });

    it('TC-084.003 Story is displayed', function() {
      const storyText = $(sel.storyText).isDisplayed();
      expect(storyText).to.be.equal(true);
    });

    it('TC-085  The story appears on the same page', function() {
      browser.url('');
      const appUrl = browser.getUrl();
      inputValues4andClick(data.name, data.gender.she, data.age, data.storyType.Comedy);
      browser.pause(3000);
      const storyUrl = browser.getUrl();
      expect(appUrl).to.be.equal(storyUrl);
    });
  });

  describe('The story page has 4 main elements: the page header, an uploaded image, a story and a \'Try again !\' button.', function() {
    it('TC-086  Happy path to story page: Try again button exists', function() {
      browser.url('');
      inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
      imageUpload();
      $(sel.create).click();
      const tryAgain = $(sel.tryAgain).isDisplayed();
      browser.pause(3000);
      expect(tryAgain).to.be.equal(true);
    });

    it('TC-086.001 Story header is displayed', function() {
      const storyTitle = $(sel.storyTitle).isDisplayed();
      expect(storyTitle).to.be.equal(true);
    });

    it('TC-086.002 An image is displayed on the story page', function() {
      const storyImage = $(sel.storyImage).isDisplayed();
      expect(storyImage).to.be.equal(true);
    });

    it('TC-086.003 Story is displayed', function() {
      const storyText = $(sel.storyTitle).isDisplayed();
      expect(storyText).to.be.equal(true);
    });

    it('TC-087  The story appears on the same page (with an image)', function() {
      browser.url('');
      const appUrl = browser.getUrl();
      inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
      imageUpload();
      $(sel.create).click();
      browser.pause(3000);
      const storyUrl = browser.getUrl();
      expect(appUrl).to.be.equal(storyUrl);
    });
  });
});
