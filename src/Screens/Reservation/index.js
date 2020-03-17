import React from 'react';
import { Text, ImageBackground, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ReservationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../Assets/Images/Background.jpeg')} style={styles.imageBackground}>
        <Text>Under Construction...</Text>
        <TouchableOpacity style={styles.btnDetails} onPress={() => navigation.navigate('Reservation-Details') } >
          <Text>Detailed Reservation</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ReservationScreen;
