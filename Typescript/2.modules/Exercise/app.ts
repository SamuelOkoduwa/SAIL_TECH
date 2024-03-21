/**
 * Define an interface called product with properties like name, price and quantity. Implement function for adding product, removing product, and calculating total prize. Export the interface and functions from the module. In a separate, file import the interface and fucntions, to demostrate adding product, removing product and calculating the total prize, Hint how to add an array
 */

// Steps
// Empty array
// Function to add product to the empty array
// Function to remove from the array
// Function to Loop through to array and give it a total

import { Product } from "./proInter";

// Products
let arr: object[] = [
    {
        name: "Sugar",
            price: 50,
            quantiy: 10
    }
]
       

// let product1: Product = {
//     name: "Sugar",
//     price: 50,
//     quantiy: 10
// };

let product2: Product = {
    name: "Bread",
    price: 50,
    quantiy: 10
};

let product3: Product = {
    name: "Salt",
    price: 50,
    quantiy: 10
};

let product4: Product = {
    name: "Rice",
    price: 50,
    quantiy: 10
};
// arr.push(product1)
console.log(arr)
// Empty Array of products
let products: Product[] = [];
// products.push(product1, product2);

// Function to add product
function addProduct(proAdd:(string[] |number[])) {
    return 
}
