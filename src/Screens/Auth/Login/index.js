import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View, TouchableOpacity, TextInput, Text, Image,
} from 'react-native';

import styles from './styles';
import { connectAuth } from '../../../Redux/connects';

const LoginScreen = ({ navigation, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../Assets/Images/Logo.png')} style={styles.image} />
      <View style={styles.textGroup}>
        <View style={styles.inline}>
          <View style={styles.icon}>
            <Ionicons name="ios-mail" size={24} color="gray" />
          </View>
          <TextInput placeholder="Please type your email" style={styles.input}
            onChangeText={text => setEmail(text)} value={email} />
        </View>
        <View style={styles.inline}>
          <View style={styles.icon}>
            <Ionicons name="ios-lock" size={24} color="gray" />
          </View>
          <TextInput placeholder="Please type your password" style={styles.input}
            onChangeText={text => setPassword(text)} value={password} secureTextEntry={true}/>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.btnLogin} onPress={() => login('email', 'password') } >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register') } >
          <Text>Register now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default connectAuth(LoginScreen);
