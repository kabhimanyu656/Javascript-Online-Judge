/*

Average-of-all Ended
Description

You are given an arr which has N integers.

Write a program to print the ceil of average of integers present in the array.

Note:- The ceil value of the given whole numberKis the smallest integer value greater or equal to aK.

For example:-

if the value of K = 3.679, the ceil value of K is 4
if the value of K = 5, the ceil value of K is 5.

Input
Input Format :

First line contains N, which is the number of elements present in array.

Second line contains N space separated integers, which are elements of array.

Constraints :

1 <= n <= 100


Output
You need to output ceil of the average of numbers present in array.


Sample Input 1 

4
2 5 0 9
Sample Output 1

4
Hint

Output Explanation :

N here is 4.

So, you are getting 4 elements in the array.

The sum of elements of array is 2 + 5 + 0 + 9 = 16.

Average of elements of array is 16/4 = 4.

The ceil of average of elements of array is 4.



*/

function averageOfAll(n, arr) {
  //write code here
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  console.log(Math.ceil(sum / n));
}

averageOfAll(4, [2, 5, 0, 9]);

/*
node Average_of_all.js
4
*/
