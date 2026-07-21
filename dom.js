// ================================
// Task 9.1 - Selecting Elements
// ================================

// getElementById
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice Questions
const h1 = document.querySelector("h1");
console.log("1. H1 Element:", h1);

const contentElements = document.querySelectorAll(".content");
console.log("2. Content Elements:", contentElements);

const form = document.getElementById("contact-form");
console.log("3. Contact Form:", form);

const emailInput = document.getElementById("email");
console.log("4. Email Input:", emailInput);

const navItems = document.querySelectorAll(".nav-list li");
console.log("5. Navigation Items:", navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log("6. First Navigation Link:", firstNavLink);

const lastParagraph = document.querySelector("article p:last-of-type");
console.log("7. Last Paragraph:", lastParagraph);


// ================================
// Task 9.2 - Traversing the DOM
// ================================

const nav = document.querySelector("nav");

console.log("Parent Element:");
console.log(nav.parentElement);

console.log("Children:");
console.log(nav.children);

console.log("First Child:");
console.log(nav.firstElementChild);

console.log("Last Child:");
console.log(nav.lastElementChild);

const article = document.querySelector("article");

console.log("Next Sibling:");
console.log(article.nextElementSibling);

console.log("Previous Sibling:");
console.log(article.previousElementSibling);

const navLinks = nav.querySelectorAll("a");

console.log("All Nav Links:");
console.log(navLinks);

// Practice Tasks

const headerNav = header.querySelector("nav");
console.log("1. Nav inside Header:");
console.log(headerNav);

const parentLi = firstNavLink.parentElement;
console.log("2. Parent LI:");
console.log(parentLi);

const nextSection = article.nextElementSibling;
console.log("3. Next Section:");
console.log(nextSection);

const navList = document.querySelector(".nav-list");
console.log("4. All LI Elements:");
console.log(navList.children);

const footer = document.querySelector("footer");
const body = footer.parentElement;
console.log("5. Body Element:");
console.log(body);


// ================================
// Task 9.3 - Modifying Content
// ================================

// Exercise 1 - Text Content

console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);

h1.textContent = "Welcome to DOM Manipulation";


// Exercise 2 - HTML Content

console.log(article.innerHTML);

article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Uncomment these lines only if you want to demonstrate textContent.
/*
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;
*/


// Exercise 3 - Attributes

const link = document.querySelector(".nav-link");

console.log("href attribute:", link.getAttribute("href"));
console.log("href property:", link.href);

link.setAttribute("href", "https://example.com");

console.log("Has target attribute:", link.hasAttribute("target"));

link.removeAttribute("target");


// Exercise 4 - Data Attributes

const element = document.querySelector("[data-id]");

console.log("Data ID:", element.dataset.id);
console.log("Category:", element.dataset.category);

element.dataset.newAttr = "value";


// Exercise 5 - Styles

const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    borderRadius: "10px"
});
