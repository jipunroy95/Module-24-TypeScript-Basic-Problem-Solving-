//  Store Inventory Status
function getStockStatus(quantity: number): string {
    if (quantity === 0) {
        return "Out of Stock";
    } else if (quantity <= 5) {
        return "Almost Sold Out";
    } else if (quantity <= 20) {
        return "Available";
    } else {
        return "In Stock";
    }
}