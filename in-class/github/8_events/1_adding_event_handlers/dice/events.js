let button = document.querySelector("button");
button.onclick = () => {
    //get a number in the range [1,6]
    let sides = Math.floor(Math.random() * 6) + 1;

    //get a file name - images/1.png, images/2.png, ... , images/6.png
    let file = `images/${sides}.png`;

    //add a new image to the <div>
    let image = document.createElement("img");

    image.src = file;
    image.alt = "A 6-sided dice";
    image.className = "dice"; //this will pick up styles in the stylesheet

    let div = document.querySelector("#play-area");
    div.appendChild(image);
};


