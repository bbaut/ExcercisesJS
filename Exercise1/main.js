const element = document.getElementById("elementanim");
const buttonstart = document.getElementById("clickbtnstart");
const buttonstop = document.getElementById("clickbtnstop");
const buttonrestart = document.getElementById("clickbtnrestart");

let id = null;
let position = 0;

buttonstart.addEventListener("click", () => {
    id = setInterval(()=>{
        position ++;
        element.style.left = position + "px"
    },10)
})

buttonstop.addEventListener("click", () => {
        clearInterval(id);
})

buttonrestart.addEventListener("click", () => {
    position = 0;
    element.style.left = position + "px"
})