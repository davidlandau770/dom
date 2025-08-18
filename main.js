const h1 = document.querySelector("h1")
h1.innerText = "hello world";
const pDemo = document.createElement("P");
pDemo.innerText = "text";
document.body.appendChild(pDemo)


const ul = document.createElement("ul");
for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    document.body.appendChild(ul).style.backgroundColor = "red";
    li.innerText = "li"
}

const ol = document.getElementById("ol");
const li = document.getElementsByClassName("li");
for (const item of li) {
    item.innerText = "abc";
}

const pGreen = document.getElementById("green");
pGreen.classList.add("bgGreen");

function abc() {
    const button = document.querySelector("button");
    console.log(button);
}

h1.addEventListener("click", () => {
    const header = document.querySelector("h1")
    console.log(header);
})

const a = () => {
    console.log("hi");
}
const b = () => {
    const header = document.createElement("h1");
    document.body.appendChild(header).innerText = "new h1";
}
const c = () => {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c");
    a.classList.toggle("d")
    b.classList.toggle("d")
    c.classList.toggle("d")
}

const headerInput = document.getElementById("h1");
const input = document.getElementById("input");


headerInput.addEventListener("click", () => {
    console.log(headerInput.textContent);
})
input.addEventListener("input", (event) => {
    headerInput.innerText = event.target.value;
})

const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    // const mode = () => {
    const table = document.querySelector("table");
    table.classList.toggle("mode")
    event.preventDefault();
})
// }

let rand = Math.floor(Math.random() * 100 + 1);
const div = document.getElementById("guessing");
const grade = document.createElement("p");
div.appendChild(grade);
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

const guessing = () => {
    const inputNumber = document.getElementById("inputNumber").value;
    console.log(rand, inputNumber);

    if (inputNumber == rand) {
        grade.innerText = "You successfully hit the number!!";
        div.style.backgroundColor = "#94f787";
        resetButton.classList.remove("hidden");
        submitButton.classList.add("hidden");
    }
    else if (inputNumber < rand) {
        grade.innerText = "The number is too low.\nTry again!";
        div.style.backgroundColor = "#fd9393";
    }
    else if (inputNumber > rand) {
        grade.innerText = "The number is too high.\nTry again!";
        div.style.backgroundColor = "#fd9393";
    }
}
const reset = () => {
    const inputNumber = document.getElementById("inputNumber").value = "";
    rand = Math.floor(Math.random() * 100 + 1);
    div.style.backgroundColor = "#fff"
    resetButton.classList.add("hidden");
    submitButton.classList.remove("hidden");
}