import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  ForgotPasswordText,
  InputsWrapper,
  LoginError,
  FormActionsWrapper,
} from './styles';

import InitialAuthScreens from '../../components/InitialAuthScreens';
import Input from '../../components/Input';
import useKeyboard from '../../utils/useKeyboard';
import {
  handleEmailValidation,
  handlePasswordValidation,
} from '../../utils/validateForm';
import asyncStorageKeys from '../../utils/asyncStorageKeys';
import api from '../../services/api';

function Login({navigation}) {
  const [errorLogging, setErrorLogging] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({value: '', isValid: false, message: ''});
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    message: '',
  });

  const isKeyboardShown = useKeyboard();

  const emailValidation = () =>
    handleEmailValidation(email, setEmail, () => setErrorLogging(false));

  const passwordValidation = () =>
    handlePasswordValidation(password, setPassword, () =>
      setErrorLogging(false),
    );

  const handleLogin = async () => {
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();

    if (isEmailValid && isPasswordValid) {
      setLoading(true);
      try {
        const {data} = await api.post('/sessions', {
          email: email.value,
          password: password.value,
        });

        if (data.token) {
          await AsyncStorage.setItem(asyncStorageKeys.authToken, data.token);
          navigation.navigate('Home');
        }
      } catch (err) {
        const errorMessage =
          err.response.data.error || 'Erro desconhecido. Tente novamente';
        setErrorLogging(errorMessage);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <InitialAuthScreens
      preventKeyboard={isKeyboardShown}
      handleLogin={handleLogin}
      loading={loading}>
      <Container>
        <InputsWrapper>
          <Input
            placeholder="E-mail"
            icon="email-outline"
            value={email.value}
            onChangeText={text =>
              setEmail({isValid: false, message: '', value: text})
            }
            onBlur={emailValidation}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            validation={{
              isValid: email.isValid,
              message: email.message,
            }}
          />
          <Input
            placeholder="Senha"
            icon="lock-outline"
            value={password.value}
            onChangeText={text =>
              setPassword({isValid: false, message: '', value: text})
            }
            onBlur={passwordValidation}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            validation={{
              isValid: password.isValid,
              message: password.message,
            }}
          />
        </InputsWrapper>
        <FormActionsWrapper>
          {!!errorLogging && <LoginError>{errorLogging}</LoginError>}
          <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
        </FormActionsWrapper>
      </Container>
    </InitialAuthScreens>
  );
}

export default withNavigation(Login);
