/*

Pattern of N 
Description

You are given a number stored in a variable with the name N

You have to print all the numbers in the range from1 to N*N, such that there are exactly N numbers on each line

For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed,
such that there are 3 numbers on each line. Therefore, the required output is

1 2 3
4 5 6
7 8 9

Input
The first and the only line of the input contains the value stored in the variable N


Output
Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there are N numbers on 
each line

4

1 2 3 4 
5 6 7 8 
9 10 11 12 
13 14 15 16 


HINT 

In the sample test case, the value stored atN = 4. 
Therefore, all the values in the range from[1,16]need to be printed.

Also, there should be 4 elements on each line. Therefore, the output becomes

1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16



*/

function patternOfN(N) {
  // Write code here

  for (let j = 1; j <= N; j++) {
    let pattern = "";

    for (let i = 1 + (j - 1) * N; i <= j * N; i++) {
      pattern += i + " ";
    }
    console.log(pattern);

    // if(j===1){

    //     for(let i=1;i<=N;i++){
    //     pattern+=i+" ";
    // }
    //     console.log(pattern);
    // }else if(j==2){

    //     for(let i=1+N;i<=N+N;i++){
    //     pattern+=i+" ";
    // }
    //     console.log(pattern);
    // }else if(j===3){
    //     for(let i=1+N+N;i<=N+N+N;i++){
    //     pattern+=i+" ";
    // }
    //     console.log(pattern);

    // }else {
    //     for(let i=1+N+N+N;i<=N+N+N+N;i++){
    //     pattern+=i+" ";
    // }
    //     console.log(pattern);
    // }

    // }
  }
}

patternOfN(5);
