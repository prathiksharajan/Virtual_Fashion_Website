//COERCION - 2 TYPES
//1.IMPLICIT
let c="5"+9;
console.log(c);

//2.EXPLICIT
let a=Number("5")+9;
console.log(a);

//Conversion basically occurs between these three data types
//1.String
//2.Boolean
//3.Number

//String - explicit
let str=String(123)
console.log(str + " "+ typeof(str));

//String - implicit
str=123+' '
console.log(str+" type "+typeof(str));

//Boolean - Explicit
