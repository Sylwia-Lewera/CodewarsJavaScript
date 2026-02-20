/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
  if (typeof s !== 'string') return "Invalid input!";
    return s.length % 2 === 0 ? 
      s.slice(s.length / 2 - 1, s.length / 2 + 1) //even letters count (double middle)
    : s.slice((s.length - 1 )/ 2, (s.length - 1 )/ 2 + 1) ; // odd letters count (one 43 character)
}