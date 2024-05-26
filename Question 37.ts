/*
Question 37: 
Cities: Describing cities with a function.
Explain & TIP: 
Use functions with default parameters to handle cases where certain data might not change often. 
This helps in making your code more flexible.
*/


function find_City_Country(city: string, country: string = "Pakistan"){
    
    
    console.log(`${city} is the city of ${country}`)

};

find_City_Country("Karachi");
find_City_Country("Lahore");
find_City_Country("Tokyo", "Japan");

/**************************************************************************************** */

let langFinder = function (Language : string, Country : string){
    
    console.log(`"${Language}" is the national language of "${Country}"`);
};

langFinder("Urdu","Pakistan");
langFinder("Persian","Iran");
langFinder("English","England");
