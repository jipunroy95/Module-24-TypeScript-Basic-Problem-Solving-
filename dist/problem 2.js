"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Store Inventory Status
function getStockStatus(quantity) {
    if (quantity === 0) {
        return "Out of Stock";
    }
    else if (quantity <= 5) {
        return "Almost Sold Out";
    }
    else if (quantity <= 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
}
//# sourceMappingURL=problem%202.js.map