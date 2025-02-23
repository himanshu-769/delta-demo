//namaste
let genBtn = document.querySelector("button");

genBtn.addEventListener("click", () => {
    generate();
});

function generate() {
    let random = Math.floor(Math.random() * 100) + 1;
    let h1 = document.querySelector("#show")
    h1.innerText = random;
}



