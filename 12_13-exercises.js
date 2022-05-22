//1.

function sumNumbers(number) {
    return number[0] + number[1] + number[2];

}
console.log(sumNumbers([1, 2, 3]));

//2.

let setName = prompt("Please enter your user name");
console.log(setName);

3.

const flowers = [
    {
        Red: 'Rose', 
        Price: 3, 
        calculatePrice: function () {
            console.log(this.Red, this.Price);
        }
    },
    {
        White: 'Tulip', 
        Price: 1.5, 
        calculatePrice: function () {
            console.log(this.White, this.Price);
        }
    },
    {
        Pink: 'Lily',
        Price: 2.5,
        calculatePrice: function () {
            console.log(this.Pink, this.Price);
        }
    }
];
flowers.forEach(function(e) { console.log(e.calculatePrice()); })

//4.
class Shop {
    constructor (name, products){
        this.name = name;
        this.products = products;
    }
    getName(){
        return this;
    }
}
const shopName = new Shop ('Coop', 500)
console.log(shopName.getName());

//5.

class Market extends Shop {
    constructor (name, products, price){
        super(name, products)
        this.price = price
    }
}
const marketName = new Market ('Rema', 50000, '$500')

console.log(marketName.getName());