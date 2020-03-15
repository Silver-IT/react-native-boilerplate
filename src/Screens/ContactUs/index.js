import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Linking, TouchableOpacity } from 'react-native';

import styles from './styles';

function ContactUsScreen() {
  const handleEmail = () => {
    Linking.openURL('mailto:alyosha.ruslanovich@gmail.com?subject=Test-Subject&body=Test-Body');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Under Contruction...</Text>
      <TouchableOpacity style={styles.btnSubmit} onPress={() => handleEmail() } >
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ContactUsScreen;
