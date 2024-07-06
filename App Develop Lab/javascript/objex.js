function createProduct(name,price,discount,code){
    let Product= {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: code
    }
    return Product;
}

const football=createProduct('football',400,10,'F30');
console.log(football);

//Constructor-function
function Product(name,price,discount,code){
    this.name =name;
    this.price=price;
    this.discount=discount;
    this.code=code;
    this.calculateDiscount = function(){
        return price*discount/100;
    }

}
const mobile = new Product("Iphone",30000,5,'op20');
console.log(mobile);
console.log(mobile.calculateDiscount());

