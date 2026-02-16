const buttons = document.querySelectorAll(".color-btn");

// check for buttons array if empty
if (buttons.length === 0) {
  console.error("No buttons found");
}

// changeColor function that uses this-keyword to change the background color to 'yellow'
function changeColor() {
  this.style.backgroundColor = "yellow";
}

// using forEach to loop through buttons to attach changeColor as click handler
buttons.forEach((button) => {
  button.addEventListener("click", changeColor);
});
