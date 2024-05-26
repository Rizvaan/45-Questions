
/*Question 16: 
Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
and you can only invite two guests*/

let guests : string[] = ["Messi","Ronaldo","Ibrahimovic","Paolo Maldini"];

console.log("Unfortunately, I can only invite two people for dinner.");


//while loop main hum ne apnay array ko greater than 2 kiya lekin ya not = 3 b hoga
//yani k humara array 3sara element show nai karay ga q k guest.length > 2 hai lekin = to 3 nai hai. 
while (guests.length > 3) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

  guests.forEach(guest => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list

