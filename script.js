// select all elements

const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// submit form and add new element

form.addEventListener("submit", e => {
  e.preventDefault();

  // create new item

  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  // add item to the list

  list.appendChild(item);

  // clear input

  input.value = "";

  // delete item when clicked

  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
