import api from './api';

export const cartService = {
  async getCart() {
    try {
      const response = await api.get('/cart/');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch cart' 
      };
    }
  },

  async addToCart(item) {
    try {
      const response = await api.post('/cart/add/', item);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to add to cart' 
      };
    }
  },

  async updateCartItem(cartItemId, updateData) {
    try {
      const response = await api.put(`/cart/items/${cartItemId}/`, updateData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to update cart item' 
      };
    }
  },

  async removeFromCart(cartItemId) {
    try {
      await api.delete(`/cart/items/${cartItemId}/`);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to remove from cart' 
      };
    }
  },

  async clearCart() {
    try {
      await api.delete('/cart/clear/');
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to clear cart' 
      };
    }
  },
};