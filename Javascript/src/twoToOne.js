/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

//  :: String -> String -> String
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

module.exports = { longest };

// console.log(longest('hellotheredolly', 'zapthatalien'));