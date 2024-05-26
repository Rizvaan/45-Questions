/*
Question 21: 
Intentional Error: Try to produce an array index error in one of your programs. 
Correct the error before finishing.

Explain & TIP: Array index errors happen when you try to access a position in the array 
that doesn’t exist. Experimenting with this helps you understand array boundaries.
*/

let friends: string[] = ["Patel", "Bob", "Charlie"];

// This line will show undefine because [3] not exist in your Array and also programming start from zero. 
console.log(friends[3]); 

console.log(friends[2]);// = "Charlie"; // Correcting the error by accessing a valid index.