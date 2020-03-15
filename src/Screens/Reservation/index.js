import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

const ReservationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../Assets/Images/Background.jpeg')} style={styles.imageBackground}>
        <Text>Under Construction...</Text>
        <TouchableOpacity style={styles.btnDetails} onPress={() => navigation.navigate('Reservation-Details') } >
          <Text>Detailed Reservation</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ReservationScreen;
