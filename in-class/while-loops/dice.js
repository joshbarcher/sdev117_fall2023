//constants
const DICE_SIDES = 20;
const TARGET_NUM = 5;

//definite loop
/*for (let i = 1; i <= 20; i++)
{
    //generate a random number
    let number = Math.random() * DICE_SIDES;
    number = Math.ceil(number);

    console.log(number);
}*/

//indefinite loop
let diceRoll = 0; //this is initially an invalid dice side
let rolls = 0;

do
{
    diceRoll = Math.ceil(Math.random() * DICE_SIDES);
    console.log(`You rolled ${diceRoll}`);

    rolls++;
} while (diceRoll !== TARGET_NUM);

//printed out the number of rolls it took to find the target number
console.log(`It took ${rolls} rolls to find ${TARGET_NUM}`);
