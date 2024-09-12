// Task 1
// Expalnation: The code below implements an array called `inventory`. It contains 5 electronic product objects that have the following attributes
// 1. name(string): This represents the name of the product
// 2. price(number): This represents the price of the product
// 3. quantity(number): This attribute represents the number of units currently in stock
//4. lowStockLevel(number):  This attribute represents the minimum stock level before the product is considered to be "low stock"

const inventory = [
    { name: 'Macbook Pro 2023', price: 1500, quantity: 30, lowStockLevel: 5 },
    { name: 'iPhone 14', price: 1000, quantity: 15, lowStockLevel: 4 },
    { name: 'Samsung Tablets', price: 700, quantity: 70, lowStockLevel: 13 },
    { name: 'Sony Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Lenovo Smartwatch', price: 250, quantity: 4, lowStockLevel: 1 }
];

// Task 2 
// Explanation: The function below `displayProductDetails` is a function that accepts a product as a parameter 
// then it logs out the name of the product, the price of the product, the quantity of the product in stock 
// and also a stock status. The stock status is determined by checking if the quantity in stock is higher or lower than the `lowStockLevel`.
// It uses the console.log method to display the product information and a ternary operator to determine the stock status.

const displayProductDetails = (product) => {
    const stockStatus = product.quantity > product.lowStockLevel ? "In Stock" : "Low Stock";

    console.log(`Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}, Stock Status: ${stockStatus}\n `)
}
