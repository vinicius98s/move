import {useEffect} from 'react';
import {withTheme} from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import asyncStorageKeys from '../../utils/asyncStorageKeys';

const AuthLoading = ({navigation, theme}) => {
  const handleAuth = async () => {
    const authToken = await AsyncStorage.getItem(asyncStorageKeys.authToken);
    navigation.navigate(authToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    handleAuth();
  });

  return null;
};

export default withTheme(AuthLoading);
