
//create an array of books
let books = ["Dune", "Red Rising", "Good Omens", "Pyramids", "Reiwa No Dara-San",
             "Promise Land", "Atlas Shrugged"];

console.log(books);

//make a change to all by books
for (let i = 0; i < books.length; i++)
{
    books[i] = "Book: " + books[i];
    console.log(books[i].toUpperCase());
}

console.log(books);

//add some more books
books.push("The Book Thief");
books.push("Record of a Spaceborn", "All Good People Here", "This is OUR Story");

console.log(books);

let getBook = books.pop();
console.log("Removed: ", getBook);

let booksList = document.getElementById("books-list");
booksList.innerHTML += "<li>The Woman in Me</li>";

//this is much more flexible
booksList = document.querySelector("#books-list");
booksList.innerHTML += "<li>Spy x Family</li>";

let items = document.querySelectorAll("li");
console.log(items);

for (let i = 0; i < items.length; i++)
{
    let listItem = items[i];
    listItem.innerHTML += "!!!";
}

let item = document.querySelector("li");
item.innerHTML = "The Bell Jar";
item.style.color = "green";

//how could I use my JS code to search through our list
//of book titles in our HTML and print the name of the
//book with the word "Earth" inside of it

for (let i = 0; i <= items.length - 1; i++)
{
    let listItem = items[i];
    let text = listItem.innerHTML;

    //does the listItem text have the word earth inside of it?
    if (text.includes("Earth"))
    {
        console.log("Found the word 'Earth' in the book title:", text);
        listItem.style.color = "blue";
    }
}