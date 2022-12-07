const div = document.getElementsByTagName("div");
const link = document.getElementById("id1");

link.addEventListener("click", () => {
    div[0].style.visibility = "visible"
})