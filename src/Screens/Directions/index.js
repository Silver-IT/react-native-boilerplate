import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

const DirectionsScreen = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude || 0);
      setLongitude(info.coords.longitude || 0);
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} showsUserLocation={true} region={{ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        <MapView.Marker coordinate={{ latitude, longitude }} title="My Position" draggable />
      </MapView>
    </SafeAreaView>
  );
};

export default DirectionsScreen;
