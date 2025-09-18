import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { CartProvider } from './src/context/CartContext';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <CartProvider>
          <AppNavigator />
          <Toast />
        </CartProvider>
      </AuthProvider>
    </>
  );
}