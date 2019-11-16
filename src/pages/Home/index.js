import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {
  Balance,
  BalanceValue,
  BalanceText,
  ScanButton,
  ScanWrapper,
} from './styles';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function Home() {
  const [region, setRegion] = useState({
    latitude: -23.6223115,
    longitude: -46.6962498,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setRegion({
          ...region,
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      error => {
        console.tron.log(error);
      },
      {enableHighAccuracy: true, timeout: 90000, maximumAge: 60000},
    );
  }, []);

  return (
    <>
      <Balance>
        <BalanceText>Saldo:</BalanceText>
        <BalanceValue>R$ 99,00</BalanceValue>
      </Balance>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={regionUpdate => setRegion(regionUpdate)}
      />
      <ScanWrapper>
        <ScanButton onPress={() => {}}>
          <BalanceValue>Escanear</BalanceValue>
        </ScanButton>
      </ScanWrapper>
    </>
  );
}
