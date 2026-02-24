/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  if (typeof s !== 'string') {
    throw new TypeError('inavlid input not type of string');
  }
   return Math.min( ...s.split(' ').map(word => word.length));
}