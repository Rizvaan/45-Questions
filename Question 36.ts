/*
Question 36: 
Large Shirts: Default values in make_shirt().
Explain & TIP:
 Modify functions to have default parameters, simplifying calls for common use cases. 
 This introduces default function parameters.
 */


 function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size

/********************************************************************************* */

let shoes = function(size: string = "large", color: string = "red", brand: string = "adidas"){

    console.log(`ordering "${size}" "${color}" "${brand}" shoes`);
}

shoes(); //No Change Default Value Will be Show.
shoes("medium") // only size will change and another 2 value will be same;
shoes("XL","White"); // this time size and color will be change and brand will be default;
