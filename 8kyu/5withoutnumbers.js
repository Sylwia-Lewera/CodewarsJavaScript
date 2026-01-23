/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
*/

function unusualFive() {
  const str = "hello world, hello JavaScript!";
  const re = "l";
  const count = str.match(new RegExp(re, "g")).length;
  return count;
}

//return 0b101; first thought solution