const btnElement = document.querySelector(".btn");
const inputElement = document.querySelector("#input-field");
const taskElement = document.querySelector(".list-item");

btnElement.addEventListener('click', addTask);

function addTask() {
  if (inputElement.value === "") {
    alert("Please add your task first");
  } else {
    let listItem = document.createElement("li");
    listItem.innerText = inputElement.value;

    // Create and append the edit button
    let editBtn = document.createElement("span");
    editBtn.innerText = "✎";
    editBtn.classList.add("edit-btn");
    listItem.appendChild(editBtn);

    // Create and append the delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "\u00d7";
    listItem.appendChild(deleteBtn);

    taskElement.appendChild(listItem);
    inputElement.value = '';   
    saveListElement();
  }
}

taskElement.addEventListener('click', handleTaskClick);

function handleTaskClick(event) {
  if (event.target.classList.contains('edit-btn')) {
    editTask(event.target.parentElement);
  } else if (event.target.tagName === "SPAN" && event.target.innerText === "\u00d7") {
    event.target.parentElement.remove();
    saveListElement();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveListElement();
  }
}

function editTask(listItem) {
  const newTask = prompt("Edit your task:", listItem.firstChild.textContent);
  if (newTask) {
    listItem.firstChild.textContent = newTask;
    saveListElement();
  }
}

// Store and retrieve the list in localStorage
function saveListElement() {
  localStorage.setItem('task', taskElement.innerHTML);
}

function getListElement() {
  taskElement.innerHTML = localStorage.getItem('task');
}

// Load tasks from localStorage on page load
getListElement();
