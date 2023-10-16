//this will hold all characters
let characters = "";

for (let i = 1; i <= 15000; i++)
{
    let newChar = `&#${i}; `;
    console.log(newChar);

    //characters = characters + newChar;
    characters += newChar;
}

//select our content area and update the text
let contentPara = document.querySelector("#content");
contentPara.innerHTML = characters;