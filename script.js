const popupBtn = document.querySelector(".add-item");
const popupDiv = document.querySelector(".popup");
const popupClose = document.querySelector(".popup h4");
const popupTitle = document.querySelector(".popup input");
const popupTextarea = document.querySelector(".popup textarea");
const popupAdd = document.querySelector(".popup button");
const todoContainer = document.querySelector(".todo-container");

popupBtn.addEventListener("click", () => {
  popupDiv.classList = "popup";
});

popupClose.addEventListener("click", () => {
  popupDiv.classList = "popup hidden";
});

popupAdd.addEventListener("click", () => {
  let todo = document.createElement("div");
  todo.classList = "todo";
  let todoHeader = document.createElement("div");
  todoHeader.classList = "todo-header";
  let todoTitle = document.createElement("h2");
  todoTitle.innerHTML = popupTitle.value;
  let xSpan = document.createElement("span");
  xSpan.innerHTML = "x";

  todoContainer.appendChild(todo);
  todo.appendChild(todoHeader, xSpan);
});
