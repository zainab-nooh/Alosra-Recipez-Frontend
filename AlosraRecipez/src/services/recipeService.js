import api from './api';

export const recipeService = {
  async getCategories() {
    try {
      const response = await api.get('/recipes/categories/');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch categories' 
      };
    }
  },

  async getRecipesByCategory(categoryId, page = 1, limit = 10) {
    try {
      const response = await api.get(`/recipes/by-category/${categoryId}?page=${page}&limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch recipes' 
      };
    }
  },

  async getRecipeById(recipeId) {
    try {
      const response = await api.get(`/recipes/${recipeId}/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch recipe details' 
      };
    }
  },

  async searchRecipes(query, page = 1, limit = 10) {
    try {
      const response = await api.get(`/recipes/search?q=${query}&page=${page}&limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to search recipes' 
      };
    }
  },
};