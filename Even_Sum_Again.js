/*

Even Sum Again Ended
Description

You are given a number stored in a variable with the name N

You have to print N lines such that on each line you find the sum of all even numbers in the range of[1,i],
 where i represents all the numbers in the range of[1,N]

For example, consider the value stored in N = 3

Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero,
 as there are no even numbers in the range

Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, as there is 
only 1 even number (2). Hence, the sum becomes 2

Finally, we find the sum of all even numbers in the range of [1,3], 
which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

Therefore, the final output becomes

0
2
2

Input
The first and the only line of the input contains the value stored inN

Output
Print N lines such that on each line you find the sum of all even numbers in the range of[1,i], 
where
i represents all the numbers in the range of[1,N], as shown in the problem statement

4

0
2
2
6


In the sample test case, the value stored inN = 4.

Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, 
as there are no even numbers in the range

Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, 
as there is only 1 even number (2). Hence, the sum becomes 2

Then, we find the sum of all even numbers in the range of [1,3], which comes out to be 2, 
as there is only 1 even number (2). Hence, the sum becomes 2

Then, finally we find the sum of all even numbers in the range of [1,4], which comes out to be 6, 
as there are two even numbers (2,4)

Therefore, the final output becomes

0
2
2
6



*/

function evenSumAgain(num) {
  // Write code here

  for (let i = 1; i <= num; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        sum += j;
      }
    }
    console.log(sum);
  }
}

evenSumAgain(4);
