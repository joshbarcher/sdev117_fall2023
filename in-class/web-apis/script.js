//wait until page loads
window.onload = () => {
    //add a click event handler to our button
    let button = document.querySelector("button");
    button.onclick = loadRandomCat;
};

function loadRandomCat()
{
    //configure a request
    let url = "https://api.thecatapi.com/v1/images/search";
    let config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581"
        }
    };

    //make a request using fetch!
    fetch(url, config)
        .then(function(response) {
            console.log(response);

            //this converts the body of JSON text to a JS object
            //and returns a new promise
            return response.json();
        }).then(function(data) {
            console.log(data);

            //we got back an array with a single element
            //access that element at index zero
            displayImage(data[0]);
        });

    //we can also use the async/await keywords
    //let response = await fetch(url, config);
    //let data = await promise.json();


}

function displayImage(catData)
{
    let imageUrl = catData.url;

    //select the element and update the src property
    let img = document.querySelector("img");
    img.src = imageUrl;
}