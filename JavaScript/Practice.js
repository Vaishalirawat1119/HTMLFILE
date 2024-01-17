//Create a button
let newButton = document.createElement("button");
newButton.innerText = "Click me"; // Give text "Click me" to that button

newButton.style.backgroundColor = "red"; //style background color to the button
newButton.style.color = "white"; //style the text color to the button text

//Now inserting the button as the first element inside the body tag.
let body = document.querySelector("body"); //first we have to access the body tag.
body.prepend(newButton); //then insert at the start.