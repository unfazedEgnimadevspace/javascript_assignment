Inventory Management System

Project Overview

The Inventory Management System is a JavaScript-based application designed to help a local electronics store manage its product inventory. It tracks stock levels, updates inventory after sales, alerts when stock levels are low, and calculates the total value of the remaining stock for each product.

This project is a coding challenge aimed at demonstrating how to work with objects, arrays, and control structures in JavaScript to solve real-world problems.

Features

Display Product Details: View product information, including stock status (In Stock/Low Stock).
Update Stock Levels: Automatically reduce product quantity after sales.
Low Stock Alerts: Check and alert when stock levels are low.
Calculate Total Inventory Value: Calculate the total financial value of all products in stock.
Process Sales: Manage product sales and update inventory accordingly.


Project Structure

inventory_management.js: The main JavaScript file containing the implementation of the inventory management system.


How It Works

Product Inventory: The system contains an array of product objects, each with properties: name, price, quantity, and lowStockLevel.
Functions:
displayProductDetails(product): Displays the details and stock status of a product.
updateStock(product, unitsSold): Updates the quantity of a product after a sale and checks for low or out-of-stock status.
checkLowStock(): Iterates through the inventory and logs products that are low on stock.
calculateInventoryValue(): Returns the total value of all products in stock.
processSale(productName, unitsSold): Handles sales by updating the inventory for a specified product.