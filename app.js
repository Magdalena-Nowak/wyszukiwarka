const listItems = document.querySelectorAll("li");
const textInput = document.querySelector(".form-control");
const regex = /[a-z]/g;

console.log(textInput.value);

const checkingDrinks = () => {
  let search = textInput.value.toLowerCase();
  let matchItem;
};

textInput.addEventListener("input", checkingDrinks);
