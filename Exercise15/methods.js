var foo = (function(){
    'use strict';

    let publicMethods = {};

    publicMethods.bar = function (){
        return "Hello, I'm a public method";
    }

    publicMethods.test = function (){
        return "This is a test of the public method";
    }

    let privateMethod = function(){
        return "Hello, if you call me outside the function I will send you an error"
    }

    return publicMethods;

})();

console.log(foo.bar());
console.log(foo.test());
