window.addEventListener("load", () => {
  const form = document.querySelector("#form-submit");
  const input = document.querySelector(".input");
  const todoListContainer = document.querySelector(".todolist-container");

  //show item
  const show = () => {
    let toDoData = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    todoListContainer.innerHTML = ``;
    toDoData.map((d, index) => {
      const itemTodo = document.createElement("div");
      itemTodo.classList.add("item");
      itemTodo.innerHTML = `
        <span class = 'name-todo'>${d}</span>
        <button class = 'edit button'>Edit</button>
        <button class = 'delete button'>Delete</button>
       `;
      todoListContainer.appendChild(itemTodo);
    });

    //get all delete
    const allDeleteBtns = document.querySelectorAll(".delete");
    allDeleteBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        toDoData.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(toDoData));
        show();
      });
    });

    //edit button
    const allEditBtns = document.querySelectorAll(".edit");
    allEditBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        const newTodo = prompt("Enter new Todo");
        toDoData[index] = newTodo;
        localStorage.setItem("todo", JSON.stringify(toDoData));
        show();
      });
    });
  };

  show();

  //add item
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value;
    let toDoData = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    input.value = "";
    toDoData = [...toDoData, inputValue];
    localStorage.setItem("todo", JSON.stringify(toDoData));

    show();
  });
});

const buttonToggle = document.querySelector(".button-toggle");
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

buttonToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // if (document.body.classList.contains("dark-mode")) {
  //   darkBtn.style.display = "none";
  //   lightBtn.style.display = "block";
  // }
});

const menu = document.querySelector(".menu");
const options = document.querySelector(".options");

menu.addEventListener("click", () => {
  options.classList.add("options-active");
});