window.onload = () => {
    let button = document.querySelector("button");
    button.onclick = () => {
        //add a new image to the <div>
        let image = document.createElement("img");

        image.src = getRandomDiceFile();
        image.alt = "A 6-sided dice";
        image.className = "dice"; //this will pick up styles in the stylesheet

        //event handler to change dice when clicked
        image.onclick = () => image.src = getRandomDiceFile();

        let div = document.querySelector("#play-area");
        div.appendChild(image);
    };
};

function getRandomDiceFile()
{
    let sides = Math.floor(Math.random() * 6) + 1;
    return `images/${sides}.png`;
}
