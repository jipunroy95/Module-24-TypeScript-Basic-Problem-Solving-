"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
}
//# sourceMappingURL=problem%204.js.map