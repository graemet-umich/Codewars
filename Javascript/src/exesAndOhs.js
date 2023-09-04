/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

// convert to array and get reduce sum
function XO(s) {
  let a = s.split('');
  let nxs = a.reduce((acc, e) => acc + (e == 'x' || e == 'X'), 0);
  let nos = a.reduce((acc, e) => acc + (e == 'o' || e == 'O'), 0);

  return (nxs == nos) ? true : false;
}

// global pattern matching
function XO(s) {
  let nxs = s.match(/x/gi);
  let nos = s.match(/o/gi);
  nxs = nxs === null ? 0 : nxs.length;
  nos = nos === null ? 0 : nos.length;

  return (nxs == nos) ? true : false;
}

module.exports = { XO };

// console.log(XO('exes and ohs'))
// console.log(XO('exes and ohs, oh my'))