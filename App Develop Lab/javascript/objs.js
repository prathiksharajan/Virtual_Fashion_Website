//let's create an object

/*const course={
    lecture: 10,
    section: 3,
    title: 'Javascript',
    //nested property
    notes: {
        introduction: "Welcome to JS Course"
    },
    //definig a function for this object
    enroll(){
        console.log('you are successfully enrolled');
    }

}
course.enroll();
//lets print the entire object
console.log(course);

//even after creating an object, we can create new properties
//example
course.price=99;*/

//Factory function
/*function createCourse(title){
    /*const course={
        lecture: 10,
        section: 3,
        title: 'Javascript',
        //nested property
        notes: {
            introduction: "Welcome to JS Course"
        },
        //definig a function for this object
        enroll(){
            console.log('you are successfully enrolled');
        }
    
    }
    return course;
    return{
            title: title,
            //definig a function for this object
            enroll(){
                console.log('you are successfully enrolled');
            }
        
    }
}*/

/*const course=createCourse('Javascript');
course.enroll();*/

/*const newCourse = createCourse('Javascript');


//Constructor Function, name should be same as the class name
//this keyword 
function Course(title){
    this.title = title;
    this.enroll=function(){
        console.log('you are successfully enrolled');
    }

}

const course= new Course('Javascript');
//here, the new keyword points to an empty object
//Print Constructor , that is the function from which this object has been created
console.log("Constructor");
console.log(course.constructor);
course.enroll();

//let's delete a property of an object
delete course.title;
console.log(course);

//let's dynamically create a function
course.checkEnrollment = function(){
    console.log('30 users enrolled');
}
console.log(course.checkEnrollment);
console.log(newCourse.constructor);

//Objects are muttable, dynamically methods and properties can be created but STring is also an object but immutable

//Primitive data type
let num=10;
//Pass by value, only the value of the variable is passed
let num1=num;
num=12;

console.log(num);
console.log(num1);

//Reference datatype
let obj ={
    num:19 
}
//Pass by reference, i.e the memory location where the object was stored has been passed
let obj1 = obj;
obj.num=15;

console.log(obj);
console.log(obj1);*/


//Pass by value , example  
const course = {
    title:'JS',
    enroll(){
        console.log('you are successfully enrolled');
    }
}

//...obj_name used for copying the object
const course1={...course}
console.log(course1);
course1.title="CSS";
console.log(course1);
console.log(course);

//using loops to iterate through the properties of the objects
for(let key in course){
    console.log(key,course[key])
}

//using for of loop, here Objects.keys() method returns an array containing the keys of the object, for example, here the array would be ['title','enroll']
for(let key of Object.keys(course)){
    console.log(key,course[key]);
}




