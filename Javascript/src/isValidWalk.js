/*

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

/* Observations
The length of [walk] must be 10.
(The length of [walk] must be even, which 10 is.)
The start and finish points must be the same.
*/

// isValidWalk :: [String] -> Boolean
function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  }

  let x = 0, y = 1; // for x and y axes
  let cartOrigin = [0, 0];
  let coord = [...cartOrigin]; // new array with new reference

  for (let dir of walk) {
    switch(dir) {
      case 'n':
        coord[y]++;
        break;
      case 's':
        coord[y]--;
        break;

      case 'e':
        coord[x]++;
        break;
      case 'w':
        coord[x]--;
        break;

      default:
        return false;  // direction not one of nsew
    }
  }
  //console.log(coord);
  //console.log(cartOrigin);

  return (coord[x] == cartOrigin[x] && coord[y] == cartOrigin[y]) ? true : false;
}

module.exports = { isValidWalk };

// console.log(takeATenMinuteWalk(['e', 'e', 'e', 'e', 'e', 'e', 'w', 'w', 'w', 'w']));
