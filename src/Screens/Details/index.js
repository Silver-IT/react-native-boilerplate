import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styles from './styles';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail Page to show Stack Navigation</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;
