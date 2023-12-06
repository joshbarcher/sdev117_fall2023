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

    pages = parseInt(pages);

    //custom validation
    let errors = 0;

    if (validateStringField(title, "title-error", 100)) errors++;
    if (validateStringField(author, "author-error", 30)) errors++;

    // (make sure it's a number and in the range [0,2500]
    if (Number.isNaN(pages) || pages < 0 || pages > 2500)
    {
        //bad value (show the error next to the pages box)
        document.querySelector("#pages-error").style.display = "inline";
        errors++;
    }
    else
    {
        //good value
        document.querySelector("#pages-error").style.display = "none";
    }

    //after our validation, we need to submit the form
    //if everything is all right...
    if (errors === 0)
    {
        //programmatically submit the form
        document.forms["book-entry"].submit();
    }
}

function validateStringField(stringValue, errorSpanId, maxCharacters)
{
    if (stringValue.length === 0 || stringValue.length > maxCharacters)
    {
        //bad value
        document.querySelector(`#${errorSpanId}`).style.display = "inline";
        return true; //yes there was an error
    }
    else
    {
        //good value
        document.querySelector(`#${errorSpanId}`).style.display = "none";
        return false; //no there was not an error
    }
}