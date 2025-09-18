import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.centerContainer]}>
      <Text style={globalStyles.title}>Login Screen</Text>
      <Text style={globalStyles.caption}>To be implemented with complete app</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;