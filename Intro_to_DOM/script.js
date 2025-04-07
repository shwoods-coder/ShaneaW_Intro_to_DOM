let titleElement = document.getElementById("title");

let practiceElement = document.getElementById("practice");

console.log(titleElement);
console.log (practiceElement);

const heading= document.querySelector("#mainHeading");
const paragraph = document.querySelectorAll ("p");
const button = document.querySelector ("button");

button.addEventListener("click", function() {
    heading.innerHTML = "No, Friend!";
    paragraph.innerText = "We said don't push.";
    button.innerHTML = "Failed!";
});


console.log(heading);
console.log(paragraph);
console.log(button);


