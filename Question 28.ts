/*
Question 28: 
Favorite Fruit: 
Create an array for your favorite fruits and check if certain fruits are included.
Explain & TIP: 
Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.
*/


let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("cherries")){
    console.log("You really like cherries!");
}
// Continue with more fruits