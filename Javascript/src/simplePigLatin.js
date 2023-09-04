/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  return str.split(/\s+/)
            .map( w => isWord(w) ? w.slice(1) + w[0] + 'ay' : w )
            .join(' ');
}

// test for case-insensitive character
const isAlpha = (c) => (/[a-z]/i).test(c);

// will fail for 'world!' ==> 'orld!way'
const isWord = (w) => w.split('').filter(isAlpha).length;

module.exports = { pigIt };

// console.log(pigIt('Hello world !'));


