
//create 4 functions
let adder = (first, second) => console.log(first + second);
let subtractor = (first, second) => console.log(first - second);
let multiplier = (first, second) => console.log(first * second);
let divider = (first, second) => console.log(first / second);

calculate(2, 3, adder);
calculate(16, 7, subtractor);

//higher-order function
function calculate(num1, num2, func)
{
    //double check here if num1 and num2 are numbers

    func(num1, num2);
}