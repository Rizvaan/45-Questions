/*
Question 41: 
Magicians: Display magician names from an array.
Explain & TIP: 
Passing arrays to functions allows for the manipulation or display of their contents 
in a centralized manner. This is useful for handling lists of data.
*/


let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
};

show_magicians(magicians);

//stroing array in a variable 
let footballers : string[] = ["Ronaldo" , "Messi" , "Pogba"];

//callback array in  forEach Loop
        footballers.forEach(footballer => {
            console.log(footballer);
        });