const swatches = document.querySelectorAll(".swatch");

// check for swatches array if empty
if (swatches.length === 0) {
  console.error("No swatches found");
}

// this.dataset.color function that reads this.dataset.color and applies this.style.backgroundColor to this swatch using clicked button's data-color attribute
function changeColor() {
  this.style.backgroundColor = this.dataset.color;
}

// add event listener to each swatch
swatches.forEach((swatch) => {
  swatch.addEventListener("click", changeColor);
});
