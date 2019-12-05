import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Icon} from 'react-native-eva-icons';
import {RNCamera} from 'react-native-camera';

import {MARKERS} from './constants';
import {
  Balance,
  BalanceValue,
  BalanceText,
  ScanButton,
  ScanWrapper,
  Container,
  Modal,
  ModalWrapper,
  CloseModalIcon,
  ModalText,
  DisponibilityText,
  TextModalWrapper,
} from './styles';

import {handleApiRequest} from '../../services/api';
import customMapStyle from '../../utils/customMapStyle';
import formatMoney from '../../utils/formatMoney';
import Helmet from '../../assets/Helmet';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  preview: {
    zIndex: 99999,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

function Home({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
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

  const cameraRef = React.createRef();

  return (
    <>
      {openCamera ? (
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      ) : region.latitude && region.longitude ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          onRegionChangeComplete={regionUpdate => setRegion(regionUpdate)}
          customMapStyle={customMapStyle}>
          {MARKERS.map(mark => (
            <Marker
              onPress={() => setShowModal(true)}
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
      <Balance
        openedCamera={openCamera}
        onPress={() =>
          openCamera ? setOpenCamera(false) : navigation.navigate('Wallet')
        }>
        {openCamera ? (
          <Icon name="close-outline" width={30} height={30} fill="#000" />
        ) : (
          <>
            <BalanceText>Saldo:</BalanceText>
            <BalanceValue>{formatMoney(balance)}</BalanceValue>
          </>
        )}
      </Balance>
      <ScanWrapper>
        <ScanButton onPress={() => (!openCamera ? setOpenCamera(true) : null)}>
          <BalanceValue>
            {!openCamera ? 'Escanear' : 'Inserir código'}
          </BalanceValue>
        </ScanButton>
      </ScanWrapper>
    </>
  );
}

export default withNavigation(Home);
