var Grocery = /** @class */ (function () {
    function Grocery(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.groceryList = name + ' ' + price + ' ' + quantity + ' ';
    }
    return Grocery;
}());
var milk = new Grocery('Milk', 5, 400);
var bread = new Grocery('Bread', 6, 500);
function groceryList(item) {
    return "Item: " + item.name + ", Price: $" + item.price + ", " + "Quantity: " + item.quantity;
}
var groceryListed = [groceryList(milk), groceryList(bread)];
document.body.textContent = groceryListed.toString();
