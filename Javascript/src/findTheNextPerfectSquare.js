/*

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

// Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
  let fsqrt = Math.sqrt(sq);
  let isqrt = Math.round(fsqrt);

  return (fsqrt == isqrt) ? Math.pow(isqrt + 1, 2) : -1;
}

// Non-integer modulus solution
function findNextSquare(sq) {
  let r = Math.sqrt(sq);

  return r % 1 ? -1 : Math.pow(r + 1, 2);
}

// clever pre-increment
function findNextSquare(sq) {
  let r = Math.sqrt(sq);

  return r % 1 ? -1 : ++r * r;
}

module.exports = { findNextSquare };

// console.log(findNextSquare(600));
// console.log(findNextSquare(625));

