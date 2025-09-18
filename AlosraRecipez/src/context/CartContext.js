import React, { createContext, useState, useContext, useEffect } from 'react';
import { cartService } from '../services/cartService';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      loadCart();
    } else {
      clearCart();
    }
  }, [isAuthenticated]);

  const loadCart = async () => {
    try {
      setIsLoading(true);
      const result = await cartService.getCart();
      if (result.success) {
        setCartItems(result.data.items || []);
        setTotalAmount(result.data.total_amount || 0);
        setTotalItems(result.data.total_items || 0);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (item) => {
    try {
      setIsLoading(true);
      const result = await cartService.addToCart(item);
      if (result.success) {
        await loadCart();
      }
      return result;
    } catch (error) {
      return { success: false, error: 'Failed to add to cart' };
    } finally {
      setIsLoading(false);
    }
  };

  const updateCartItem = async (cartItemId, quantity) => {
    try {
      setIsLoading(true);
      const result = await cartService.updateCartItem(cartItemId, { number_of_people: quantity });
      if (result.success) {
        await loadCart();
      }
      return result;
    } catch (error) {
      return { success: false, error: 'Failed to update cart' };
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      setIsLoading(true);
      const result = await cartService.removeFromCart(cartItemId);
      if (result.success) {
        await loadCart();
      }
      return result;
    } catch (error) {
      return { success: false, error: 'Failed to remove from cart' };
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
    setTotalItems(0);
  };

  const value = {
    cartItems,
    totalAmount,
    totalItems,
    isLoading,
    addToCart,
    updateCartItem,
    removeFromCart,
    loadCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};