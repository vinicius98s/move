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
  Container,
} from './styles';

import {handleApiRequest} from '../../services/api';
import customMapStyle from '../../utils/customMapStyle';
import formatMoney from '../../utils/formatMoney';
import Helmet from '../../assets/Helmet';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function Home({navigation}) {
  const [balance, setBalance] = useState(0);
  const [region, setRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const getBalance = async () => {
    const {data} = await handleApiRequest({
      method: 'get',
      endpoint: '/balance',
    });

    setBalance(data.balance);
  };

  useEffect(() => {
    getBalance();
  }, []);

  useEffect(() => {
    if (!region.latitude || !region.longitude) {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          setRegion({
            ...region,
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        () => {
          setRegion({
            ...region,
            latitude: -23.6223115,
            longitude: -46.6962498,
          });
        },
        {enableHighAccuracy: true, timeout: 3000, maximumAge: 60000},
      );
    }
  }, []);

  return (
    <>
      {region.latitude && region.longitude ? (
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
      ) : (
        <Container />
      )}
      <Balance onPress={() => navigation.navigate('Wallet')}>
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
