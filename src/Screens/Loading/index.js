import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styles from './styles';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Loading Screen</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
