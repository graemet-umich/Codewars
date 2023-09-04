// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const digPow = require('../src/playingWithDigits').digPow;

describe("Playing with Digits", () => {
  it("test", () => {
    //Test.assertEquals(digPow(89, 1), 1)
    //Test.assertEquals(digPow(92, 1), -1)
    //Test.assertEquals(digPow(46288, 3), 51)

    assert.equal(digPow(89, 1), 1);
    assert.equal(digPow(92, 1), -1);
    assert.equal(digPow(695, 2), 2);
    assert.equal(digPow(46288, 3), 51);
  });
});