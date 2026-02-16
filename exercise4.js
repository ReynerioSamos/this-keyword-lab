const box = document.querySelector(".box");

box.addEventListener("click", (event) => {
  // BUG: this.classList.add('active') throws an error
  //
  // -- Reasonining --
  // 'this' is referencing the global object (window) and not the intended object (box)
  // as arrow functions do not have their own bindings for 'this' and usually aren't used for methods within objects or constructors.
  // This is known as being Lexically Bound/Scoped to the surrounding context
  //
  // -- Solution --
  // Use the event.target with the arrow function parameter (event) to reference the clicked element
  // This works because the arrow function captures the 'this' context from the addEventListener as (event) is passed, as when the
  // click event is triggered, the JS Engine creates an event object and passes it to the arrow function as the first argument.
  event.target.classList.add("active");
});
