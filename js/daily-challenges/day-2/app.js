const addBtn = document.getElementById("add");
const container = document.getElementById("container");

let count = 1;

addBtn.addEventListener("click", () => {

    const p = document.createElement("p");

    p.textContent = `Paragraph ${count}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        p.remove();
    });

    p.appendChild(deleteBtn);

    container.appendChild(p);

    count++;

});
