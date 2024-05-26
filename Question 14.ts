/*
Question 14;
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite 
*/

let guests: string[] = ["Messi", "C.Ronaldo", "Xavi"];

guests.forEach(guest => {
   // console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//unableToAttend = "Xavi" which was presented my previous guests list

let unableToAttend = "Xavi";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest list by Using indexOf Function;
let newGuest = "Neymar jr";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});