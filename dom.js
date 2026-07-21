// ================================
// Task 9.4 - Adding & Removing Elements
// ================================

// --------------------------------
// Exercise 1: Creating Elements
// --------------------------------

// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Insert before the first paragraph
const firstParagraph = article.querySelector("p");

if (firstParagraph) {
    article.insertBefore(newParagraph, firstParagraph);
}


// --------------------------------
// Exercise 2: Removing Elements
// --------------------------------

// Remove the footer
// footer.remove();

// Remove the last navigation item
const lastLink = nav.querySelector("li:last-child");

if (lastLink) {
    lastLink.parentElement.removeChild(lastLink);
}

// Clear all children from the article
/*
while (article.firstChild) {
    article.removeChild(article.firstChild);
}
*/


// --------------------------------
// Exercise 3: Cloning Elements
// --------------------------------

// Clone the first navigation item
const navItem = document.querySelector(".nav-link");

if (navItem) {

    const clone = navItem.parentElement.cloneNode(true);

    clone.querySelector("a").textContent = "New Link";

    navList.appendChild(clone);

}

// --------------------------------
// Build: Function to Add Navigation Items
// --------------------------------

function addNavItem(text, href) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);

    navList.appendChild(li);
}

// Test the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");
// ================================
// Task 10.1 - Event Listeners
// ================================

// --------------------------------
// Exercise 1: Basic Events
// --------------------------------

// Create a button
const button = document.createElement("button");
button.textContent = "Click Me";

// Add it to the page
document.body.appendChild(button);

// Anonymous function
button.addEventListener("click", function () {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove the named listener
button.removeEventListener("click", handleClick);


// --------------------------------
// Exercise 2: Event Types
// --------------------------------

function handler(event) {
    console.log("Event Type:", event.type);
}

// Mouse events
button.addEventListener("dblclick", handler);
button.addEventListener("mouseenter", handler);
button.addEventListener("mouseleave", handler);
button.addEventListener("mousemove", handler);

// Keyboard events
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactForm = document.getElementById("contact-form");

nameInput.addEventListener("keydown", handler);
nameInput.addEventListener("keyup", handler);

// Form events
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted!");
});

nameInput.addEventListener("focus", handler);
nameInput.addEventListener("blur", handler);
nameInput.addEventListener("input", handler);

emailInput.addEventListener("change", handler);

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);


// --------------------------------
// Build: Click Counter
// --------------------------------

// Counter value
let count = 0;

// Display
const counterDisplay = document.createElement("h2");
counterDisplay.textContent = `Count: ${count}`;
document.body.appendChild(counterDisplay);

// Increase button
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";
document.body.appendChild(increaseBtn);

// Decrease button
const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
document.body.appendChild(decreaseBtn);

// Reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// Increase
increaseBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
});

// Decrease (cannot go below 0)
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = `Count: ${count}`;
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`;
});

// ================================
// Task 10.2 - The Event Object
// ================================

// --------------------------------
// Exercise 1: Using Event Properties
// --------------------------------

// Mouse Events
document.addEventListener("click", function (event) {

    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);

});

// --------------------------------
// Keyboard Events
// --------------------------------

document.addEventListener("keydown", function (event) {

    console.log("Key:", event.key);

    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);

    console.log("Ctrl:", event.ctrlKey);

    console.log("Alt:", event.altKey);

});


// --------------------------------
// Build: Keyboard Shortcuts
// --------------------------------

document.addEventListener("keydown", function (event) {

    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {

        event.preventDefault();

        alert("Saved!");
    }

    // Escape - Clear the form
    if (event.key === "Escape") {

        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        console.log("Form Cleared");
    }

    // Ctrl + Enter - Submit the form
    if (event.ctrlKey && event.key === "Enter") {

        event.preventDefault();

        document.getElementById("contact-form").requestSubmit();

        console.log("Form Submitted Using Shortcut");
    }

});

// ================================
// Task 10.3 - Event Bubbling & Delegation
// ================================

// --------------------------------
// Exercise 1: Understanding Bubbling
// --------------------------------

// Select the elements
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Add click event listeners
grandparent.addEventListener("click", function () {
    console.log("Grandparent clicked");
});

parent.addEventListener("click", function () {
    console.log("Parent clicked");
});

child.addEventListener("click", function () {
    console.log("Child clicked");
});

// Clicking the Child will log:
// Child clicked
// Parent clicked
// Grandparent clicked


// --------------------------------
// Exercise 2: Event Delegation
// --------------------------------

// Select the navigation list

// Reuse navList from Task 9.2

// One listener for all navigation items
navList.addEventListener("click", function (event) {

    // Check if a navigation link was clicked
    if (event.target.classList.contains("nav-link")) {

        event.preventDefault();

        console.log("Navigation Link Clicked:", event.target.textContent);

    }

});


// --------------------------------
// Build: Delegated Task List
// --------------------------------

// Create a task list
const taskList = document.createElement("ul");

taskList.innerHTML = `
    <li class="task">
        Study JavaScript
        <button class="delete">Delete</button>
    </li>

    <li class="task">
        Practice DOM
        <button class="delete">Delete</button>
    </li>

    <li class="task">
        Complete Assignment
        <button class="delete">Delete</button>
    </li>
`;

// Add the task list to the page
document.body.appendChild(taskList);

// Use one event listener for the whole list
taskList.addEventListener("click", function (event) {

    // Delete a task
    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();
        return;

    }

    // Mark task as completed
    if (event.target.classList.contains("task")) {

        event.target.classList.toggle("completed");

    }

});

// ================================
// Task 10.4 - Form Handling
// ================================

// Select the form and its inputs

// Reusing variables declared in Task 10.1

// --------------------------------
// Validate Name
// --------------------------------

nameInput.addEventListener("input", function () {

    if (nameInput.value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters.");
    } else {
        clearError(nameInput);
    }

});

// --------------------------------
// Validate Email
// --------------------------------

emailInput.addEventListener("input", function () {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email.");
    } else {
        clearError(emailInput);
    }

});

// --------------------------------
// Handle Form Submission
// --------------------------------

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate Name
    if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters.");
        valid = false;
    } else {
        clearError(nameInput);
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showError(emailInput, "Please enter a valid email.");
        valid = false;
    } else {
        clearError(emailInput);
    }

    // If valid
    if (valid) {

    console.log("Form Submitted Successfully");
    console.log("Name:", name);
    console.log("Email:", email);

    alert("Form submitted successfully!");

    contactForm.reset();
    clearError(nameInput);
    clearError(emailInput);

}

});

// --------------------------------
// Display Error Message
// --------------------------------

function showError(input, message) {

    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {

        error = document.createElement("small");
        error.className = "error-message";

        input.insertAdjacentElement("afterend", error);
    }

    error.textContent = message;

}

// --------------------------------
// Remove Error Message
// --------------------------------

function clearError(input) {

    input.classList.remove("error");

    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {
        error.remove();
    }

}
