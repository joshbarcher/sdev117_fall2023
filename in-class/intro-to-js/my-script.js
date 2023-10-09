/*
    Josh Archer
    10/5/2023
    my-script.js
    This is a 1st file working with JS.
 */

//select the <p> element above and put in the "para" variable
let para = document.querySelector('p');
para.innerHTML = 'Welcome to my <strong>AWESOME</strong> site!';

for (let i = 1; i <= 12; i++)
{
    para.innerHTML += '<br>Thanks for stopping by!';
}