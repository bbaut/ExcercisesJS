const arrayElementsP = document.querySelectorAll('p');

arrayElementsP.forEach((element,index) => {
    if (index%2 == 0 ){
        element.addEventListener("click", () => {
            let visibility = window.getComputedStyle(element.nextElementSibling,null).getPropertyValue("visibility");
            if (visibility == "hidden"){
                element.nextElementSibling.style.visibility = "visible";
            }
            else {
                element.nextElementSibling.style.visibility = "hidden";
            }
        })
    }
})