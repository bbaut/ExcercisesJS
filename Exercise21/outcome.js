var foo = "hello";
(function (){
    var bar = "World";
    console.log(foo + bar);
})();

console.log(foo + bar);

/**an error because bar it is not define in the global scope
is a private variable **/

// ---------------------------------------

if ([]) console.log("array is true");

/** Here, this will console.log out "array is true" because [] is truthy.
All objects, in JavaScript are truthy.
Nevertheless the next statement: "[] == true" is not true.
**/

if ([] == true) console.log("array == true");

/** This is because the (==) operator is converting [] to a primitive, which is " "
then it compares a string and a boolean, which also are converted to numbers, 
and then both became 0, so [] == true is false. **/

// ---------------------------------------

for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log("counter: ", i)
    },100);
}

/** I think that JavaScript save the counter, and then, when the time of the 
setTimeout has passed it spit out the five console.logs
**/

// ---------------------------------------

var obj = {
    prop : {}
};

delete obj.prop;
console.log(obj.prop);

/**Here, the console.log will spit out an undefined because we have deleted the
property prop with the statement: delete obj.prop;
so when we console.log(obj.prop) there are not such property called prop 
**/