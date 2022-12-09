function myLog(){
    return {
        bar: 'bar',
        foo: 'foo',
        prop: function (){
            var self = this;
            console.log(self.bar);
            console.log(this.foo);
            (function(){
                console.log(self.bar);
                console.log(this.foo);
            })();
        }
    }
}

var obj = myLog();
obj.prop();

/*
 On line 6 we are defining the variable self as the object itself. So, when we console.log self.bar on line 7
 we are logging the value of the property bar "bar", the same happens on line 8 with "foo". 
 Then on line 9 we are creating an IIFE, the self varible was created in the outter scope of the IIFE so, it 
 passes through the IIFE fine and logs "bar", but, on line 11, we are using this keyword, but the IIFE is invoked
 on the window object, so it will console.log "undefined". There, on the window is not the property "foo"  
*/