import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';

const RecipeDetailScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.centerContainer]}>
      <Text style={globalStyles.title}>Recipe Detail Screen</Text>
      <Text style={globalStyles.caption}>To be implemented with complete app</Text>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;