//using prompt() returns string values
let op1 = prompt("Enter operand #1");
let op2 = prompt("Enter operand #2");

//convert our string inputs to numbers
op1 = parseFloat(op1);
op2 = parseFloat(op2);

//if you want to test what's in your variable
//use typeof
console.log("Type of op1 is", typeof op1);
console.log("Type of op2 is", typeof op2);
console.log("Our operands are", op1, op2);

if (!Number.isNaN(op1) && !Number.isNaN(op2))
{
    //good case, we've got numbers
    let add = op1 + op2;
    let sub = op1 - op2;
    let mult = op1 * op2;
    let div = op1 / op2;

    //round to two digits
    add = add.toFixed(2);
    sub = sub.toFixed(2);
    mult = mult.toFixed(2);
    div = div.toFixed(2);

    console.log("Type of sub is", typeof sub);

    console.log(`${op1} + ${op2} = ${add}`);
    console.log(`${op1} - ${op2} = ${sub}`);
    console.log(`${op1} * ${op2} = ${mult}`);

    if (op2 === 0)
    {
        console.log("Don't divide by zero!");
    }
    else
    {
        console.log(`${op1} / ${op2} = ${div}`);
    }
}
else
{
    //bad inputs case
    console.log("Please only enter valid numbers");
}



