function func1(){ return {prop:"foo"}; }
function func2(){ return {prop:"foo"}; }

/* No, the value will not be the same because they are different objects. Of course, they have the same
properties called prop, and the same values associated to their property, but, strictly they are not
the same object, in other words, they are two different instances.  */