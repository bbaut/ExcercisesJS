function removeElement (array, indexElementToRemove){
    let arrayFromToRemove = array;
    let indexElement = indexElementToRemove;
    if (indexElement < arrayFromToRemove.length){
        arrayFromToRemove.splice(indexElement,1);
    }
    else {
        throw new Error ("The element you selected does not exist.")
    }
    return arrayFromToRemove
}

let arrayFrom = [1,3,5,6,3];

console.log(removeElement(arrayFrom,2))