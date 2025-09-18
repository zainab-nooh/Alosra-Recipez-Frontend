import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../utils/constants';

export const authService = {
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      const { access_token, refresh_token, user } = response.data;
      
      // Store tokens and user data
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.ACCESS_TOKEN, access_token],
        [STORAGE_KEYS.REFRESH_TOKEN, refresh_token],
        [STORAGE_KEYS.USER_DATA, JSON.stringify(user)],
      ]);
      
      return { success: true, data: { user, access_token } };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Login failed' 
      };
    }
  },

  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      const { access_token, refresh_token, user } = response.data;
      
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.ACCESS_TOKEN, access_token],
        [STORAGE_KEYS.REFRESH_TOKEN, refresh_token],
        [STORAGE_KEYS.USER_DATA, JSON.stringify(user)],
      ]);
      
      return { success: true, data: { user, access_token } };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Registration failed' 
      };
    }
  },

  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ACCESS_TOKEN, 
        STORAGE_KEYS.REFRESH_TOKEN, 
        STORAGE_KEYS.USER_DATA
      ]);
      return { success: true };
    }
  },

  async getCurrentUser() {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      return null;
    }
  },

  async isAuthenticated() {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      return !!token;
    } catch (error) {
      return false;
    }
  },
};