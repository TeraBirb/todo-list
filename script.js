const popupBtn = document.querySelector(".add-item");
const popupDiv = document.querySelector(".popup");
const popupClose = document.querySelector(".popup h4");
const popupTitle = document.querySelector(".popup input");
const popupTextarea = document.querySelector(".popup textarea");
const popupAdd = document.querySelector(".popup button");
const todoContainer = document.querySelector(".todo-container");
const alert = document.querySelector(".alert");
const themeBtn = document.querySelector(".theme-btn");
const themes = document.querySelector(".themes");

function deleteNote(e) {
  e.target.parentNode.parentNode.style.display = "none";
}

popupBtn.addEventListener("click", () => {
  popupDiv.classList = "popup";
});

popupClose.addEventListener("click", () => {
  popupDiv.classList = "popup hidden";
});

popupAdd.addEventListener("click", e => {
  if (popupTitle.value === "" && popupTextarea.value === "") {
    popupTitle.placeholder = "Try typing something here";
    popupTextarea.placeholder = "...or here";
  } else {
    let todo = document.createElement("div");
    let todoHeader = document.createElement("div");
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    let p = document.createElement("p");

    todo.classList = "todo";
    todoHeader.classList = "todo-header";
    h2.classList = "todo-title";
    p.classList = "todo-body";

    h2.innerHTML = popupTitle.value;
    span.textContent = "x";
    span.addEventListener("click", deleteNote);

    todoHeader.appendChild(h2);
    todoHeader.appendChild(span);
    p.append(popupTextarea.value);

    todo.appendChild(todoHeader);
    todo.appendChild(p);

    todoContainer.appendChild(todo);

    console.log(todo);

    e.target.parentNode.classList = "popup hidden";
    popupTitle.value = "";
    popupTextarea.value = "";
    popupTitle.placeholder = "Title";
    popupTextarea.placeholder = "Add a note";

    alert.classList = "alert";
    setTimeout(function() {
      alert.classList = "alert hidden";
    }, 1900);
  }
});

themeBtn.addEventListener("mouseover", () => {
  themes.classList = "themes";
  themeBtn.classList = "theme-btn hidden";
});

themes.addEventListener("mouseleave", e => {
  themes.classList = "themes hidden";
  themeBtn.classList = "theme-btn";
});
