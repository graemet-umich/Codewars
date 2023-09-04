// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const XO = require('../src/exesAndOhs').XO;

describe("Exes and Ohs", () => {
  it("test", () => {
assert.equal(XO('xo'),true);
assert.equal(XO("xxOo"),true);
assert.equal(XO("xxxm"),false);
assert.equal(XO("Oo"),false);
assert.equal(XO("ooom"),false);
  });
});
