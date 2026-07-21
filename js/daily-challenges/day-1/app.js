const button = document.getElementById("change-color");

button.addEventListener("click", () => {

    const headings = document.querySelectorAll("h1, h2, h3");

    headings.forEach(heading => {

        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);

        heading.style.color = randomColor;

    });

});
