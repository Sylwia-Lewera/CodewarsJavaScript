/**
 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */

function order(words){
  /***
  1. break down sentence to array with split
  2. find numbers in words
  3. place each word at (number - 1) index in result array
  4. join result array into final sentence
  */

  if (!words) return "";

  const wordsArray = words.split(" ");
  const result = [];

  for (let word of wordsArray) {
    const position = Number(word.match(/\d/)[0]);
    result[position - 1] = word;
  }

  return result.join(" ");
}

/**
 *solution with sort from codewars best:
 return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
 */