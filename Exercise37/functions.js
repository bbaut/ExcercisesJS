String.prototype.exclamation = function(){
    let naturalString = this;
    let exclamationString = `${naturalString}!`;
    return exclamationString;
}

console.log("hello".exclamation())
console.log("hello world".exclamation())

// ---------------------------------

function add(...args) {
    let sum = 0;
    let iterator = args.values()
    for (let value of iterator){
        sum = sum + value;
    }
    return sum;
}

console.log(add(2,5));
console.log(add(7,11));
console.log(add(12, 8, 5, 6));