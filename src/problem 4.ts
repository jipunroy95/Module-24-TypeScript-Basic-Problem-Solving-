//  Shopping Cart Calculator
type Product = {
    name: string;
    price: number;
};

function calculateCartTotal(products: Product[]): number {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
}