//call the function
add(1, 3);
add(4, 5);
add("hello", "world!");
add(true, false);

//declare the function (keep these at the bottom of the file)
function add(first, second)
{
    //convert inputs to numbers
    first = parseFloat(first);
    second = parseFloat(second);

    if (Number.isNaN(first) || Number.isNaN(second))
    {
        console.log("Please only use numbers as parameters");
        return; //exit the function
    }

    console.log(first + second);
}

//defining a variable that stores a function
let divider = function(num, den) {
    console.log("You are dividing");
    console.log("Result", num / den);
};

divider(10, 3);
divider(7, 2);
divider(333, 251);

//arrow-functions
let multiply = (first, second) => { console.log(first * second); }

multiply(4, 5);
multiply(24, 48);
multiply(100, 12675);