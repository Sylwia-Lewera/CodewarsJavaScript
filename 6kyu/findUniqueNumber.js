/**
 * 
 */


//find filter solution, not efficient for large arrays
// function findUniq(arr) {

//   const unique = arr.find(x => arr.filter(y => y === x).length === 1);
  
//   return unique;
// }

function findUniq(arr) {
  const counts = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

const unique = arr.find(val => counts[val] === 1);
  return unique;
}