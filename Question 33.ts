/*
Question 33: 
Pizzas: Share your favorite pizzas and express your love for them.
Explain & TIP: 
Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. 
This demonstrates looping through an array and appending custom messages to each item.
*/



let pizzas: string[] = ["Pakistani", "Japani", "Italian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");