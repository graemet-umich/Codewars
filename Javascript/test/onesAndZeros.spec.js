// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const binaryArrayToNumber = require('../src/onesAndZeros').binaryArrayToNumber;

describe("One's and Zero's", () => {
  it("Example tests", () => {
      assert.equal(binaryArrayToNumber([0,0,0,1]), 1);
      assert.equal(binaryArrayToNumber([0,0,1,0]), 2);
      assert.equal(binaryArrayToNumber([1,1,1,1]), 15);
      assert.equal(binaryArrayToNumber([0,1,1,0]), 6);
  });
});
