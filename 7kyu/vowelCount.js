/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
   if (typeof str !== 'string') return "Invalid input!";
  let matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

//null handling in pipe -> return (str.match(/[aeiou]/ig)||[]).length;