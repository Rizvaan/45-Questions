//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests

let guests: string[] = ["Lionel Messi", "Cristiano Ronaldo", "Pogba"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Neymar jr"); //unshift will push data statring point of Array.
guests.splice(guests.length / 2, 0, "David Beckham"); //splice give you access where u want you put your date.
guests.push("Ibrahimovic"); //push will push data ending point of Array.

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
