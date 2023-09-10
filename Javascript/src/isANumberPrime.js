// simple non-cached implementation
function isPrime(num) {
  if (num < 2) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (n = 3; n <= Math.sqrt(num); n += 2) {
    if (num % n == 0) return false;
  }
  return true;
}

/*function isPrime(num) {
  if (num < 2) return false;

  let wheel3331 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

  let sqrtNum = Math.floor(Math.sqrt(num));

  if (sqrtNum <= 53) {

    if (wheel3331.includes(sqrtNum)) {
      return true;
     } else {
      return false;
     }
  } else {
    for (n = 59; n <= sqrtNum; n +=2 ) {
      if (num % n == 0) {
        return false;
      };
    };
    return true;
  };
};
*/

module.exports = { isPrime };
