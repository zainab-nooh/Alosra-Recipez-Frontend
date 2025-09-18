import api from './api';

export const orderService = {
  async createOrder(orderData) {
    try {
      const response = await api.post('/orders/', orderData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to create order' 
      };
    }
  },

  async getOrders(page = 1, limit = 10) {
    try {
      const response = await api.get(`/orders/?page=${page}&limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch orders' 
      };
    }
  },

  async getOrderById(orderId) {
    try {
      const response = await api.get(`/orders/${orderId}/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch order details' 
      };
    }
  },

  async cancelOrder(orderId) {
    try {
      const response = await api.put(`/orders/${orderId}/cancel/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to cancel order' 
      };
    }
  },
};