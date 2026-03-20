/**
 This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

const createNumber = n => op => op ? op(n) : n;

const zero  = createNumber(0);
const one   = createNumber(1);
const two   = createNumber(2);
const three = createNumber(3);
const four  = createNumber(4);
const five  = createNumber(5);
const six   = createNumber(6);
const seven = createNumber(7);
const eight = createNumber(8);
const nine  = createNumber(9);

function plus(right) {
  return function(left) {
    return left + right;
  };
}

function minus(right) {
  return function(left) {
    return left - right;
  };
}

function times(right) {
  return function(left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function(left) {
    return Math.floor(left / right);
  };
}