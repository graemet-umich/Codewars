// const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const longest = require('../src/twoToOne').longest;

describe("Two to One",function() {
it("Basic tests of longest()",function() {
    assert.strictEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    assert.strictEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    assert.strictEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})