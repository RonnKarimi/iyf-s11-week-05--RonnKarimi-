const button = document.getElementById("toggle");

button.addEventListener("click", () => {

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        if (image.style.display === "none") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });

});
