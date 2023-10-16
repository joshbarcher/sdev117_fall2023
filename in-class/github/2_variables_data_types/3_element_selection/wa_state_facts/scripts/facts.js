//store the WA state facts
let fact1 = "The Washington state flag was passed in 1923, more than " +
            "30 years after Washington was admitted to the union.";
let fact2 = "Everett is the site of the world’s largest building, Boeing’s final assembly plant";
let fact3 = "Medina is the home of the United States wealthiest man, Microsoft’s Bill Gates.";
let fact4 = "The official state motto of Washington is ‘Al-ki (Chinook Jargon)’ which translates to ‘Bye and bye’";

//select an HTML element and update its innerHTML property
let listItem1 = document.querySelector("#fact-1");
listItem1.innerHTML = fact1;

let listItem2 = document.querySelector("#fact-2");
listItem2.innerHTML = fact2;

let listItem3 = document.querySelector("#fact-3");
listItem3.innerHTML = fact3;

let listItem4 = document.getElementById("fact-4");
listItem4.textContent = fact4;