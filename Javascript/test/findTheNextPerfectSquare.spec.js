// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const findNextSquare = require('../src/findTheNextPerfectSquare').findNextSquare;

describe("Find the Next Perfect Square", function() {
  it("findNextSquare should return the next square for perfect squares", function() {
    assert.equal(findNextSquare(121), 144, "Wrong output for 121");
    assert.equal(findNextSquare(625), 676, "Wrong output for 625");
    assert.equal(findNextSquare(319225), 320356, "Wrong output for 319225");
    assert.equal(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  it("findNextSquare should return -1 for numbers which aren't perfect squares", function() {
    assert.equal(findNextSquare(155), -1, "Wrong output for 155");
    assert.equal(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});

