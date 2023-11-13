//apply some styles to all questions/answers
let heading = document.querySelector("h1");
heading.style.color = "darkred";
heading.style.textDecoration = "underline";

let paras = document.querySelectorAll("p");

for (let i = 0; i < paras.length; i++)
{
    paras[i].style.backgroundColor = "beige";
    paras[i].style.padding = "10px";
    paras[i].style.margin = "10px";
    paras[i].style.border = "1px solid black";
}

let questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++)
{
    questions[i].style.color = "darkblue";
}

let answers = document.querySelectorAll(".answer");

for (let i = 0; i < answers.length; i++)
{
    answers[i].style.display = "block";
    answers[i].style.color = "forestgreen";
}

