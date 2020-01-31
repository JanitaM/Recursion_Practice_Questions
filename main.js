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
// https://www.gcflcm.com/gcf-of-8-and-12
// x = smaller number
// loop version
/* const gcd = (x, y) => {
  let n = 1, arr = [];
  while (n < x) {
    if (x % n === 0 && y % n === 0) {
      arr.push(n)
    }
    n++
  }
  return arr.pop()
}*/
const gcd = (x, y) => {
  let arr = [];
  if (y % x === 0) {
    return x;
  }
  return gcd(x - 1, y - 1)
}
// console.log(`2)`, gcd(8, 12));

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
// https://javascript.info/recursion
// loop version
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
    return arr[0]; //if there is only one element, return that element
  } else {  //if there are more elements
    let sum = 0;
    for (let num in arr) {
      // sum += arr[num]; //this works sum = 21
      /* sum += sumOfArr(num); // returns 0012345 */
      sum += arr[num] + sumOfArr(arr[num]);
    }
    return sum;
  }
}
// console.log(`4)`, sumOfArr([1, 2, 3, 4, 5, 6, 7]));


/* 5. Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor. 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.  */
// https://www.mathsisfun.com/exponent.html
// https://www.calculatorsoup.com/calculators/algebra/exponentsolve.php
// n = log y/log x, where n = exponent, x is unknown, y is given
const expoOfNum = y => {
  // if () {  //5^0 = 1
  //   return 0;
  // } else if (Math.log(y) / Math.log(y) === 1) {  //5^1 = 5
  //   return 1;
  // } else {

  // }
}
console.log(`5)`, expoOfNum(5)); //return 1



/* 6. Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. */
//https://www.mathsisfun.com/numbers/fibonacci-sequence.html
// stop at n
const fibonacci = n => {
  // when you reach n, stop
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// console.log(`6)`, fibonacci(10));

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