/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  let ws = str.split(/\s+/);

  ws.map( w => w.slice(1) + w[0] + 'ay' )

  return ws
}


// test for case-insensitive character
const isAlpha = (c) => (/a-z/i).test(c);

module.exports = { pigIt };

console.log(pigIt('Pig Latin is cool'));


