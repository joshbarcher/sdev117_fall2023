/*
    In this file we are practicing with if-statements.

    Author: Josh Archer
    Date: 10/11/23
    File: colors.js
*/

// In this file we are practicing with if-statements.
// Author: Josh Archer
// Date: 10/11/23
// File: colors.js

//read in rgb values (as strings)
let r = parseInt(prompt("Enter red component"));
let g = parseInt(prompt("Enter green component"));
let b = parseInt(prompt("Enter blue component"));

//print out the color to see if the code above works!
console.log(`The color you entered is (${r},${g},${b})`);

//check for valid color component ranges
let redValid = r >= 0 && r <= 255;
let greenValid = g >= 0 && g <= 255;
let blueValid = b >= 0 && b <= 255;

//is the color valid or not?
if (redValid && greenValid && blueValid)
{
    //figure out which color
    if (r === 0 && g === 0 && b === 0)
    {
        console.log("The color is black");
    }
    else if (r === 255 && g === 255 && b === 255)
    {
        console.log("The color is white");
    }
    else if (r === 255 && g === 0 && b === 255)
    {
        console.log("The color is purple/magenta");
    }
    else
    {
        console.log("I can't figure out this color?!?!");
    }
}
else
{
    //not valid
    console.log("Please enter color components in the range [0,255]");
}

