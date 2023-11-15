//generate a random number from 1 to 10
/*let number = Math.random() * 10; //[0, 9)
number = Math.ceil(number); //[1, 10]

let source = `images/${number}.png`;
console.log(source);

//select our img element and update the src attribute
let img = document.querySelector("img");

//img.setAttribute("src", source); //<img> -> <img src="images/1.png">
img.src = source;

//img.setAttribute("title", "A cool image from WA state!"); //<img> -> <img title="A cool...">
img.title = "A cool image from WA state!";*/

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++)
{
    let number = Math.ceil(Math.random() * 10);

    images[i].src = `images/${number}.png`;

    //this will replace all class names
    //images[i].className = "highlight";

    //alternatively, we can add a class
    images[i].classList.add("highlight");
}

let ends = document.querySelectorAll(".book-ends");
for (let i = 0; i < ends.length; i++)
{
    ends[i].style.border = "5px solid orange";
}

