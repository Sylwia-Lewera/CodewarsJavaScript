/*
Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(x){
  if(!(typeof x === 'object' && x.hasOwnProperty('length'))) return "Invalis data provided!";
  result = 1
  for(let i =0; i < x.length; i++) result *= x[i];
  return result;
}

// mrthod to check const grow = (nums) => nums.reduce((product, num) => product * num, 1);