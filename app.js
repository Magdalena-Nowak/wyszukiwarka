const listItems = document.querySelectorAll("li");
const textInput = document.querySelector(".form-control");
const list = document.querySelector(".list-group-flush");
let allDrinks = [];
let allMatchingDrinks = [];

listItems.forEach(item => allDrinks.push(item.textContent));

const checkingSearchingMatch = () => {
    if (textInput.value) {
    const newListItems = document.querySelectorAll("li");
    newListItems.forEach(item => item.remove());
    allMatchingDrinks = [];
    const userSearch = textInput.value.toLowerCase();
allDrinks.forEach((item) => {
    const smallDrink = item.toLowerCase();
    if (smallDrink.match(userSearch)) {
        allMatchingDrinks.push(smallDrink);
    }
});
allMatchingDrinks.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.classList.add("list-group-item", "p-3");
    newItem.textContent = item;
    list.append(newItem);
})
} else {
    const newListItems = document.querySelectorAll("li");
    newListItems.forEach(item => item.remove());
    allMatchingDrinks = [];
    allDrinks.forEach((item) => {
        const newItem = document.createElement('li');
        newItem.classList.add("list-group-item", "p-3");
        newItem.textContent = item;
        list.append(newItem);
    })  
}
}



textInput.addEventListener("input", checkingSearchingMatch);
