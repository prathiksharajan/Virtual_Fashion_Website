//Objects
//Objects are also stored inside a variable
//Syntax:
//Properties of an object is separated by comma
let animal={
    name: "Cow",
    legs: 4
}

console.log(animal);

//let's access the properties
//dot-notation access
console.log(animal.name);
//bracket notation access
console.log(animal["legs"])

//Arrays
//Declaration syntax
let selectBooks=["It ends with us","Grow rich","Emily in Paris"]
console.log(selectBooks)

//accessing a single element from the array
console.log(selectBooks[2])

//Functions
//Syntax:
function namasteWorld(){
    console.log("Hello World");
}
namasteWorld();

//function with parameters
function add(a,b){
    return a+b;
}
console.log(add(4,5));