
let quote = document.querySelector(".quote");
quote.style.display = "block";
quote.style.fontStyle = "italic";
quote.style.margin = "4px";

let para = quote.parentElement;

para.style.backgroundColor = "lightgray";
para.style.border = "1px solid black";
para.title = "A paragraph";

//select all children of the aside element
let aside = document.querySelector("aside");

for (let i = 0; i < aside.children.length; i++)
{
    aside.children[i].style.backgroundColor = "lightblue";
}

/*
let tbody = document.querySelector("tbody");

for (let i = 0; i < tbody.children.length; i += 2)
{
    tbody.children[i].style.backgroundColor = "cyan";
}*/

//stripe the table on page load!
stripeTheTable();

function stripeTheTable()
{
    let table = document.querySelector("tbody");
    for (let i = 0; i < table.children.length; i++)
    {
        //checking if i is even
        if (i % 2 === 0)
        {
            table.children[i].style.backgroundColor = "lightgray";
        }
    }
}

//select the button and add an "event handler"
let button = document.querySelector("button");
button.onclick = event => {
    let contactName = prompt("Enter a contact name");
    let email = prompt("Enter an email");
    let phone = prompt("Enter a phone number - (xxx)yyy-zzzz");

    console.log(contactName, email, phone);

    //create new DOM elements
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    //prepare the elements
    col1.textContent = contactName;
    col2.textContent = email;
    col3.textContent = phone;

    //connect DOM elements
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    let tbody = document.querySelector("tbody");
    tbody.appendChild(row);

    //update the table and make sure it's striped
    stripeTheTable();
};





