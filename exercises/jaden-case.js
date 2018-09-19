'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


function toJadenCase(str) { 
  return str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(toJadenCase('str'), 'Str')
assert.strictEqual(toJadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(toJadenCase('str cadeau bilibili'), 'Str Cadeau Bilibili')
assert.strictEqual(toJadenCase('zapzap loulou'), 'Zapzap Loulou')

// End of tests */
