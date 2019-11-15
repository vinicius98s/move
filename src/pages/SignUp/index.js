import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';

import {InputsWrapper, SignUpError} from './styles';

import api from '../../services/api';
import asyncStorageKeys from '../../utils/asyncStorageKeys';
import InitialAuthScreens from '../../components/InitialAuthScreens';
import Input from '../../components/Input';
import useKeyboard from '../../utils/useKeyboard';
import {
  handleEmailValidation,
  handlePasswordValidation,
  handleNameValidation,
} from '../../utils/validateForm';

function SignUp({navigation}) {
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [isLastInputFocused, setIsLastInputFocused] = useState(false);
  const [email, setEmail] = useState({
    value: 'vinicius.2010.s@gmail.com',
    isValid: false,
    message: '',
  });
  const [name, setName] = useState({
    value: 'Vinícius',
    isValid: false,
    message: '',
  });
  const [password, setPassword] = useState({
    value: '12345',
    isValid: false,
    message: '',
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '12345',
    isValid: false,
    message: '',
  });

  const emailValidation = () => handleEmailValidation(email, setEmail);

  const passwordValidation = () =>
    handlePasswordValidation(password, setPassword);

  const nameValidation = () => handleNameValidation(name, setName);

  const confirmPasswordValidation = () => {
    const isValid = password.value === confirmPassword.value;

    if (confirmPassword.value) {
      setConfirmPassword({
        ...confirmPassword,
        isValid,
        message: 'Senhas não conferem',
      });
    }

    return isValid;
  };

  const handleSignUp = async () => {
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();
    const isConfirmPasswordValid = confirmPasswordValidation();

    if ((isNameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid)) {
      setLoading(true);
      try {
        const {data} = await api.post('/users', {
          name: name.value,
          email: email.value,
          password: password.value,
        });

        if (data.token) {
          await AsyncStorage.setItem(asyncStorageKeys.authToken, data.token);
          const hadFirstLogin = await AsyncStorage.getItem(
            asyncStorageKeys.firstLogin,
          );
          navigation.navigate(!hadFirstLogin ? 'FirstLogin' : 'Home');
        }
      } catch (err) {
        console.tron.log(err.response);
        const errorMessage =
          err.response.data.error || 'Erro desconhecido. Tente novamente';
        setSignUpError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
  };

  const isKeyboardShown = useKeyboard();

  return (
    <InitialAuthScreens
      preventKeyboard
      expandForm
      handleSignUp={handleSignUp}
      loading={loading}>
      <InputsWrapper isLastInputFocused={isLastInputFocused && isKeyboardShown}>
        <Input
          placeholder="Nome"
          icon="person-outline"
          value={name.value}
          onChangeText={text =>
            setName({isValid: false, message: '', value: text})
          }
          onBlur={nameValidation}
          validation={{isValid: name.isValid, message: name.message}}
        />
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
        <Input
          placeholder="Confirmar senha"
          icon="lock-outline"
          value={confirmPassword.value}
          onChangeText={text =>
            setConfirmPassword({isValid: false, message: '', value: text})
          }
          onBlur={() => {
            confirmPasswordValidation();
            setIsLastInputFocused(false);
          }}
          onFocus={() => setIsLastInputFocused(true)}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          validation={{
            isValid: confirmPassword.isValid,
            message: confirmPassword.message,
          }}
        />
        {!!signUpError && <SignUpError>{signUpError}</SignUpError>}
      </InputsWrapper>
    </InitialAuthScreens>
  );
}

export default withNavigation(SignUp);
