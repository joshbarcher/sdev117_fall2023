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

//this displays a message in the page as a dialogue window
alert("Welcome to my program!");

//the pet variable will be assigned the user input
let pet = prompt("Enter your pet name!");
alert(`Your pet is named ${pet}`);

//the boyGirl variable will be assigned true/false
let boyGirl = confirm("Is your pet a boy?");
alert(`Is your pet a boy? ${boyGirl}`);

if (boyGirl === true)
{
    alert("The pet is a boy");
}
else //otherwise boyGirl must be false
{
    alert("The pet is a girl");
}
