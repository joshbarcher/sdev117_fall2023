
console.log("Records: ", records);

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;
    console.log("previous button pressed");

    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;
    console.log("next button pressed");

    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    console.log("Next index is " + index);

    let record = records[index];
    console.log(record);

    //print out an interesting property of my dataset
    console.log(record.County);
    console.log(record["Housing Data"]["Residing in Group Quarters"])
}

//print out the counties in alabama that are in the data set
for (let i = 0; i < records.length; i++)
{
    let record = records[i];

    let state = "Washington";
    if (record.State === state)
    {
        console.log(record.County, "is in", state);
    }
}
