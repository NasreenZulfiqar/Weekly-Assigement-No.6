// write a programe that calculate the discount for a product based on its 
//price. if  the price is above $100, apply a 10% discount; otherwise,
//apply a 5% discount.
function calculateDiscount(price: number): number{
    return price > 100 ? 0.1 * price : 0.05 * price;
}

//requaird productprice
const productprice = 80;
console.log(`Discount: ${calculateDiscount(productprice)} USD`);