/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
  if (typeof str !== 'string') return "Invalid input!";
  let uniqueValues = new Set();
  for(char of str) uniqueValues.add(char.toLowerCase());
  return str.length === uniqueValues.size;
}

//one liner return new Set(str.toUpperCase()).size == str.length;
// use test method return !/(\w).*\1/i.test(str)