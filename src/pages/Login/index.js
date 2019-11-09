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
import {validateEmail, validatePassword} from '../../utils/validateForm';
import asyncStorageKeys from '../../utils/asyncStorageKeys';
import api from '../../services/api';

function Login({navigation}) {
  const [email, setEmail] = useState({value: '', isValid: false, message: ''});
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    message: '',
  });
  const [errorLogging, setErrorLogging] = useState(false);

  const isKeyboardShown = useKeyboard();

  const handleFormValidation = () => {
    setErrorLogging(false);
    const emailValidation = validateEmail(email.value);
    const passwordValidation = validatePassword(password.value);

    setPassword({
      ...password,
      isValid: passwordValidation.isValid,
      message: passwordValidation.message,
    });

    setEmail({
      ...email,
      isValid: emailValidation.isValid,
      message: emailValidation.message,
    });

    handleLogin();
  };

  const handleLogin = async () => {
    if (email.isValid && password.isValid) {
      try {
        const response = await api.post('/sessions', {
          email: email.value,
          password: password.value,
        });

        if (response.data.token) {
          // await AsyncStorage.setItem(asyncStorageKeys.authToken, data.token);
          console.tron.log(response.data.token);
        }
      } catch (err) {
        const errorMessage =
          err.response.data.error || 'Erro desconhecido. Tente novamente';
        setErrorLogging(errorMessage);
      }
    }
  };

  return (
    <InitialAuthScreens
      preventKeyboard={isKeyboardShown}
      handleLogin={handleFormValidation}>
      <Container>
        <InputsWrapper>
          <Input
            placeholder="E-mail"
            icon="email-outline"
            value={email.value}
            onChangeText={text =>
              setEmail({value: text, isValid: false, message: ''})
            }
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
              setPassword({value: text, isValid: false, message: ''})
            }
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
          {errorLogging && <LoginError>{errorLogging}</LoginError>}
          <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
        </FormActionsWrapper>
      </Container>
    </InitialAuthScreens>
  );
}

export default withNavigation(Login);
