import AsyncStorage from '@react-native-community/async-storage';
import asyncStorageKeys from './asyncStorageKeys';

export default async function getAuthToken() {
  const authToken = await AsyncStorage.getItem(asyncStorageKeys.authToken);
  return authToken;
}
