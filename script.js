// Create a boolean variable to track current mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
   lets us SELECT an HTML ELEMENT and store 
   a reference to it in a VARIABLE
*/

// select by tag type
const body = document.querySelector("body");
// heading is a VARIABLE that points to the h1 ELEMENT with an id="main-heading" --> just like CSS selection!
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");

// JS can now change attributes & properties
heading.textContent = "Light/Dark Mode Website"; // JS wrote HTML code!
heading.style.color = "blue";
body.style.background = "lavender";

// Define what happens when button is clicked
function toggleMode() {
    // 1. Flip the value of darkMode (boolean variable)
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. Conditionally apply styles based on the mode
    if (darkMode == true) {
        console.log("apply dark mode");
        body.style.background = "black";
        heading.style.color = "lightgrey";
        description.style.color = "white";
        heading.style.background = "black";
        toggleBtn.style.background = "darkgrey";
        description.textContent = "Welcome to the Dark Side";
        toggleBtn.textContent = "Switch to Light";
        image.src = "Darth_vader_by_br3ndan5_dcvp5rb.webp";
    }
    else {
        console.log("apply light mode");
        body.style.background = "white";
        heading.style.color = "black";
        description.style.color = "black";
        heading.style.background = "white";
        toggleBtn.style.background = "lightgrey";
        description.textContent = "Welcome to the Light Side";
        toggleBtn.textContent = "Switch to Dark";
        image.src = "Anakin_Skywalker_RotS.webp";
    }
}

// Attach function to the button
toggleBtn.addEventListener("click", toggleMode);



// REVIEW
// 1. Select an HTML element for JS to target
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to trigger a function
hackerBtn.addEventListener("click", setHackerMode);
// 3. Define what happens when event triggers function
function setHackerMode() {
    body.style.background = "black";
    heading.style.fontFamily = "monospace";
    heading.textContent  = "Error code 264";
    description.style.color = "rgb(0, 255, 94)";
    description.textContent = "YOU HAVE BEEN HACKED ):";
    image.src = "warningsign.webp";
}

const sunsetBtn = document.querySelector("#sunset");
sunsetBtn.addEventListener("click", setSunsetMode);
function setSunsetMode() {
    body.style.background = "linear-gradient(gold, lavender)";
    heading.textContent = "Welcome to the view";
    heading.style.color = "rgb(38, 62, 183)";
    heading.style.fontFamily = "sunset heaven";
    description.style.color = "rgb(38, 62, 183)";
    description.textContent = "You have now been blessed with an amazing view!";
    image.src = "sunset.webp";    
}








