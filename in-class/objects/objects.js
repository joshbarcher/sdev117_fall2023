
//create an object to represent our class
let javascriptClass = {
    title: "Front-end Web Dev.",
    id: "sdev 117",
    credits: 5,
    zoom: true,
    days: ["M", "W", "F"],
    instructor: {
        first: "Josh",
        last: "Archer",
        middle: "B",
        nickname: "teach",
        title: "Mr"
    },
    messageOfDay: function(message) {
        console.log("Message of the day");
        console.log("******************");
        console.log(message);
    },
    numMeetings: getNumberMeetings //reference the function below by name
};

function getNumberMeetings() {
    console.log("Meets", this.days.length, "days per week");
}

console.log(javascriptClass);

//print out the instructor nickname
console.log("Josh's nickname is", javascriptClass.instructor.nickname);

javascriptClass.messageOfDay("Welcome to class");
javascriptClass.messageOfDay("Don't forget to bring a notepad");
javascriptClass.numMeetings();

let javaClass = {
    title: "Java Foundations",
    id: "sdev 218",
    credits: 5,
    meetsOverZoom: true,
    days: ["M", "T", "W", "Th", "F"],
    numMeetings: getNumberMeetings
}

console.log(`Title: ${javaClass.title}`)
console.log(javaClass.credits);

javaClass.numMeetings();

//print out a message depending on whether the class is over zoom or not
if (javaClass.meetsOverZoom)
{
    console.log("Turn your camera on!");
}
else
{
    console.log("Get to class early! Parking gets full quickly!");
}

for (let i = 0; i < javaClass.days.length; i++)
{
    console.log("Meets on:", javaClass.days[i]);
}

//print out my favorite book
let favorite = {
    title: "The Eye of the World",
    author: "Robert Jordan",
    pages: 800,
    synopsis: "The search for the dragon reborn begins...",
    format: "hardcover",
    genres: ["fantasy", "horror", "adventure"]
}

console.log(favorite.title, "by", favorite.author);
console.log("**************************************")
console.log(`Pages: ${favorite.pages}`);
console.log(`Format: ${favorite.format}`);
console.log(`Genres: ${favorite.genres.length}`);
console.log("**************************************")
