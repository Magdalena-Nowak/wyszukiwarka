const listItems = document.querySelectorAll("li");
const textInput = document.querySelector(".form-control");
const list = document.querySelector(".list-group-flush");
let allDrinks = [];
let allMatchingDrinks = [];

listItems.forEach(item => {
    const itemText = item.textContent;
    allDrinks.push(itemText.toLowerCase());
});

const removingItems = () => {
    const newListItems = document.querySelectorAll("li");
    newListItems.forEach(item => item.remove());
    allMatchingDrinks = [];
}

const addingNewList = (actualArray) => {
    actualArray.forEach((item) => {
        const newItem = document.createElement('li');
        newItem.classList.add("list-group-item", "p-3");
        const upperItem = item[0].toUpperCase();
        const cutItem = item.slice(1);
         newItem.textContent = upperItem + cutItem;
        list.append(newItem);
    })
}

const checkingSearchingMatch = () => {
    if (textInput.value) {
removingItems();
    const userSearch = textInput.value.toLowerCase();
allDrinks.forEach((item) => {
    if (item.match(userSearch)) {
        allMatchingDrinks.push(item);
    }
});
addingNewList(allMatchingDrinks);
} else {
removingItems();
addingNewList(allDrinks); 
}
}



textInput.addEventListener("input", checkingSearchingMatch);
