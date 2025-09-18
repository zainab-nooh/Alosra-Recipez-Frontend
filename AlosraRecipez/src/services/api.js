import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../utils/constants';

// Get base URL with development device support
const getBaseURL = () => {
  const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';
  
  // For development on physical device, replace localhost with your computer's IP
  if (__DEV__ && baseURL.includes('localhost')) {
    // Replace 'localhost' with your actual IP address for physical device testing
    // Example: return baseURL.replace('localhost', '192.168.1.100');
    return baseURL;
  }
  
  return baseURL;
};

const BASE_URL = getBaseURL();

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error getting token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired, clear storage
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ACCESS_TOKEN, 
        STORAGE_KEYS.REFRESH_TOKEN, 
        STORAGE_KEYS.USER_DATA
      ]);
      // Navigation to login will be handled by AuthContext
    }
    return Promise.reject(error);
  }
);

export default api;