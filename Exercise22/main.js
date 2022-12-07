const button = document.getElementById("button");
const divColor = document.getElementById("element");

button.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    divColor.style.backgroundColor = "#" + randomColor;    
})