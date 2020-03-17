import React from 'react';
import { Text, ImageBackground, TouchableOpacity, View } from 'react-native';

import styles from './styles';

function HomeAccessScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../../Assets/Images/Background.jpeg')} style={styles.imageBackground} imageStyle={{ resizeMode: 'cover' }}>
        <Text>Under Construction...</Text>
        <TouchableOpacity style={styles.btnDetails} onPress={() => navigation.navigate('HouseAccess-Details') } >
          <Text>Detailed House Access</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    );
}

export default HomeAccessScreen;
