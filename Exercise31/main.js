const arrayElementsP = document.querySelectorAll('p');

arrayElementsP.forEach((element,index) => {
    if (index%2 == 0 ){
        element.setAttribute('class',`${index}`);
        element.addEventListener("click", () => {
            element.nextElementSibling.style.visibility = "visible";
            let elementId = element.className;
            arrayElementsP.forEach((element,index) => {
                if (index != elementId && index%2 == 0){
                    element.nextElementSibling.style.visibility = "hidden";
                }
            })
        })
    }
})

// elementShowed = event => {
//     console.log(event.target.id);
// }

// let visibility = window.getComputedStyle(element.nextElementSibling,null).getPropertyValue("visibility");
//             if (visibility == "hidden"){
//                 element.nextElementSibling.style.visibility = "visible";
//             }
//             else {
//                 element.nextElementSibling.style.visibility = "hidden";
//             }