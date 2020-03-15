class Grocery {
  groceryList: string;
  constructor(public name: string, public price: number, public quantity: number) {
      this.groceryList = name + ' ' + price + ' '+ quantity + ' ';
  }
}

interface Items {
  name: string;
  price: number;
  quantity: number;
}

let milk = new Grocery('Milk', 5, 400)
let bread = new Grocery('Bread', 6, 500)

function groceryList(item: Items) {
  return  "Item: " + item.name + ", Price: $" + item.price + ", " +"Quantity: " + item.quantity;
}

var groceryListed = [groceryList(milk), groceryList(bread)]
document.body.textContent =  groceryListed.toString() 