//for-loop syntax : 
for(let i=5;i<51;i=i+5){
    console.log(i);
}

//printing even numbs
console.log("Even Numbers");
for(let i=0;i<10;i++){
    if(i%2==0){
        console.log(i);
    }
}

//while loop syntax:
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//do-while loop syntax:
let j=10;
do{
    console.log("Hello World");
    j--;
} while(j<=0)

//for in loop syntax
//first, create an object
//for-in loop using objects
let animal = {
    name : "Zebra",
    leg : 4
};

for(let key in animal){
    console.log(key, animal[key]);
}

//for in loop using arrays
let names = ["Rahul","Neha","Aman"];
//here index is a variable and then names is the name of the array
for(let index in names){
   console.log(index, names[index]);
}

//For-Of loop syntax:
for(let name of names){
    console.log(name);
}