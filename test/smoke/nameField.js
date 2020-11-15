const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Checks for Name Field', function() {
  before(function() {
    browser.url('');
    browser.maximizeWindow();
  });

  afterEach(function() {
    browser.refresh();
  });

  it('TC007 Label for name', function() {
    const label = $(sel.label).getText();
    expect(label).toEqual(exp.labelName);
  });

  it('TC008 Input letters', function() {
    $(sel.name).setValue('Lady');
    expect($$(sel.fieldClass)[0]).toHaveAttrContaining('class', 'success');
  });

  it('TC012 Input one letter', function() {
    $(sel.name).setValue('L');
    expect($$(sel.fieldClass)[0]).toHaveAttrContaining('class', 'success');
  });

  it('TC013 Input digits', function() {
    $(sel.name).setValue('12345');
    expect($$(sel.fieldClass)[0]).toHaveAttrContaining('class', 'success');
  });

  it('TC014 Input special characters', function() {
    $(sel.name).setValue('%$#*');
    expect($$(sel.fieldClass)[0]).toHaveAttrContaining('class', 'success');
  });

  it('TC017 Input letters and digits ', function() {
    $(sel.name).setValue('Lady777');
    expect($$(sel.fieldClass)[0]).toHaveAttrContaining('class', 'success');
  });
});
