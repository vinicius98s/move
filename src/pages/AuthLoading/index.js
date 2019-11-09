import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {withTheme} from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import asyncStorageKeys from '../../utils/asyncStorageKeys';

import {Container} from './styles';

const AuthLoading = ({navigation, theme}) => {
  const handleAuth = async () => {
    const authToken = await AsyncStorage.getItem(asyncStorageKeys.authToken);
    navigation.navigate(authToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    handleAuth();
  });

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.green} />
    </Container>
  );
};

export default withTheme(AuthLoading);
