console.log([]+[]);
/* When we apply the binary operator, [] is converted to an empty string
This is analogous to concatenate "" + "", it will give us "".
*/

console.log({}+[]);
/* Here, when we apply the binary operator, the {} is converted to a string and the [] 
is converted to an empty string also, and the concatenation gives "[object Object]".
The [object Object] is the string representation of a JavaScript object data type.
*/

console.log([]+{});
/* Here is happening the same thing as in te example above. The only difference is the 
place of the [] and the {} but, it does not matter because if we concatenate a string with
an empty string, it will return always the string concatenated no matter who is in the first
operand. 
*/

console.log({}+{});
/* Here, as in the previous examples, the binary operator acting on {} it is converted to a string
giving [object Object], so if we concatenate two objects, both will be converted to [object Object]
so, it will be added as a normal string giving the result [object Object][object Object]
*/
