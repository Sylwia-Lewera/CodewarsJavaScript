/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
function digitalRoot(n) {
  let strNum = String(n);

  while (strNum.length > 1) {
    strNum = String(
      strNum
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0)
    );
  }

  return Number(strNum);
}

/*
Solution description:
- Converted the string into an array using .split('')

- Ensured digits are converted to numbers

- Intuitive variable naming (sum, digit)

- Loop-based approach for clarity
*/