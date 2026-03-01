/*

*/

function findOdd(A) {
  return A.reduce((acc, n) => acc ^ n, 0);
}