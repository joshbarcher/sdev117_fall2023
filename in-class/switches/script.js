//ask the user for a student name
let studentName = prompt("Enter a student name");

//print out their classes
switch (studentName) //switches usually work with strings, numbers, boolean
{
    case "Sarvesh":
        console.log("Engl 128, SDEV 117, Math 146");
        break;
    case "Keenan":
        console.log("SDEV 218, SDEV 117");
        break;
    case "Raymond":
        console.log("IT 190, Math 146, SDEV 117");
        break;
    case "Bryce":
        console.log("SDEV 218, SDEV 117");
        break;
    case "Dani":
        console.log("Math 146, SDEV 117");
        break;
    default:
        console.log("I don't know this student's schedule!");
        break;
}

