
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 400
    },
    {
        description: 'Pixel',
        price: 350
    }
];

//Tax = 0.15
const [total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax );


