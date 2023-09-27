//there are 3 ways to define a variable
let number = 42;
const name = "Josh";
var havingFun = true; //this is the old way!

number = 3;
/* name = "Raymond"; */

//print out our variables to the browser console
console.log(number);
console.log(name);
console.log(havingFun);

//we went on a vacation this Summer!
let tripLocation = "Seattle";
let tripLength = 11;
let weather = "Sunny";

//use string concatenation
console.log("I visited " + tripLocation);

//using multiple parameters to the log() function
console.log("I visited", tripLocation, "for", tripLength,
            "days!");

//use 'string template literals'
console.log(`I visited ${tripLocation} for ${tripLength} days!` +
            `I can't believe how ${weather} it was!`);

