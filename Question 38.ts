/*
Question 38: 
City Names: Formatting city-country pairs.
Explain & TIP: 
Returning formatted strings from functions can simplify data presentation. 
This exercise practices string formatting and returning values from functions.
*/


function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));



let numInLetter = function (numb : number, alpha : string){

        //this syntax will be return
        return `${numb}, ${alpha}`
}

console.log(1, "ONE");
console.log(2, "TWO");
console.log(3, "THREE");

