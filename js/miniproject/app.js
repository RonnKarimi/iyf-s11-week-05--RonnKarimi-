// ================================
// Interactive To-Do List App
// ================================

// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Create Todo Element
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.dataset.id = todo.id;

    li.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">Delete</button>
    `;

    return li;
}

// Render Todos
function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

// Add Todo
function addTodo(text) {

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    renderTodos();
}

// Toggle Todo
function toggleTodo(id) {

    todos = todos.map(todo => {

        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }

        return todo;
    });

    renderTodos();
}

// Delete Todo
function deleteTodo(id) {

    todos = todos.filter(todo => todo.id !== id);

    renderTodos();
}

// Update Statistics
function updateStats() {

    const remaining = todos.filter(todo => !todo.completed).length;

    itemsLeft.textContent =
        `${remaining} item${remaining !== 1 ? "s" : ""} left`;
}

// Filter Todos
function filterTodos(filter) {

    currentFilter = filter;

    filters.forEach(button => {
        button.classList.remove("active");
    });

    document
        .querySelector(`[data-filter="${filter}"]`)
        .classList.add("active");

    renderTodos();
}

// ================================
// Event Listeners
// ================================

// Add Todo
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    addTodo(text);

    input.value = "";
    input.focus();
});

// Event Delegation
todoList.addEventListener("click", function (event) {

    const li = event.target.closest("li");

    if (!li) return;

    const id = Number(li.dataset.id);

    // Delete Button
    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
        return;
    }

    // Toggle Complete
    toggleTodo(id);
});

// Filter Buttons
filters.forEach(button => {

    button.addEventListener("click", function () {

        filterTodos(button.dataset.filter);

    });

});

// Clear Completed
clearCompletedBtn.addEventListener("click", function () {

    todos = todos.filter(todo => !todo.completed);

    renderTodos();

});

// Initialize
renderTodos();
