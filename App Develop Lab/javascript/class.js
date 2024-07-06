 //Syntax for Class
/*class Product{
    //first define the constructor function
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
}

let pencil = new Product('Pen',40,5,'p10');
console.log(pencil);

//Creating object using class expression
/*const Product1= class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
        this.discount=value;   
    }
    //method definition
    discountValue(){
        return this.discount*this.price/100;
    }
};

let chair=new Product1('Chair',499,15,'c10');
console.log(chair);*/

//getter and setter methods
//Getter used for getting the value of a variable & setter used for setting the value of variable


//Extending Class
class Product{
    constructor(itemName){
        this.itemName=itemName;
    }
    getItemName(){
        return this.itemName + " is a Product";
    }
}
//creating a subclass
class Furniture extends Product{
    constructor(itemName){
        super(itemName);
        //super function is used to call the constructor of the parent class
    }
    getItemName(){
        return this.itemName + " is a Furniture";
    }
} 


let pencil = new Product('Pen',40,5,'p10');
let chair=new Furniture('Chair',499,15,'c10');



