import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TouchableOpacity, Text, Image,
} from 'react-native';

import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../Assets/Images/Logo.png')} style={styles.image} />
      <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login') }>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register') }>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
