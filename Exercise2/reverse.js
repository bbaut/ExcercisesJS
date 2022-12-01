String.prototype.reverse = function(){
    let stringReverse = "";
    for (let i = 0; i < this.length; i++){
        stringReverse = stringReverse + this[this.length-i-1];
    }
    return stringReverse;
}

String.prototype.reverseWords = function(){
    let stringReverse = "";
    let arrayWords = this.split(" ");
    arrayWords.forEach(element => {
        for (let i = 0; i < element.length; i++){
            stringReverse = stringReverse + element[element.length-i-1];
        }
        stringReverse = stringReverse + " ";
    });
    return stringReverse;
}

console.log("hello world".reverse());

console.log("hello world".reverseWords());