import AsyncStorage from '@react-native-community/async-storage';

import asyncStorageKeys from './asyncStorageKeys';

async function signOut(navigation) {
  await AsyncStorage.removeItem(asyncStorageKeys.authToken);
  navigation.navigate('Login');
}

export default signOut;
