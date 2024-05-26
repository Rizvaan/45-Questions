/*
Question 17: 
Seeing the World: Think of at least five places you’d like to visit.
Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list,
useful for planning and organizing information
*/

let places: string[] = ["Chaina", "Afghanistan", "India", "South Korea", "UAE"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

//reverse function will reverse your whole array
places.reverse();
console.log("Reversed order:", places);


places.reverse();
console.log("Original order:", places)

//sort function will sort your array on the alphabatical form.
places.sort();
console.log("Alphabetical order:", places)

places.reverse();
console.log("Reverse alphabetical order:", places);