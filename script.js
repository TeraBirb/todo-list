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
const underwater = document.querySelector(".underwater");
const yellow = document.querySelector(".yellow");
const gulf = document.querySelector(".gulf");
let currentTheme = "underwater";

function deleteNote(e) {
  e.target.parentNode.parentNode.style.display = "none";
}

function themeCheck() {
  const bodyBg = document.querySelector("body");
  const bodyFontColor = document.querySelector("body");
  const todoBg = document.querySelectorAll(".todo");
  const addItemBorder = document.querySelector(".add-item");
  const popupBg = document.querySelector(".popup");

  if (currentTheme === "underwater") {
    bodyBg.style.background = "#0a9393";
    bodyFontColor.style.color = "#fcfcfc";
    if (todoBg !== null) {
      todoBg.forEach(item => {
        item.style.backgroundColor = "#217a7a";
      });
    }
    popupBg.style.background = "rgba(33, 122, 122, 0.7)";
    addItemBorder.style.borderColor = "#fcfcfc";
  }

  if (currentTheme === "yellow") {
    bodyBg.style.background = "#2b2b2b";
    bodyFontColor.style.color = "#ffe922";
    if (todoBg !== null) {
      todoBg.forEach(item => {
        item.style.backgroundColor = "#0e0e0e";
      });
    }
    popupBg.style.background = "rgba(28, 28, 28, 0.7)";
    addItemBorder.style.borderColor = "#ffe922";
  }

  if (currentTheme === "gulf") {
    bodyBg.style.background = "#60c6eb";
    bodyFontColor.style.color = "#121212";
    if (todoBg !== null) {
      todoBg.forEach(item => {
        item.style.backgroundColor = "#f38f20";
      });
    }
    popupBg.style.background = "rgba(204, 120, 27, 0.9)";
    addItemBorder.style.borderColor = "#121212";
  }
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

    themeCheck();

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

underwater.addEventListener("click", () => {
  currentTheme = "underwater";
  themeCheck();
});

yellow.addEventListener("click", () => {
  currentTheme = "yellow";
  themeCheck();
});

gulf.addEventListener("click", () => {
  currentTheme = "gulf";
  themeCheck();
});
