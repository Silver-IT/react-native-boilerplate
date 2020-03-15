import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login') }>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
