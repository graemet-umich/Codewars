// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const pigIt = require('../src/simplePigLatin').pigIt;

describe("Tests", () => {
  it("test", () => {
    assert.equal(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
    assert.equal(pigIt('This is my string'),'hisTay siay ymay tringsay')
  });
});
