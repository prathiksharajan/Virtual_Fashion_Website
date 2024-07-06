//If we want to use ' or "" inside a string use it with backslash\
//example
let h="\"welcome\"";
console.log(h)

//Converting string to number
let numStr="78"
Number(numStr)
console.log("number to string "+ numStr)

//Converting number to string
let num=123
console.log("string to number "+num.toString())

//METHODS in string
//length
var favshow="friends";
console.log("length of "+favshow+" "+favshow.length)

//index
//let's retrieve the first char of a string
console.log(favshow[0])

console.log(favshow[6])

//let's find a index of a character in a string
console.log(favshow.indexOf("end"))

//slice-method used to get substring
console.log(favshow.slice(3,7))

//case-conversion methods
var w="hello WelOMe";
console.log(w.toUpperCase());
console.log(w.toLowerCase());
