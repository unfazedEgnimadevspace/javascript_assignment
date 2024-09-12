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

// Task 3
// Explanation: This function `updateStock` accepts a product object and the number of units sold. The function then subtracts the unitsold from the
// quantity of the product. After updating the stock, it log a message if the product is "out of stock" or "low stock"
// it does this by employing a if, else if and else statement

const updateStock = (product, unitsSold) => {
    product.quantity -= unitsSold;
    if (product.quantity <= 0) {
        console.log(`${product.name} out of stock.`);
        product.quantity = 0;
    } else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} is now low on stock.`);
    } else {
        console.log(`${product.name} stock updated. Quantity remaining is: ${product.quantity}`);
    }
}

// Task 4 
// Explanation: The `checkLowStock` is a function that goes through all the products in the inventory to check which ones are low in stock. It then outputs each products that are low in stock
// It makes use of the `for each loop` to go over each product and the console.log method to output each product with a low stock level.

const checkLowStock = () => {
    inventory.forEach((product) => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is low on stock.`);
        }
    })
} 

// Task 5 
// Explanation: The `calculateInventoryValue` function calculates the total value of the of the products in stock by multiplying the price by the quantity for each product.
// it makes use of the javascript reduce method to sum up the value of all the products in the inventory

const calculateInventoryValue = () => {
    const totalValueOfAllProducts = inventory.reduce((total, product) => total + (product.price * product.quantity), 0)
    return totalValueOfAllProducts;
}

// Task 6 
// Explanation: The`processSale` function takes a product name and the number of units sold as parameters, then it finds that particular product in the inventory using the find keyword. it then uses the 
// updateStock function to reduce the product's quantity and log the right message. If the product is not found an error message is printed.

const processSale = (productName, unitsSold) => {
    const product = inventory.find(item => item.name === productName);
    if (product) {
        updateStock(product, unitsSold);
    } else {
        console.log(`Error: ${productName} is not in the inventory.`);
    }
}
