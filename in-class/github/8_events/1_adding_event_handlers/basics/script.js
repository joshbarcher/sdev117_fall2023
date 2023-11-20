//select the image
let img = document.querySelector("img");

//add various event handlers
img.onclick = () => print("Image clicked");
img.ondblclick = () => print("Image double clicked");
img.onmouseenter = () => print("Mouse entered image");
img.onmouseleave = () => print("Mouse left image");
img.onmouseup = () => print("Mouse up on image");
img.onmousedown = () => print("Mouse down on image");

function print(message)
{
    let textarea = document.querySelector("textarea");
    textarea.innerHTML = `${message}\n` + textarea.innerHTML;
}