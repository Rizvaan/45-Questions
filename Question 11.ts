/*
11) Greetings: Start with the array you used in Exercise 11, but instead of just printing 
each person’s name, print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name. */

let friendz : string[]  = ["john","steve","xavi","alvaraz"];

for (let friend of friendz){
    
    console.log(`Hello ${friend}, would you like to learn some TypeScript today?`);
};

