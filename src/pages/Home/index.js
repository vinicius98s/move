import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {MARKERS} from './constants';
import {
  Balance,
  BalanceValue,
  BalanceText,
  ScanButton,
  ScanWrapper,
} from './styles';

import api from '../../services/api';
import customMapStyle from '../../utils/customMapStyle';
import formatMoney from '../../utils/formatMoney';
import getAuthToken from '../../utils/getAuthToken';
import Helmet from '../../assets/Helmet';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function Home({navigation}) {
  const [balance, setBalance] = useState(0);
  const [region, setRegion] = useState({
    latitude: -23.6223115,
    longitude: -46.6962498,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const getBalance = async () => {
    const authToken = await getAuthToken();
    const {data} = await api.get('/balance', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    setBalance(data.balance);
  };

  useEffect(() => {
    getBalance();
  }, []);

  useEffect(() => {
    const willFocus = navigation.addListener('willFocus', () => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          setRegion({
            ...region,
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        () => {},
        {enableHighAccuracy: true, timeout: 90000, maximumAge: 60000},
      );
    });

    return () => {
      willFocus.remove();
    };
  }, []);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={regionUpdate => setRegion(regionUpdate)}
        customMapStyle={customMapStyle}>
        {MARKERS.map(mark => (
          <Marker
            key={mark.key}
            coordinate={{
              latitude: mark.latitude,
              longitude: mark.longitude,
            }}>
            <Helmet />
          </Marker>
        ))}
      </MapView>
      <Balance>
        <BalanceText>Saldo:</BalanceText>
        <BalanceValue>{formatMoney(balance)}</BalanceValue>
      </Balance>
      <ScanWrapper>
        <ScanButton onPress={() => {}}>
          <BalanceValue>Escanear</BalanceValue>
        </ScanButton>
      </ScanWrapper>
    </>
  );
}

export default withNavigation(Home);
