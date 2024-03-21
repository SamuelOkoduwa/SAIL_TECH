// Define the product

// Using interface
interface Product {
    name: string,
    price: number,
    quantity: number
}

let basket:Product[];

function addProduct(item:Product) {
    basket.push
}

function remProduct(itemName:string) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === itemName) {
            basket.splice(i, 1)
        } 
    }
    return (basket)
}