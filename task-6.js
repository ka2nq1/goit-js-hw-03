function calculateTotalPrice (array, prop) {
    let total = 0;
    for (const product of array) {
        if (product.name === prop) {
            total += product.price * product.quantity;
        }
    }
    return total;
}

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
]; 

console.log(calculateTotalPrice(products, 'Радар'));  

console.log(calculateTotalPrice(products, 'Сканер')); 

console.log(calculateTotalPrice(products, 'Захват'));

console.log(calculateTotalPrice(products, 'Дроид')); 