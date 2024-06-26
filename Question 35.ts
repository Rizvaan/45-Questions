/*
Question 35: 
T-Shirt: Create a function for customizing t-shirts.
Explain & TIP: 
Writing a function that accepts parameters allows you to reuse code efficiently. 
This introduces you to function parameters and printing dynamic content based on those parameters.
*/

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");

/****************************************************** */

//making same programe with another examples

let shoes = function (size:string, color:string, brand:string){

    console.log(`Ordering ${size} ${color} ${brand} shoes`);

}

shoes("Large","Black","Niki");