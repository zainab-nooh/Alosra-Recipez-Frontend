import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';

const OrdersScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.centerContainer]}>
      <Text style={globalStyles.title}>Orders Screen</Text>
      <Text style={globalStyles.caption}>To be implemented with complete app</Text>
    </SafeAreaView>
  );
};

export default OrdersScreen;