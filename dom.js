// ================================
// Task 9.1 - Selecting Elements
// ================================

// getElementById - returns a single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns an HTMLCollection
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns an HTMLCollection
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns the first matching element
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns a NodeList
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// ====================================
// Practice Questions
// ====================================

// 1. Select the h1 element
const h1 = document.querySelector("h1");
console.log("1. H1 Element:", h1);

// 2. Select all elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("2. Content Elements:", contentElements);

// 3. Select the form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("3. Contact Form:", form);

// 4. Select the email input
const emailInput = document.getElementById("email");
console.log("4. Email Input:", emailInput);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll(".nav-list li");
console.log("5. Navigation Items:", navItems);

// 6. Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First Navigation Link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("article p:last-of-type");
console.log("7. Last Paragraph:", lastParagraph);

// ================================
// Task 9.2 - Traversing the DOM
// ================================

// Select the nav element
const nav = document.querySelector("nav");

// Parent Element
console.log("Parent Element:");
console.log(nav.parentElement); // header

// Children
console.log("Children:");
console.log(nav.children);

console.log("First Child:");
console.log(nav.firstElementChild); // ul

console.log("Last Child:");
console.log(nav.lastElementChild); // ul


// ================================
// Siblings
// ================================

const article = document.querySelector("article");

console.log("Next Sibling:");
console.log(article.nextElementSibling); // section

console.log("Previous Sibling:");
console.log(article.previousElementSibling); // null


// ================================
// Descendants
// ================================

const navLinks = nav.querySelectorAll("a");

console.log("All Nav Links:");
console.log(navLinks);


// ====================================
// Practice Tasks
// ====================================

// 1. Select the header, then navigate to the nav inside it
const header = document.getElementById("main-header");
const headerNav = header.querySelector("nav");

console.log("1. Nav inside Header:");
console.log(headerNav);


// 2. Select the first nav-link, then get its parent li
const firstNavLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement;

console.log("2. Parent LI:");
console.log(parentLi);


// 3. Select the article, then get its next sibling (section)
const nextSection = article.nextElementSibling;

console.log("3. Next Section:");
console.log(nextSection);


// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");

console.log("4. All LI Elements:");
console.log(navList.children);


// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;

console.log("5. Body Element:");
console.log(body);
