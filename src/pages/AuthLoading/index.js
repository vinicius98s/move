import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import asyncStorageKeys from '../../utils/asyncStorageKeys';

const AuthLoading = ({navigation}) => {
  const handleAuth = async () => {
    const authToken = await AsyncStorage.getItem(asyncStorageKeys.authToken);
    navigation.navigate(authToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return null;
};

export default AuthLoading;
