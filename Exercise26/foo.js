function foo1(){
    var fn = function(){
        console.log(this.foo);
    }
    return { foo: 'bar'}
}

function foo2(){
    var fn = function(){
        console.log(this.foo);
    }
    return { foo: 'baz'}
}

console.log(foo1());
console.log(foo2());

/* We are defining two functions foo1 and foo2. We are returning
an object with a property called foo and an specific value associated to this
property.
Within these functions foo1 and foo2 we define a function, respectively,
but we are not calling it within both foo1 and foo2. 
*/