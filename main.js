/* 1. Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120  */
const factorial = x => {
  if (x <= 1) {
    return 1;
  }
  return factorial(x - 1) * x;
}
// console.log(`1)`, factorial(4));


/* 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */
// for loop version
// https://www.google.com/search?q=find+the+greatest+common+divisor&rlz=1C1SQJL_enUS806US806&oq=find+the+greatest+common+divi&aqs=chrome.0.0j69i57j0l6.18680j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_M1gbXu39BOap5wK-p4vYCg28
// x = smaller number
const gcd = (x, y) => {
  if (y % x === 0) {
    return x;
  }
  return
}
console.log(`2)`, gcd(8, 8));

/* 3. Write a JavaScript program to get the integers in range (x, y).
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8] */
const range = (x, y) => {
  if (x === y - 2) {
    return [x + 1];
  }
  return [x + 1, range(x + 1, y)].flat();
}
// console.log(`3)`, range(2, 9));


/* 4. Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21  */
// for loop
/* const sumOfArr = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    total += arr[i];d
  }
  return total;
} */

const sumOfArr = arr => {
  if (arr.length <= 1) {
    return arr[0];
  }
}
console.log(`4)`, sumOfArr([1, 2, 3, 4, 5, 6]));


/* 5. Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor. 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.  */
console.log(`5)`);


/* 6. Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. */
console.log(`6)`);


/* 7. Write a JavaScript program to check whether a number is even or not. */
const isEven = x => {
  x = Math.abs(x);
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  }
  return isEven(x - 2);
}
// console.log(`7)`, isEven(4));


/* 8. Write a JavaScript program for binary search. Go to the editor
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5' */
console.log(`8)`);


/* 9. Write a merge sort program in JavaScript.
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62] */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
console.log(`9)`);