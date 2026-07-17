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
