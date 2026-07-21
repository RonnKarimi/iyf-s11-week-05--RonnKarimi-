const source = document.getElementById("source");
const target = document.getElementById("target");
const button = document.getElementById("copy");

button.addEventListener("click", () => {

    target.innerHTML = source.innerHTML;

});
