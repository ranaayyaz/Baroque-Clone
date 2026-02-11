// Cart Inventory Management Helper
// This module handles inventory deductions when products are purchased

export const processCartCheckout = (cartItems, inventoryManager) => {
  /**
   * Process inventory deduction for successful checkout
   * @param {Array} cartItems - Array of items in cart with quantities
   * @param {Object} inventoryManager - useInventory hook from InventoryContext
   * @returns {boolean} - Whether all items were successfully processed
   */

  try {
    cartItems.forEach((item) => {
      // Decrease stock for each product by the quantity in cart
      inventoryManager.decreaseStock(item.id, item.quantity || 1);
    });
    return true;
  } catch (error) {
    console.error("Error processing cart checkout:", error);
    return false;
  }
};

export const validateCartInventory = (cartItems, inventoryManager) => {
  /**
   * Validate if all cart items have sufficient stock
   * @param {Array} cartItems - Array of items in cart
   * @param {Object} inventoryManager - useInventory hook
   * @returns {Object} - { isValid: boolean, issues: Array<string> }
   */

  const issues = [];

  cartItems.forEach((item) => {
    const stock = inventoryManager.getStock(item.id);
    const quantity = item.quantity || 1;

    if (stock < quantity) {
      issues.push(
        `Product ID ${item.id}: Only ${stock} pieces available, but ${quantity} requested`
      );
    }

    if (stock === 0) {
      issues.push(`Product ID ${item.id}: Out of stock`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
  };
};

export const getStockStatus = (stock) => {
  /**
   * Get human-readable stock status
   * @param {number} stock - Current stock count
   * @returns {Object} - { status: string, color: string }
   */

  if (stock === 0) {
    return { status: "Out of Stock", color: "red" };
  }
  if (stock <= 3) {
    return { status: "Low Stock", color: "yellow" };
  }
  if (stock <= 7) {
    return { status: "Medium Stock", color: "blue" };
  }
  return { status: "In Stock", color: "green" };
};
