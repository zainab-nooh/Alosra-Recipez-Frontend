export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  RECIPES: {
    CATEGORIES: '/recipes/categories/',
    BY_CATEGORY: '/recipes/by-category/',
    SEARCH: '/recipes/search',
    DETAIL: '/recipes/',
  },
  CART: {
    GET: '/cart/',
    ADD: '/cart/add/',
    UPDATE: '/cart/items/',
    REMOVE: '/cart/items/',
    CLEAR: '/cart/clear/',
  },
  ORDERS: {
    CREATE: '/orders/',
    LIST: '/orders/',
    DETAIL: '/orders/',
    CANCEL: '/orders/',
  },
};