//wait for the page to load
window.onload = () => {
    //set an event handler to intercept the form being submitted
    let button = document.querySelector("button");
    button.onclick = validateForm;
};

function validateForm(event)
{
    //stop the regular behavior (sending data to the server
    //and a page reload)
    event.preventDefault();

    //select my form elements
    let ratingSelect = document.querySelector("#rating");
    let titleBox = document.querySelector("#book-title");
    let authorBox = document.querySelector("#book-author");
    let pagesBox = document.querySelector("#pages");
    let releasedOnBox = document.querySelector("#released-on");
    let isbnBox = document.querySelector("#isbn");

    //get the user inputs
    let rating = ratingSelect.value;
    let title = titleBox.value;
    let author = authorBox.value;
    let pages = pagesBox.value;
    let release = releasedOnBox.value;
    let isbn = isbnBox.value;

    //print out a test to the console
    console.log("User rating is", rating);
    console.log(title, author, pages, release, isbn);

    //after our validation, we need to submit the form
    //if everything is all right...

}