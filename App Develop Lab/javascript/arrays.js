//Array is a linear data structure
//In JS, array is also a object, basically an object contains key-value pairs, similarly array contains index-arrayElement pair

const array = [1,2,3,4,5,6,7,8,9];
//here, array is not a keyword, but the name of the array
console.log(array);

//element at index 6
console.log(array[5]);

//accessing the last element
console.log(array[array.length-1]);

//Creating an array object
const num=new Array(1,2,3);
console.log(num);

//METHODS IN ARRAY CLASS
//Push - inserts element at the end of the array
num.push(4);
console.log(num);


//Unshift - inserts element at the start of the array
num.unshift(0);
console.log(num);

//Pop - removes an elemnt from the last
num.pop();
console.log(num);

//Shift - Removes an element from the start
console.log(num.shift());

num[0]="pop";

const names=['Aman','Akash','Pooja','Prakash','Akash'];
console.log(names);

//Index-of - returns the index of first occurence
console.log(names.indexOf('Akash'));

//Using from-index, searchs from that index
console.log(names.indexOf('Akash',3));

//LastIndexOf is used to get the index of last occurence
console.log(names.lastIndexOf('Akash'));

//Includes - used to check whether an element exists or not in the array
console.log(names.includes("Jai"));

//even can give the start location for search
console.log(names.includes('Prakash',2));

 

let channels = [{
    name:'C',
    subscriber : 1000
},{
    name:'java',
    subscriber : 2000
},{
    name: 'C++',
    subscriber: 3000

}];

//lets find the channel name which has 10,000 subscribers
console.log(channels.find(function(element){
    return element.name === 'C'
}) )

//giving function defintion using arrow
console.log(channels.find(element => element.subscriber==2000));

let names1=['Riya','Sanam'];

//Concat method
let names3=names1.concat(names);

console.log(names1.concat(names));

//Slice - for creating subarrays
console.log(names3.slice(3,6));

//Spread operator  
names3=[...names1,...names];

//For Loop
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//For-each loop,it is not inbuilt
names.forEach(function(name,index){
    console.log(name,index);
})

//Join
let student = ['S','h','i','v','a'];
student=student.join('_')
console.log(student); // here '' is a separator

//Split
console.log(student.split('_'))

//filter
let cities=[
    {name:'Blore', population:10000},
    {name:'Chennai', population:102000},
    {name:'Mumbai', population:1050000},

]

//console.log(cities.filter(element => element.population>100000));

//Map method
console.log(cities.map(element => element.population
    *2));



 

