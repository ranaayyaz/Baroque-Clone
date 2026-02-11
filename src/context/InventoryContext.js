import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../mock/product";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(() => {
    // Initialize inventory from localStorage or with default 10 pieces each
    const stored = localStorage.getItem("productInventory");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse inventory from localStorage:", e);
      }
    }

    // Create default inventory with 10 pieces for each product
    const defaultInventory = {};
    products.forEach((product) => {
      defaultInventory[product.id] = 10;
    });
    return defaultInventory;
  });

  // Save inventory to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("productInventory", JSON.stringify(inventory));
  }, [inventory]);

  // Get stock count for a specific product
  const getStock = (productId) => {
    return inventory[productId] ?? 10;
  };

  // Check if product is in stock
  const isInStock = (productId, quantity = 1) => {
    return getStock(productId) >= quantity;
  };

  // Decrease stock when item is sold
  const decreaseStock = (productId, quantity = 1) => {
    setInventory((prev) => {
      const currentStock = prev[productId] ?? 10;
      const newStock = Math.max(0, currentStock - quantity);
      return {
        ...prev,
        [productId]: newStock,
      };
    });
  };

  // Increase stock (for returns or restocking)
  const increaseStock = (productId, quantity = 1) => {
    setInventory((prev) => {
      const currentStock = prev[productId] ?? 10;
      return {
        ...prev,
        [productId]: currentStock + quantity,
      };
    });
  };

  // Reset inventory for a product to default (10)
  const resetStock = (productId) => {
    setInventory((prev) => ({
      ...prev,
      [productId]: 10,
    }));
  };

  // Reset all inventory
  const resetAllInventory = () => {
    const defaultInventory = {};
    products.forEach((product) => {
      defaultInventory[product.id] = 10;
    });
    setInventory(defaultInventory);
  };

  const value = {
    inventory,
    getStock,
    isInStock,
    decreaseStock,
    increaseStock,
    resetStock,
    resetAllInventory,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within InventoryProvider");
  }
  return context;
};
