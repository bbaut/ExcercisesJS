Array.prototype.duplicate = function (){
    let array = this;
    arrayDuplicated = array.concat(array);
    return arrayDuplicated;
}

console.log([1,2,3,4].duplicate())