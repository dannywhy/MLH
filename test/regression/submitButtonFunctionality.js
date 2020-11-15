const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const path = require('path');
const imageUpload = require('../../helpers/imageUpload.js');
import {expect} from 'chai';

describe('Checking the main Submit Button functionality', function() {
  before(function() {
    browser.url('');
  });

  afterEach(function() {
    browser.refresh();
    browser.pause(1000);
  });

  it('TC-088 Create button is inactive after gender he filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-088-1 Create button is inactive after gender she filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-089 Create button is inactive after gender it filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-090 Create button is inactive after storyType Overcoming the Monster filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-091 Create button is inactive after storyType Rebirth filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-092 Create button is inactive after storyType Quest filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-093 Create button is inactive after storyType Journey And Return filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-094 Create button is inactive after storyType Rags And Riches filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-095 Create button is inactive after storyType Tragedy filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-095-1 Create button is inactive after storyType Comedy filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-096 Create button is inactive after image added', function() {
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-097 Create button is inactive after name & gender he filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-098 Create button is inactive after name & gender it filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-099 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-100 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-101 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-101 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-102 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-103 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-104 Create button is inactive after name & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-105 Create button is inactive after name & image is filled in', function() {
    $(sel.name).setValue(data.name);
    const fileUpload = $('.ant-upload input');
    browser.execute(
        (el) => el.style.display = 'block',
        fileUpload,
    );
    fileUpload.waitForDisplayed();
    const filePath = path.join(__dirname, '../../data/123.jpeg');
    fileUpload.setValue(filePath);
    $(sel.button).click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-106 Create button is inactive after gender & age is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-107 Create button is inactive after gender & age is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-108 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-109 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-110 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-111 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-112 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-113 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-114 Create button is inactive after gender he & story is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-115 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-116 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-117 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-118 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-119 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-120 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-121 Create button is inactive after gender she & story is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-122 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-123 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-124 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-125 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-126 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-127 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-128 Create button is inactive after gender it & story is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-129 Create button is inactive after gender he & image is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-130 Create button is inactive after gender she & image is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-131 Create button is inactive after gender it & image is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-132 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-133 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-134 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-135 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-136 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-136 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-136 Create button is inactive after age & storyType is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-137 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-138 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-139 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-140 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-141 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-142 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-142 Create button is inactive after storyType & image is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-143 Create button is inactive after name, gender he & age is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-144 Create button is inactive after name, gender she & age is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-145 Create button is inactive after name, gender it & age is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-146 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-147 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-148 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-149 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-150 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-151 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-152 Create button is inactive after name, gender he & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-153 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-154 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-155 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-156 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-157 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-157 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-158 Create button is inactive after name, gender she & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-159 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-160 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-161 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-162 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-163 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-164 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-165 Create button is inactive after name, gender it & storyType is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-166 Create button is inactive after name, gender he & image is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.he].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-167 Create button is inactive after name, gender she & image is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.she].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-168 Create button is inactive after name, gender it & image is filled in', function() {
    $(sel.name).setValue(data.name);
    $$(sel.gender)[data.gender.it].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-169 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-170 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-171 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-172 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-173 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-174 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-175 Create button is inactive after name, gender he, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-176 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-177 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-178 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-179 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-180 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-181 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-182 Create button is inactive after name, gender she, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-183 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-184 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-185 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-186 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-187 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-188 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-189 Create button is inactive after name, gender it, & storyType is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-190 Create button is inactive after gender he, age & image is filled in', function() {
    $$(sel.gender)[data.gender.he].click();
    $(sel.age).setValue(data.age);
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-191 Create button is inactive after gender she, age & image is filled in', function() {
    $$(sel.gender)[data.gender.she].click();
    $(sel.age).setValue(data.age);
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-192 Create button is inactive after gender it, age & image is filled in', function() {
    $$(sel.gender)[data.gender.it].click();
    $(sel.age).setValue(data.age);
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-193 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-194 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-195 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-196 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-197 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-198 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-199 Create button is inactive after age, storyType & image is filled in', function() {
    $(sel.age).setValue(data.age);
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    imageUpload();
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-200 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.OvercomingTheMonster].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-201 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Rebirth].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-202 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Quest].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-203 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.JourneyAndReturn].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-204 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.RagsAndRiches].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-205 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Tragedy].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });

  it('TC-206 Create button is inactive after storyType, image & name is filled in', function() {
    $(sel.storyClick).click();
    $$(sel.storyType)[data.storyType.Comedy].click();
    imageUpload();
    $(sel.name).setValue(data.name);
    const crt = $(sel.create).isEnabled();
    expect(crt).to.be.equal(false);
  });
});
